import React from 'react';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    {/* <h3>FERMENDIET</h3> */}
                    <img src="/images/FermenDiet.png" alt="FermenDietLogo" style={{ width: '250px' }} />
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Menu</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#tv">Fermendiet TV</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Policies</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Store Policy</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Contact</h4>
                        <p>+973 36385333</p>
                        <p>info@fermendiet.com</p>
                        <div className="footer-socials">
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Youtube size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
