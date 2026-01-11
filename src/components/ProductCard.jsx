import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price }) => {
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img src={image} alt={name} className="product-image" />
            </div>
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price}</p>
            <button className="btn btn-secondary product-btn">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
