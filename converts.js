// convert.js
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import fs from "fs";
import path from "path";
import pkg from "glob";
const { glob } = pkg;

// Function to delete original files
function deleteOriginalFiles() {
  const patterns = [
    "public/**/*.{jpg,jpeg,png}",
    "public/*.{jpg,jpeg,png}"
  ];
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern);
    files.forEach(file => {
      try {
        fs.unlinkSync(file);
        console.log(`🗑️ Supprimé: ${file}`);
      } catch (error) {
        console.log(`⚠️ Impossible de supprimer: ${file}`);
      }
    });
  });
}

(async () => {
  try {
    // Convert images in each directory separately
    const directories = [
      { input: "public/*.{jpg,jpeg,png}", output: "public" },
      { input: "public/images/women/*.{jpg,jpeg,png}", output: "public/images/women" },
      { input: "public/images/men/*.{jpg,jpeg,png}", output: "public/images/men" },
      { input: "public/images/kids/*.{jpg,jpeg,png}", output: "public/images/kids" },
      { input: "public/images/3img/*.{jpg,jpeg,png}", output: "public/images/3img" }
    ];
    
    for (const dir of directories) {
      await imagemin([dir.input], {
        destination: dir.output,
        plugins: [imageminWebp({ quality: 80 })]
      });
      console.log(`✅ Converti: ${dir.input}`);
    }
    
    console.log("✅ Conversion terminée !");
    
    // Delete original files
    deleteOriginalFiles();
    
    console.log("✅ Tous les fichiers JPG/PNG ont été supprimés !");
    
  } catch (error) {
    console.error("❌ Erreur:", error);
  }
})();
