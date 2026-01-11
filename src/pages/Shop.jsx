import React from 'react';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const shopProducts = [
    {
        id: 1,
        name: 'Kefir Milk',
        price: '0.800 BHD',
        image: '/images/laban.avif' // Placeholder, need to check if we have this
    },
    {
        id: 2,
        name: 'Hibiscus Kombucha',
        price: '1.200 BHD',
        image: '/images/hibiscus.avif'
    },
    {
        id: 3,
        name: 'Ginger Lemon Kombucha',
        price: '1.200 BHD',
        image: '/images/ginger.avif'
    },
    {
        id: 4,
        name: 'Lemon Lavender Water Kefir',
        price: '1.200 BHD',
        image: '/images/lemon.avif'
    },
    {
        id: 5,
        name: 'Red Tamarind Kombucha',
        price: '1.500 BHD',
        image: '/images/red.avif'
    },
    {
        id: 6,
        name: 'Cola Kombucha',
        price: '1.200 BHD',
        image: '/images/cola.avif'
    },
    {
        id: 7,
        name: 'Blueberry Water Kefir',
        price: '1.400 BHD',
        image: '/images/blueberry.avif'
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
