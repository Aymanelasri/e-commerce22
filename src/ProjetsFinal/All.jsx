import './Projets.css';
import { Link } from "react-router-dom";

import {  useContext } from "react";
import { CartContext } from "./CartContext";
import "@fontsource/roboto";          

import "@fontsource/poppins";



export default function All() {
  const { addToCart } = useContext(CartContext);
  

  const products = {
    women: [
      {id:1,title:"Elegant Midi Dress",prix:300  ,description:"A lightweight printed midi dress that offers comfort and elegance for everyday wear or special occasions.",img:"/images/women/photo1.jpg" ,quantity:10},
    {id:2,title:"Satin Blouse",prix:200 ,description:"A simple satin blouse with a soft collar, perfect for work or casual evening outings.",img:"/images/women/photo2.jpg" ,quantity:40  },
    {id:3,title:"Leather Crossbody Bag",prix:400 ,description:"A small adjustable leather crossbody bag with a classic yet modern look.",img:"/images/women/photo3.jpg" ,quantity:30},
    {id:4,title:"Comfy Sneakers",prix:250 ,description:"Lightweight sport sneakers with cushioned soles for all-day comfort.",img:"/images/women/photo4.jpg" ,quantity:20},
    {id:5,title:"Denim Jacket",prix:350,description:"Trendy denim jacket that pairs perfectly with multiple outfits.",img:"/images/women/photo5.jpg" ,quantity:15},
    {id:6,title:"Wool Scarf",prix:150 ,description:"Soft and warm wool scarf with elegant colors for the winter season.",img:"/images/women/photo6.jpg" ,quantity:50},
    {id:7,title:"Skinny Jeans",prix:300 ,description:"Slim-fit jeans with stretch fabric for comfort and flexibility.",img:"/images/women/photo7.jpg" ,quantity:25},
    {id:8,title:"Classic Heels",prix:400 ,description:"Medium-heel classic shoes, suitable for office and formal events.",img:"/images/women/photo8.jpg" ,quantity:30},
    {id:9,title:"Minimalist Watch",prix:500 ,description:"A simple wristwatch with a clean and elegant face, perfect for everyday use.",img:"/images/women/photo9.jpg" ,quantity:40},
    {id:10,title:"Floral Perfume",prix:700 ,description:"A soft floral fragrance that lasts all day with refreshing notes.",img:"/images/women/photo10.jpg" ,quantity:20},

  ],
  men: [
    {id:1,title:"Classic T-Shirt",prix:250 ,description:"A timeless classic t-shirt with a classic fit and classic colors.",img:"/images/men/photo1.jpg" , quantity:30},
    {id:2,title:"Sporty Sneakers",prix:350 ,description:"Lightweight sport sneakers with cushioned soles for all-day comfort.",img:"/images/men/photo2.jpg" , quantity:20},
    {id:3,title:"Leather Wallet",prix:450 ,description:"A compact leather wallet with multiple compartments for cards and cash.",img:"/images/men/photo3.jpg" , quantity:40},
    {id:4,title:"Casual Shirt",prix:100 ,description:"A casual shirt with a relaxed fit, perfect for weekend outings.",img:"/images/men/photo4.jpg" , quantity:50},
    {id:5,title:"Chino Pants",prix:50 ,description:"Comfortable chino pants with a modern fit, suitable for both work and casual wear.",img:"/images/men/photo5.jpg" , quantity:60},
    {id:6,title:"Wool Coat",prix:800 ,description:"A warm wool coat with a classic design, perfect for the winter season.",img:"/images/men/photo6.jpg" , quantity:70},
    {id:7,title:"Aviator Sunglasses",prix:600,description:"Stylish aviator sunglasses with UV protection for sunny days.",img:"/images/men/photo7.jpg" , quantity:40},
    {id:8,title:"Leather Belt",prix:350 ,description:"A durable leather belt with a classic buckle, suitable for both casual and formal outfits.",img:"/images/men/photo8.jpg" , quantity:30},
    {id:9,title:"Digital Watch",prix:500 ,description:"A sporty digital watch with multiple functions, perfect for active lifestyles.",img:"/images/men/photo9.jpg  " , quantity:20},
    {id:10,title:"Digital Watch",prix:700 ,description:"A fresh and invigorating cologne with woody and citrus notes.",img:"/images/men/photo10.jpg" , quantity:10},     
  ],
  kids: [
    {id:1,title:"Graphic T-Shirt",prix:150 ,description:"A fun graphic t-shirt with colorful prints, perfect for everyday wear.",img:"/images/kids/photo1.jpg" , quantity:30},
    {id:2,title:"Denim Overalls",prix:200 ,description:"Durable denim overalls with adjustable straps, ideal for playtime.",img:"/images/kids/photo2.jpg" , quantity:40},
    {id:3,title:"Leather Wallet",prix:250 ,description:"A compact leather wallet with multiple compartments for cards and cash.",img:"/images/kids/photo3.jpg" , quantity:50},
    {id:4,title:"Casual Shirt",prix:300 ,description:"A casual shirt with a relaxed fit, perfect for weekend outings.",img:"/images/kids/photo4.jpg" , quantity:25},
    {id:5,title:"Chino Pants",prix:350 ,description:"Comfortable chino pants with a modern fit, suitable for both work and casual wear.",img:"/images/kids/photo5.jpg" , quantity:20},
    {id:6,title:"Wool Coat",prix:400 ,description:"A warm wool coat with a classic design, perfect for the winter season.",img:"/images/kids/photo6.jpg" , quantity:15},
    {id:7,title:"Aviator Sunglasses",prix:450 ,description:"Stylish aviator sunglasses with UV protection for sunny days.",img:"/images/kids/photo7.jpg" , quantity:10},
    {id:8,title:"Leather Belt",prix:350 ,description:"A durable leather belt with a classic buckle, suitable for both casual and formal outfits.",img:"/images/kids/photo8.jpg" , quantity:50},
    {id:9,title:"Digital Watch",prix:100 ,description:"A sporty digital watch with multiple functions, perfect for active lifestyles.",img:"/images/kids/photo9.jpg" , quantity:40},
    {id:10,title:"Cologne",prix:100 ,description:"A fresh and invigorating cologne with woody and citrus notes.",img:"/images/kids/photo10.jpg" , quantity:30},
  ],
}
    
  return (
    <>
     <main >
  {/* Video Section */}
  <section className="video-container">
    <video   autoPlay muted loop playsInline className="video-full">
      <source src="video2.mp4" type="video/mp4" />
    </video>
    <div className="video-text">
       <h1>La mode pour toute la famille</h1>
        <p>Homme, femme et enfant — trouvez votre style parmi nos dernières collections.</p>
        <a className="cta-btn" href="/shop">Découvrir maintenant</a>
    </div>
  </section>

  {/* All Products Section */}
  <section className="all-products">
    <h2 className="text-center my-4" style={{ fontFamily: 'roboto',  }}>ALL PRODUCTS</h2>
    <div className="container d-flex text-center mb-4 justify-content-around">
      <div>
        <img className='imgc' id='img1' src="/images/3img/men2.jpg" alt="" />
        <h3>Homme</h3>

      </div>
      <div>
        <img className='imgc' src="/images/3img/women.jpg" alt="" />
        <h3>Femme</h3>

      </div>
      <div>
        <img className='imgc' src="/images/3img/kids.jpg" alt="" />
        <h3>Enfants</h3>
      </div>
     

    </div>
    <div className="container">
      <div className="row">
        {Object.entries(products).map(([product, keys]) => (
          keys.map(product => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text " ><strong>PRIX : </strong><strong>{product.prix}</strong></p>
                  

                  <button className='btn btn-light '> <Link className='text-dark text-decoration-none' to="/Details">Voir Détails</Link> </button><br /><br />
                  <button  className="btn btn-primary rounded-pill   shadow-sm fw-semibold d-flex align-items-center gap-2" onClick={() => addToCart(product ) }>  <i className="fas fa-cart-plus"></i>Ajouter au Panier</button>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  

  
        
  </section>
{/* ------------------------------------------------------------------------------------------- */}
  <section className="section-padding text-center">
    <div className="container">
      <h2 className="mb-5 mt-5">
        Pourquoi devriez-vous choisir <span className="highlight">CASA MODA</span> ?
      </h2>

      <div className="row text-start justify-content-center mt-5 g-5">
        
        <div className="col-md-4 feature">
          <h5 className="fw-bold">La mode à petit prix.</h5>
          <p>
            Vous pouvez avoir une différence allant jusqu’à -70% moins cher comparé au même produit neuf.
            Cela vaut le coût pour faire des économies sur votre budget shopping.
          </p>
        </div>

       
        <div className="col-md-4 feature">
          <h5 className="fw-bold">Protection & Sécurité</h5>
          <p>
            Vos paiements en ligne ou en cash sont sécurisés par CASA MODA.
            Et si l'article n'est pas conforme, le remboursement est garanti et le retour offert.
          </p>
        </div>

       
        <div className="col-md-4 feature">
          <h5 className="fw-bold">Livraison porte à porte</h5>
          <p>
            Finis le casse-tête de la vente à distance. Ne vous déplacez plus,
            un livreur vient jusqu'en bas de chez vous pour récupérer ou vous livrer un article.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
{/* ----------------------------------------------------------------------------------------------- */}
  <footer>
    <div className="container">
      <div className="row justify-content-between">
       
        <div className="col-md-4 mb-4">
          <div className="footer-logo">CASA MODA</div>
          <p className="footer-text">
            La seconde-main, c’est l’avenir et CASA MODA te le prouve.
            Sur CASA MODA, tu vends les vêtements qui ont encore des choses à vivre
            et tu déniches des merveilles que tu ne trouves pas en boutique.
          </p>
        </div>

        
      <div className="col-md-3 mb-4">
          <h6 className="footer-title">À PROPOS</h6>
          <Link to="/faq" className="footer-link">FAQ</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/mentions-legales" className="footer-link">Mentions Légales</Link>
          <Link to="/cgu" className="footer-link">CGU</Link>
        </div>

        <div className="col-md-3 mb-4">
          <h6 className="footer-title">SUIVEZ-NOUS SUR</h6>
          <div className="mb-3">
            <Link to="/" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="social-icon">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" className="social-icon">
              <i className="fab fa-youtube"></i>
            </Link>
            
          </div>

          <Link to="/" className="footer-link">Besoin d’aide ?</Link>
          <Link to="/" className="footer-link">Comment vendre ?</Link>
          <Link to="/" className="footer-link">Comment acheter</Link>
       </div>
      </div>
    </div>
  </footer>

    </>
  );
}
