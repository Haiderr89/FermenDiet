import React, { useState, useEffect } from 'react';
import './Hero.css';

import blueberry from '../assets/blueberry.avif';
import lemon from '../assets/lemon.avif';
import hibiscus from '../assets/hibiscus.avif';
import cola from '../assets/cola.avif';
import ginger from '../assets/ginger.avif';
import laban from '../assets/laban.avif';
import red from '../assets/red.avif';

import logo from '../assets/logoNew.svg';

const heroImages = [
    blueberry,
    lemon,
    hibiscus,
    cola,
    ginger,
    laban,
    red,
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
            {/* <div className="hero-background-text">FERMENDIET</div> */}
            <img src={logo} alt="FermenDiet Logo" className="hero-background-logo" />

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
                    {/* <button className="btn btn-primary" onClick={() => window.location.href = '/shop'}>Shop Now</button> */}
                    <button className="btn btn-primary"><a href="https://fermendiet.com">Shop Now</a></button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
