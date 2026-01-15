import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ image, name, price, id }) => {
    const { addToCart, openCart } = useCart();

    const handleAddToCart = () => {
        // Create a product object with a unique ID if not provided
        // In a real app, 'id' should come from the database
        const product = {
            id: id || name, // Fallback to name as ID if not provided
            name,
            price: typeof price === 'string' ? parseFloat(price.replace(' BHD', '')) : price, // Ensure price is a number
            image
        };
        addToCart(product);
        openCart();
    };

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img src={image} alt={name} className="product-image" />
            </div>
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price}</p>
            {/* <button className="btn btn-secondary product-btn" onClick={handleAddToCart}>
                Add to Cart
            </button> */}
        </div>
    );
};

export default ProductCard;
