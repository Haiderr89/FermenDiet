import React from 'react';
import ProductCard from '../components/ProductCard';
import './Shop.css';

import laban from '../assets/laban.avif';
import hibiscus from '../assets/hibiscus.avif';
import ginger from '../assets/ginger.avif';
import lemon from '../assets/lemon.avif';
import red from '../assets/red.avif';
import cola from '../assets/cola.avif';
import blueberry from '../assets/blueberry.avif';

const shopProducts = [
    {
        id: 'kefir-milk',
        name: 'Kefir Milk',
        price: '0.800 BHD',
        image: laban
    },
    {
        id: 'hibiscus-kombucha',
        name: 'Hibiscus Kombucha',
        price: '1.200 BHD',
        image: hibiscus
    },
    {
        id: 'ginger-lemon-kombucha',
        name: 'Ginger Lemon Kombucha',
        price: '1.200 BHD',
        image: ginger
    },
    {
        id: 'lemon-lavender-water-kefir',
        name: 'Lemon Lavender Water Kefir',
        price: '1.200 BHD',
        image: lemon
    },
    {
        id: 'red-tamarind-kombucha',
        name: 'Red Tamarind Kombucha',
        price: '1.500 BHD',
        image: red
    },
    {
        id: 'cola-kombucha',
        name: 'Cola Kombucha',
        price: '1.200 BHD',
        image: cola
    },
    {
        id: 'blueberry-water-kefir',
        name: 'Blueberry Water Kefir',
        price: '1.400 BHD',
        image: blueberry
    }
];

const Shop = () => {
    return (
        <div className="shop-page">
            <div className="shop-banner">
                <div className="shop-banner-content">
                    {/* Placeholder for banner image if needed, or just background */}
                </div>
            </div>

            <div className="container">
                <div className="shop-description">
                    <p>
                        Explore Fermendiet's range of refreshing naturally fermented products packed with
                        probiotics and flavor. Each item is crafted with care to support your wellness and delight
                        your taste buds. Discover your new favorite today!
                    </p>
                </div>

                <div className="shop-grid">
                    {shopProducts.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
            <hr style={{ border: "none", height: "2px", backgroundColor: "#144823", width: "100%", margin: "auto", marginTop: "4rem", marginBottom: "-50px" }} />
        </div>
    );
};

export default Shop;
