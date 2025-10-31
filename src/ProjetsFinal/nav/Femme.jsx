import '../Projets.css';
import { Link } from "react-router-dom";
import { useContext , useState , useEffect} from "react";
import { CartContext } from "../CartContext";

export default function Femme() {
    const { addToCart } = useContext(CartContext);
    const [search, setSearch] = useState('');
     const [loading, setLoading] = useState(true);

    
    const womenProducts = [
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
    ];
    
    const filteredProducts = womenProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );
      useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 500);
            
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
        <main className="no-animation">
            <section className="all-products">
                <h2 className="text-center mt-5 my-5  pt-5" style={{ fontFamily: 'roboto' }}>COLLECTION FEMME</h2>
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
                                    <img src={product.img} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text"><strong>PRIX : </strong><strong>{product.prix} DH</strong></p>
                                        
                                        <button className='btn btn-light'>
                                            <Link className='text-dark text-decoration-none' to={`/details/${product.id}`}>Voir Détails</Link>
                                        </button><br /><br />
                                         
                                         <button
                                            className="btn btn-success btn-sm w-100"
                                            onClick={() => addToCart(product)}
                                            >
                                            <i className="fas fa-cart-plus me-1"></i> Ajouter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}