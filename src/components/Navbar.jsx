import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/CartSlice.jsx'

const Navbar = () => {
  const count = useSelector(selectCartCount)

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        Paradise Nursery
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Home
        </NavLink>
        <NavLink
          to="/plants"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Plants
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => `nav-link cart-link ${isActive ? 'active' : ''}`}
        >
          <span aria-hidden="true">🛒</span>
          <span className="cart-text">Cart</span>
          <span className="cart-count" aria-label={`${count} items in cart`}>
            {count}
          </span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
