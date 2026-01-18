import React, { useState, useEffect } from 'react';
import './About.css';

import areej1 from '../assets/Areej/areej1.avif';
import areej2 from '../assets/Areej/areej2.avif';
import areej3 from '../assets/Areej/areej3.avif';
import areej6 from '../assets/Areej/areej6.avif';
import areej7 from '../assets/Areej/areej7.avif';
import areej8 from '../assets/Areej/areej8.avif';

const storyImages = [
    areej1,
    areej2,
    areej3,
    // "/images/Areej/areej4.avif",
    // "/images/Areej/areej5.avif",
    areej6,
    areej7,
    areej8,
];

const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % storyImages.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-page">
            <div className="container">
                <h1 className="about-title-main">Our Story</h1>

                {/* Section 1: Brand Story */}
                <section className="about-section story-section">
                    <div className="story-image-container">
                        <div className="story-blob"></div>
                        {storyImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Fermendiet Story"
                                className="story-image"
                                style={{
                                    opacity: index === currentImageIndex ? 1 : 0,
                                    position: index === 0 ? 'relative' : 'absolute',
                                    top: 0,
                                    left: 0,
                                    transition: 'opacity 1s ease-in-out',
                                    zIndex: index === currentImageIndex ? 2 : 1
                                }}
                            />
                        ))}
                    </div>
                    <div className="story-content">
                        <h2 className="section-title">Rooted in Passion</h2>
                        <p className="text-content">
                            Fermendiet is a homegrown Bahraini kombucha and wellness brand built on passion,
                            persistence, and a mission to introduce healthier, craft-fermented beverages to the
                            community. Founded and led by Areej together with her husband, Mohammed Folath,
                            the brand has steadily grown from a small kitchen experiment into one of Bahrain's
                            most recognized artisanal beverage companies.
                            <br /><br />
                            Over the years, Fermendiet has celebrated major achievements including winning first
                            place in the Bahrain Startup Competition. As demand increased, the company expanded
                            to the Hidd Industrial Area, scaling production while maintaining authenticity.
                        </p>
                    </div>
                </section>
            </div>

            {/* Section 2: Founder Bio - Full Width Background */}
            <section className="about-section bio-section">
                <div className="container bio-container">
                    <div className="bio-content">
                        <h2 className="section-title">Meet Areej</h2>
                        <p className="text-content">
                            Areej Abdulla Matooq is a Bahraini chef, healthy-cooking advocate, and the
                            creator behind AreejinKitchen and Fermendiet. Although she holds both a
                            bachelor's and master's degree in media, her true passion has always been
                            rooted in food.
                            <br /><br />
                            To refine her craft, she studied French cuisine at Le Cordon Bleu in London and
                            later earned an advanced diploma in nutrition from Future Fit Academy in the UK.
                            As the founder of Fermendiet, Bahrain's first local fermented foods brand, Areej
                            has expanded her mission from the kitchen to large-scale production, bringing
                            functional, gut-friendly products to homes across the country.
                        </p>
                    </div>
                    <div className="bio-image-container">
                        <img src={areejImage} alt="Areej Matooq" className="bio-image" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
