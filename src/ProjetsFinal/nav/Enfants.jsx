import '../Projets.css';
import { Link } from "react-router-dom";
import { useContext , useState, useEffect } from "react";
import { CartContext } from "../CartContext";

export default function Enfants() {
    const { addToCart } = useContext(CartContext);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    
    const kidsProducts = [
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
    ];
    
    const filteredProducts = kidsProducts.filter(product =>
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
                <h2 className="text-center mt-5 my-5  pt-5" style={{ fontFamily: 'roboto' }}>COLLECTION ENFANTS</h2>
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