import { Link, useParams, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';



export default function Details() {
    const {id}=useParams();
    const { addToCart } = useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState('M');
    const navigate = useNavigate();

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
    {id:11,title:"Classic T-Shirt",prix:250 ,description:"A timeless classic t-shirt with a classic fit and classic colors.",img:"/images/men/photo1.jpg" , quantity:30},
    {id:12,title:"Sporty Sneakers",prix:350 ,description:"Lightweight sport sneakers with cushioned soles for all-day comfort.",img:"/images/men/photo2.jpg" , quantity:20},
    {id:13,title:"Leather Wallet",prix:450 ,description:"A compact leather wallet with multiple compartments for cards and cash.",img:"/images/men/photo3.jpg" , quantity:40},
    {id:14,title:"Casual Shirt",prix:100 ,description:"A casual shirt with a relaxed fit, perfect for weekend outings.",img:"/images/men/photo4.jpg" , quantity:50},
    {id:15,title:"Chino Pants",prix:50 ,description:"Comfortable chino pants with a modern fit, suitable for both work and casual wear.",img:"/images/men/photo5.jpg" , quantity:60},
    {id:16,title:"Wool Coat",prix:800 ,description:"A warm wool coat with a classic design, perfect for the winter season.",img:"/images/men/photo6.jpg" , quantity:70},
    {id:17,title:"Aviator Sunglasses",prix:600,description:"Stylish aviator sunglasses with UV protection for sunny days.",img:"/images/men/photo7.jpg" , quantity:40},
    {id:18,title:"Leather Belt",prix:350 ,description:"A durable leather belt with a classic buckle, suitable for both casual and formal outfits.",img:"/images/men/photo8.jpg" , quantity:30},
    {id:19,title:"Digital Watch",prix:500 ,description:"A sporty digital watch with multiple functions, perfect for active lifestyles.",img:"/images/men/photo9.jpg  " , quantity:20},
    {id:20,title:"Digital Watch",prix:700 ,description:"A fresh and invigorating cologne with woody and citrus notes.",img:"/images/men/photo10.jpg" , quantity:10},     
  ],
  kids: [
    {id:21,title:"Graphic T-Shirt",prix:150 ,description:"A fun graphic t-shirt with colorful prints, perfect for everyday wear.",img:"/images/kids/photo1.jpg" , quantity:30},
    {id:22,title:"Denim Overalls",prix:200 ,description:"Durable denim overalls with adjustable straps, ideal for playtime.",img:"/images/kids/photo2.jpg" , quantity:40},
    {id:23,title:"Leather Wallet",prix:250 ,description:"A compact leather wallet with multiple compartments for cards and cash.",img:"/images/kids/photo3.jpg" , quantity:50},
    {id:24,title:"Casual Shirt",prix:300 ,description:"A casual shirt with a relaxed fit, perfect for weekend outings.",img:"/images/kids/photo4.jpg" , quantity:25},
    {id:25,title:"Chino Pants",prix:350 ,description:"Comfortable chino pants with a modern fit, suitable for both work and casual wear.",img:"/images/kids/photo5.jpg" , quantity:20},
    {id:26,title:"Wool Coat",prix:400 ,description:"A warm wool coat with a classic design, perfect for the winter season.",img:"/images/kids/photo6.jpg" , quantity:15},
    {id:27,title:"Aviator Sunglasses",prix:450 ,description:"Stylish aviator sunglasses with UV protection for sunny days.",img:"/images/kids/photo7.jpg" , quantity:10},
    {id:28,title:"Leather Belt",prix:350 ,description:"A durable leather belt with a classic buckle, suitable for both casual and formal outfits.",img:"/images/kids/photo8.jpg" , quantity:50},
    {id:29,title:"Digital Watch",prix:100 ,description:"A sporty digital watch with multiple functions, perfect for active lifestyles.",img:"/images/kids/photo9.jpg" , quantity:40},
    {id:30,title:"Cologne",prix:100 ,description:"A fresh and invigorating cologne with woody and citrus notes.",img:"/images/kids/photo10.jpg" , quantity:30},
  ],
}

const allProducts=[...products.women,...products.men,...products.kids]

    const pr=allProducts.find(p=>p.id===Number(id))

   return (
    <div className="container my-4">
     
      <div className="mb-3">
        <button onClick={() => navigate(-1)} className="btn btn-outline-secondary">&larr; Retour aux produits</button>
      </div>

      
      <div className="row border rounded-3 p-3 shadow-sm">
        
        <div className="col-md-5 d-flex align-items-center justify-content-center border rounded-3 p-3">
          <img
            src={pr.img}
            alt="Produit"
            className="img-fluid"
            style={{ maxHeight: "250px", opacity: 0.8 }}
          />
        </div>

        
        <div className="col-md-7 border-start rounded-3 p-4">
          <h4 className="fw-bold">{pr.title}</h4>

          
          <div className="text-warning mb-2">
            ★★★★☆
          </div>

        
          <h3 className="text-primary fw-bold">{pr.prix} DH</h3>

          
          <p className="mt-3 mb-1 fw-bold">{pr.description}</p>

          
          <div className="mb-3">
            <label className="form-label fw-bold">Taille:</label>
            <div className="d-flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button
                  key={size}
                  className={`btn ${selectedSize === size ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setSelectedSize(size)}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          
          <button className="btn btn-primary" onClick={() => addToCart(pr)}>
            Ajouter au panier ({selectedSize})
          </button>
          
        </div>
      </div>
    </div>
  );
}
