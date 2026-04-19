import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../store/CartSlice.jsx'
import Navbar from './Navbar.jsx'
import { Link } from 'react-router-dom'

const CartItem = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const totalCount = useSelector(selectCartCount)
  const [message, setMessage] = useState('')

  const handleCheckout = () => {
    setMessage('Checkout is coming soon—stay tuned!')
  }

  const hasItems = cartItems.length > 0

  return (
    <div className="page">
      <Navbar />
      <header className="page-header">
        <p className="eyebrow">Your cart</p>
        <h1>Shopping Cart</h1>
        <p>Adjust quantities, remove items, or keep browsing for more plants.</p>
      </header>

      {!hasItems && (
        <div className="empty-state">
          <p>Your cart is empty.</p>
          <Link to="/plants" className="primary">
            Continue shopping
          </Link>
        </div>
      )}

      {hasItems && (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <article className="cart-row" key={item.id}>
                <div className="cart-thumb">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="muted">{item.category}</p>
                  <p className="price">Unit price: ${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-quantity">
                  <button
                    type="button"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    disabled={item.quantity === 1}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>
                <div className="line-total">
                  <p className="muted">Total</p>
                  <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  type="button"
                  className="ghost"
                  onClick={() => dispatch(removeItem(item.id))}
                  aria-label={`Remove ${item.name}`}
                >
                  Delete
                </button>
              </article>
            ))}
          </div>

          <section className="cart-summary">
            <div>
              <p className="muted">Items in cart</p>
              <h3>{totalCount}</h3>
            </div>
            <div>
              <p className="muted">Total amount</p>
              <h3>${total.toFixed(2)}</h3>
            </div>
            <div className="cart-actions">
              <button type="button" className="primary" onClick={handleCheckout}>
                Checkout
              </button>
              <Link to="/plants" className="secondary">
                Continue shopping
              </Link>
            </div>
            {message && <p className="muted">{message}</p>}
          </section>
        </>
      )}
    </div>
  )
}

export default CartItem
