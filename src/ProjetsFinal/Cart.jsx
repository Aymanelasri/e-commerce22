
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

import "@fontsource/roboto";
import "@fontsource/poppins";


export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.prix) || 0;
    const qty = Number(item.quantity) || 1;
    return sum + price * qty;
  }, 0);

  return (
    <div className="container mt-4">
      <div style={{ border: "none" , borderRadius: "5px" , padding: "10px", backgroundColor: "#d4af3715 "  }} className="mb-4 p-3">
        <h4 className="mb-3"><Link to="/"> Continuer vos achats</Link></h4>
      </div>
      

      <div className="container-fluid p-0">
        <div className="cart-container">

          <div className="cart-header">
            <h1 className="h3 mb-0"><i className="fas fa-shopping-cart me-2"></i>PANIER</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-basket"></i>
              <h3 className="h5 text-muted">Votre panier est vide</h3>
              <p className="text-muted">Parcourez nos produits et ajoutez-les à votre panier</p>
              <Link to="/" className="btn btn-primary mt-3">Voir les produits</Link>
            </div>
          ) : (

            <>
              {/* items list */}
              <div className="cart-items mb-4">
                {cartItems.map((item, index) => {
                  const id = item.id ?? item._id ?? index;
                  const price = Number(item.prix) || 0;
                  const qty = Number(item.quantity) || 1;
                  return (
                    <div key={id} className="d-flex align-items-center justify-content-between mb-3 p-2 border rounded">
                      <div className="d-flex align-items-center">
                        {item.img && <img src={item.img} alt={item.title || ''} style={{ width: 80, height: 80, objectFit: 'cover' }} className="me-3" />}
                        <div>
                          <h6 className="mb-1">{item.title || item.name || 'Produit'}</h6>
                          <div className="text-muted">{qty} x {price.toFixed(2)} DH</div>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold">{(price * qty).toFixed(2)} DH</div>
                        <button className="btn btn-sm btn-danger mt-2" onClick={() => removeFromCart(id)}>Supprimer</button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* gift + summary */}
              <div className="gift-section mb-4">
                <h4 className="h5 mb-2"><i className="fas fa-gift me-2 text-warning"></i>NOTRE CADEAU DÈS 50 DH D'ACHAT*</h4>
                <p className="mb-1">Un cahier Smala</p>
                <p className="gift-note">* avant livraison, dans la limite des stocks disponibles.</p>
              </div>

              <div className="summary-section">
                <h4 className="h5 mb-3">Récapitulatif (TTC)</h4>

                <div className="summary-line">
                  <span>Total article(s)</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="summary-line fw-bold fs-5 mt-2">
                  <span>TOTAL</span>
                  <span>{total.toFixed(2)} DH</span>
                </div>

                <div className="promo-banner mt-4">
                  <p className="mb-0">
                    <i className="fas fa-star me-2 text-warning"></i>
                    Je gagne sur ma commande en essayant. Supermonte gratuitement pendant 30 jours sans engagement : satisfait ou remboursé
                  </p>
                </div>

                <button className="btn checkout-btn text-white w-100 mt-4">
                  Valider et passer au paiement
                </button>
              </div>

              {/* features */}
              <div className="features-section mt-4">
                <div className="row">
                  <div className="col-md-4 feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-shipping-fast"></i>
                    </div>
                    <h6 className="fw-bold">Livraison en 48 à 72h</h6>
                  </div>
                  <div className="col-md-4 feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-undo-alt"></i>
                    </div>
                    <h6 className="fw-bold">Retours sous 15 jours</h6>
                  </div>
                  <div className="col-md-4 feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-lock"></i>
                    </div>
                    <h6 className="fw-bold">Paiement sécurisé</h6>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
