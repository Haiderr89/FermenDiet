import React from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <Link to="/"><img src="/images/FermenDiet.png" alt="" style={{ width: '150px' }} /></Link>
                </div>

                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/tv">Fermendiet TV</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div className="navbar-actions">
                    <a href="#login" className="navbar-action-item">
                        <User size={20} />
                        <span>Login</span>
                    </a>
                    <a href="#cart" className="navbar-action-item">
                        <ShoppingBag size={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
