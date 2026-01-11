import React, { useState, useEffect } from 'react';
import './Hero.css';

const heroImages = [
    '/images/blueberry.avif',
    '/images/lemon.avif', 
    '/images/hibiscus.avif',
    '/images/cola.avif',
    '/images/ginger.avif',
    '/images/laban.avif',
    '/images/red.avif',
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-background-text">FERMENDIET</div>

            <div className="hero-content container">
                <div className="hero-image-container">
                    {heroImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Product ${index + 1}`}
                            className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>

                <div className="hero-text">
                    <p className="hero-description">
                        Your daily dose of refreshing gut-friendly drinks and natural fermentation.
                    </p>
                    <button className="btn btn-primary" onClick={() => window.location.href = '/shop'}>Shop Now</button>
                </div>
            </div>
            
        </section>
    );
};

export default Hero;
