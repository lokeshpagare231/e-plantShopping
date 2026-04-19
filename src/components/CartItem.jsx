import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../redux/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const count = useSelector(selectCartCount);

  const handleCheckout = () => {
    alert("Checkout coming soon!");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="brand">
          <span className="brand-badge">PN</span>
          <span>Paradise Nursery</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#plants">Plants</a>
          </li>
          <li>
            <span className="cart-pill">
              Cart
              <span className="pill">{count}</span>
            </span>
          </li>
        </ul>
      </nav>

      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-layout">
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-meta">
                <strong>{item.name}</strong>
                <span>Unit price: ${item.price.toFixed(2)}</span>
                <div className="qty-controls">
                  <button className="btn" onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <span className="pill">{item.quantity}</span>
                  <button className="btn" onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                </div>
                <div className="summary">
                  <span>Item total: ${Number(item.price * item.quantity).toFixed(2)}</span>
                  <div className="actions">
                    <button className="link-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="summary">
            <strong>Total amount</strong>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="actions">
            <button className="btn" onClick={handleCheckout}>
              Checkout
            </button>
            <a className="link-btn" href="#plants">
              Continue Shopping
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
