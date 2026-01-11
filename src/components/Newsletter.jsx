import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h2 className="newsletter-title">
                    SIGN UP FOR EXCLUSIVE UPDATES AND <br />
                    OFFERS FROM <span className="highlight">FERMENDIET</span>
                </h2>
                <p className="newsletter-subtitle">Enter your email here</p>
                <form className="newsletter-form">
                    <input
                        type="email"
                        placeholder=""
                        className="newsletter-input"
                    />
                    <p className="newsletter-note">Yes, subscribe me to your newsletter.</p>
                    <button type="submit" className="btn btn-secondary btn-outline newsletter-btn">SUBMIT</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
