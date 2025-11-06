
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Login.css';

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="login-page d-flex justify-content-center align-items-center  vh-100">
      <div className="floating-star star1">⭐</div>
      <div className="floating-star star2">●</div>
      <div className="floating-star star3">◆</div>
      <div className="floating-star star4">⭐</div>
      <div className="floating-star star5">⭐</div>
      <div className="login-card p-4 shadow rounded ">
        <div className="text-center mb-4">
          <div className="user-icon mb-2">
            <i className="bi bi-person-circle" style={{ fontSize: '30px', color: '#ff5500' }}></i>
          </div>
          <h3>{isSignup ? 'Créer un compte' : 'Connexion'}</h3>
          <p>{isSignup ? 'Rejoignez-nous aujourd\'hui et commencez votre voyage' : 'Entrez vos identifiants pour accéder à votre compte'}</p>
        </div>
        <form>
          {isSignup && (
            <div className="mb-3">
              <label htmlFor="fullName">Nom complet</label>
              <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email">Adresse e-mail</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="password">Mot de passe</label>
            <input type={showPassword ? "text" : "password"} className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="btn p-0 border-0 bg-transparent eye-icon" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">
              <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
            </button>
          </div>
          {isSignup && (
            <div className="mb-3 position-relative">
              <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              <input type={showConfirmPassword ? "text" : "password"} className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <button type="button" className="btn p-0 border-0 bg-transparent eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label="Toggle confirm password visibility">
                <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
          )}
          {!isSignup ? (
            <div className="d-flex justify-content-between mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Se souvenir de moi</label>
              </div>
              <a href="#"><button type="button" className="btn p-0 border-0 bg-transparent text-primary" style={{textDecoration: 'none'}}>Mot de passe oublié ?</button></a>
            </div>
          ) : (
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="terms" />
              <label className="form-check-label" htmlFor="terms">
                J'accepte les <button type="button" className="btn p-0 border-0 bg-transparent text-primary" style={{textDecoration: 'none'}}>Termes et Conditions</button>
              </label>
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100 mb-3">
            {isSignup ? 'Créer un compte' : 'Se connecter'}
          </button>
          <p className="text-center">
            {isSignup ? 'Vous avez déjà un compte ?' : "Vous n'avez pas de compte ?"}
            <button type="button" className="btn p-0 border-0 bg-transparent text-primary" style={{textDecoration: 'none'}} onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? ' Se connecter' : ' S\'inscrire'}
            </button>
          </p>
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1"/>
            <span className="px-2">OU</span>
            <hr className="flex-grow-1"/>
          </div>
          <button className="btn btn-outline-dark w-100 mb-2"><i className="bi bi-google me-2"></i> Continuer avec Google</button>
          <button className="btn btn-outline-dark w-100 mb-2"><i className="bi bi-linkedin me-2"></i> Continuer avec linkedin</button>
          <button className="btn btn-outline-dark w-100"><i className="bi bi-facebook me-2"></i> Continuer avec facebook</button>
        </form>
      </div>
    </div>
  );
}


