import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import './Projets.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Layout() {
    useEffect(() => {
        const menuBtn = document.getElementById("menu-btn");
        const nav = document.getElementById("nav");

        const toggleMenu = () => {
            nav.classList.toggle("active");
        };

        menuBtn.addEventListener("click", toggleMenu);

        
        return () => {
            menuBtn.removeEventListener("click", toggleMenu);
        };
    }, []);

    return (
        <>
            <nav className="d-flex align-items-center justify-content-between ms-2 p-3">
                <button id="menu-btn" className="border-0 bg-transparent ">
                    <i className="bi bi-list me-4 d-block d-md-none"></i>
                </button>
                <h2 style={{ color: '#D4AF37', fontFamily: 'calibri', letterSpacing: '1px', margin: 0, fontSize: '24px' }}>
                    CASA MODA
                </h2>

                <ul className="nav justify-content-center flex-grow-1" id="nav">
                    <li className="nav-item menu"><Link className="nav-link fs-5 underline-hover text-dark" to="/">All</Link></li>
                    <li className="nav-item menu"><Link className="nav-link fs-5 underline-hover text-dark" to="/Men">Men</Link></li>
                    <li className="nav-item menu"><Link className="nav-link fs-5 underline-hover text-dark" to="/Women">Women</Link></li>
                    <li className="nav-item menu"><Link className="nav-link fs-5 underline-hover text-dark" to="/Kids">Kids</Link></li>
                </ul>

                <ul className="nav justify-content-center flex-grow-2 align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link fs-5" to="/login">
                            <button className="button1">Login</button>
                        </Link>
                    </li>
                    <li className="nav-item position-relative me-5">
                        <Link className="nav-link cart-icon shop" to="/cart">
                            <i className="bi bi-cart4" style={{ fontSize: '24px' }}></i>
                            <span className="">0</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="container-fluid w-100 mx-auto">
                <Outlet />
            </div>
        </>
    );
}