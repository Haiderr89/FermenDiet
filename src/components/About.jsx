import React from 'react';
import './About.css';
import areejImage from '../assets/Areej/Areej.avif';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container container">
                <div className="about-content">
                    <h2 className="about-title">
                        About AreejinKitchen – <br />
                        The Heart Behind Fermendiet
                    </h2>
                    <p className="about-text">
                        Fermendiet began with a simple passion: making people feel better. Believing that wellness starts from within, we focus on creating natural, nourishing drinks that make people feel great. What started as a small experiment in our own kitchen quickly grew into a love for fermentation, wellness, and crafting clean, probiotic-rich beverages.
                    </p>
                    <button className="btn btn-secondary btn-outline">Read More</button>
                </div>
                <div className="about-image-wrapper">
                    <img src={areejImage} alt="Chef Areej" className="about-image" />
                </div>
            </div>

            <hr style={{ border: "none", height: "5px", backgroundColor: "#144823", width: "100%", margin: "auto" }} />

        </section>
    );
};

export default About;
