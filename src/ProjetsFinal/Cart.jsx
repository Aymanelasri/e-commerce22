import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "@fontsource/roboto";          
import "@fontsource/roboto/700.css"; 
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mon Panier</h2>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide. <Link to="/">Retour à l'accueil</Link></p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text"><strong>Prix: </strong>{item.prix}</p>
                  <p className="card-text">{item.description}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
