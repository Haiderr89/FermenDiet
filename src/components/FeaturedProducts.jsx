import React from 'react';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

const products = [
    {
        id: 1,
        name: 'Blueberry Water Kefir',
        price: '1.400 BHD',
        image: '/images/blueberry.avif' // Placeholder
    },
    {
        id: 2,
        name: 'Lemon Lavender Water Kefir',
        price: '1.200 BHD',
        image: '/images/lemon.avif' // Placeholder
    },
    {
        id: 3,
        name: 'Hibiscus Kombucha',
        price: '1.200 BHD',
        image: '/images/hibiscus.avif' // Placeholder
    }
];

const FeaturedProducts = () => {
    return (
        <section className="featured-products" id="shop">
            <div className="container">
                <h2 className="section-title">FEATURED PRODUCTS</h2>
                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
