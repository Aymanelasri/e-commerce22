import '../Projets.css';
import { Link } from "react-router-dom";
import { useContext , useState , useEffect} from "react";
import { CartContext } from "../CartContext";

export default function Femme() {
    const { addToCart } = useContext(CartContext);
    const [search, setSearch] = useState('');
     const [loading, setLoading] = useState(true);

    
    const womenProducts = [
         {id:1,title:"Elegant Midi Dress",prix:300  ,description:"A lightweight printed midi dress that offers comfort and elegance for everyday wear or special occasions.",img:"/images/women/photo1.webp" ,quantity:10},
    {id:2,title:"Satin Blouse",prix:200 ,description:"A simple satin blouse with a soft collar, perfect for work or casual evening outings.",img:"/images/women/photo2.webp" ,quantity:40  },
    {id:3,title:"Leather Crossbody Bag",prix:400 ,description:"A small adjustable leather crossbody bag with a classic yet modern look.",img:"/images/women/photo3.webp" ,quantity:30},
    {id:4,title:"Comfy Sneakers",prix:250 ,description:"Lightweight sport sneakers with cushioned soles for all-day comfort.",img:"/images/women/photo4.webp" ,quantity:20},
    {id:5,title:"Denim Jacket",prix:350,description:"Trendy denim jacket that pairs perfectly with multiple outfits.",img:"/images/women/photo5.webp" ,quantity:15},
    {id:6,title:"Wool Scarf",prix:150 ,description:"Soft and warm wool scarf with elegant colors for the winter season.",img:"/images/women/photo6.webp" ,quantity:50},
    {id:7,title:"Skinny Jeans",prix:300 ,description:"Slim-fit jeans with stretch fabric for comfort and flexibility.",img:"/images/women/photo7.webp" ,quantity:25},
    {id:8,title:"Classic Heels",prix:400 ,description:"Medium-heel classic shoes, suitable for office and formal events.",img:"/images/women/photo8.webp" ,quantity:30},
    {id:9,title:"Minimalist Watch",prix:500 ,description:"A simple wristwatch with a clean and elegant face, perfect for everyday use.",img:"/images/women/photo9.webp" ,quantity:40},
    {id:10,title:"Floral Perfume",prix:700 ,description:"A soft floral fragrance that lasts all day with refreshing notes.",img:"/images/women/photo10.webp" ,quantity:20},
    ];
    
    const filteredProducts = womenProducts.filter(product =>
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

    return (<>
        <main className="no-animation">
            <section className="all-products">
                <h2 className="text-center mt-5 my-5  pt-5" style={{ fontFamily: 'roboto' }}>COLLECTION FEMME</h2>
                <div>
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>

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
        </main>

        <footer>
    <div className="container">
      <div className="row justify-content-between">
       
        <div className="col-md-4 mb-4">
          <div className="footer-logo">CASA MODA</div>
          <p className="footer-text">
            La seconde-main, c'est l'avenir et CASA MODA te le prouve.
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