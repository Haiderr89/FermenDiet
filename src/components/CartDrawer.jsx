import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, Lock } from 'lucide-react';
import './CartDrawer.css';

const CartDrawer = () => {
    const {
        cartItems,
        isCartOpen,
        closeCart,
        removeFromCart,
        updateQuantity,
        getCartTotal
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={closeCart}></div>
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-drawer-header">
                    <h2>Cart ({cartItems.length} items)</h2>
                    <button className="close-btn" onClick={closeCart}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-drawer-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-drawer">
                            <p>Your cart is empty</p>
                            <button className="btn btn-primary" onClick={closeCart}>Start Shopping</button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="drawer-item">
                                <div className="drawer-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="drawer-item-details">
                                    <h3>{item.name}</h3>
                                    <p className="drawer-item-price">{item.price.toFixed(3)} BHD</p>
                                    <div className="drawer-quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                                            <Minus size={14} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                                <button className="drawer-remove-btn" onClick={() => removeFromCart(item.id)}>
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-drawer-footer">
                        <div className="promo-code">
                            <span className="tag-icon">🏷️</span>
                            <span>Enter a promo code</span>
                        </div>

                        <div className="drawer-summary">
                            <div className="summary-row total">
                                <span>Estimated total</span>
                                <span>{getCartTotal().toFixed(3)} BHD</span>
                            </div>
                            <p className="tax-note">Taxes and shipping are calculated at checkout.</p>
                        </div>

                        {/* <button className="btn btn-primary drawer-checkout-btn">Checkout</button> */}
                        <Link to="/cart" className="btn btn-outline drawer-view-cart-btn" onClick={closeCart}>View Cart</Link>

                        <div className="secure-checkout">
                            <Lock size={12} />
                            <span>Secure Checkout</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
