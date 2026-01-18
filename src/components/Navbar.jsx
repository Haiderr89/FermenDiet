import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ShopPopup from './ShopPopup';
import './Navbar.css';

const Navbar = () => {
    const { getCartCount, toggleCart } = useCart();
    const cartCount = getCartCount();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopPopupOpen, setIsShopPopupOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const openShopPopup = (e) => {
        e.preventDefault();
        setIsShopPopupOpen(true);
        closeMobileMenu();
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <div className="navbar-logo">
                        <Link to="/" onClick={closeMobileMenu}>
                            <img src="/images/logoNew.svg" alt="" style={{ width: '25%' }} />
                        </Link>
                    </div>

                    <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>

                    <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                        {/* <li><a href="#" onClick={openShopPopup}>Shop</a></li> */}
                        <li><a href="https://fermendiet.com">Shop</a></li>
                        <li><Link to="/tv" onClick={closeMobileMenu}>Fermendiet TV</Link></li>
                        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
                    </ul>

                    <div className="navbar-actions">
                        <Link to="/login" className="navbar-action-item">
                            <User size={20} />
                            <span className="action-label">Login</span>
                        </Link>
                        <div className="navbar-action-item cart-icon-wrapper" onClick={toggleCart} style={{ cursor: 'pointer' }}>
                            <ShoppingBag size={20} />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </div>
                    </div>
                </div>
            </nav>
            <ShopPopup isOpen={isShopPopupOpen} onClose={() => setIsShopPopupOpen(false)} />
        </>
    );
};

export default Navbar;
