import '../Projets.css';
import { Link } from "react-router-dom";
import { useContext , useState, useEffect } from "react";
import { CartContext } from "../CartContext";

export default function Homme() {
    const { addToCart } = useContext(CartContext);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    
    const menProducts = [
       {id:11,title:"Classic T-Shirt",prix:250 ,description:"A timeless classic t-shirt with a classic fit and classic colors.",img:"/images/men/photo1.webp" , quantity:30},
    {id:12,title:"Sporty Sneakers",prix:350 ,description:"Lightweight sport sneakers with cushioned soles for all-day comfort.",img:"/images/men/photo2.webp" , quantity:20},
    {id:13,title:"Leather Wallet",prix:450 ,description:"A compact leather wallet with multiple compartments for cards and cash.",img:"/images/men/photo3.webp" , quantity:40},
    {id:14,title:"Casual Shirt",prix:100 ,description:"A casual shirt with a relaxed fit, perfect for weekend outings.",img:"/images/men/photo4.webp" , quantity:50},
    {id:15,title:"Chino Pants",prix:50 ,description:"Comfortable chino pants with a modern fit, suitable for both work and casual wear.",img:"/images/men/photo5.webp" , quantity:60},
    {id:16,title:"Wool Coat",prix:800 ,description:"A warm wool coat with a classic design, perfect for the winter season.",img:"/images/men/photo6.webp" , quantity:70},
    {id:17,title:"Aviator Sunglasses",prix:600,description:"Stylish aviator sunglasses with UV protection for sunny days.",img:"/images/men/photo7.webp" , quantity:40},
    {id:18,title:"Leather Belt",prix:350 ,description:"A durable leather belt with a classic buckle, suitable for both casual and formal outfits.",img:"/images/men/photo8.webp" , quantity:30},
    {id:19,title:"Digital Watch",prix:500 ,description:"A sporty digital watch with multiple functions, perfect for active lifestyles.",img:"/images/men/photo9.webp" , quantity:20},
    {id:20,title:"Digital Watch",prix:700 ,description:"A fresh and invigorating cologne with woody and citrus notes.",img:"/images/men/photo10.webp" , quantity:10},       
    ];
    
    const filteredProducts = menProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);
        
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height: '50vh'}}>
                <div className="spinner-border text-primary" role="status">
                    
                </div>
            </div>
        );
    }

    return (
        <>
        <main className="no-animation">
            <section className="all-products">
                <h2 className="text-center mt-5 my-5  pt-5" style={{ fontFamily: 'roboto' }}>COLLECTION HOMME</h2>
                  <div>
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>

                </div>
                <div className="d-flex justify-content-center mb-4">
                    <input 
                        type="search" 
                        name="search" 
                        className="form-control w-25 text-center" 
                        placeholder="Rechercher un produit..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="container">
                    <div className="row">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
                                <div className="card h-100">
                                    <Link to={`/Details/${product.id}`}>
                                      <img
                                        src={product.img}
                                        className="card-img-top"
                                        alt={product.title}
                                        style={{ cursor: "pointer" }}
                                        loading="lazy"
                                      />
                                    </Link>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text"><strong>PRIX : </strong><strong>{product.prix} DH</strong></p>
                                        
                                        <div className="mt-auto">
                                            <Link className='btn btn-light w-100 mb-2 text-dark text-decoration-none' to={`/details/${product.id}`}>Voir Détails</Link>
                                            <button
                                                className="btn btn-success btn-sm w-100"
                                                onClick={() => addToCart(product)}
                                                >
                                                <i className="fas fa-cart-plus me-1"></i> Ajouter
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------------------------------- */}
        </main>

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

          <Link to="/" className="footer-link">Besoin d aide ?</Link>
          <Link to="/" className="footer-link">Comment vendre ?</Link>
          <Link to="/" className="footer-link">Comment acheter</Link>
       </div>
      </div>
    </div>
  </footer>
  </>

        
    );
}