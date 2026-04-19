import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductList from './components/ProductList.jsx'
import CartItem from './components/CartItem.jsx'
import AboutUs from './components/AboutUs.jsx'
import Navbar from './components/Navbar.jsx'

const Landing = () => (
  <div className="landing">
    <Navbar />
    <section className="hero">
      <div className="hero-overlay">
        <p className="eyebrow">Paradise Nursery</p>
        <h1>Where every room becomes a retreat</h1>
        <p className="hero-copy">
          Browse lush greens, sculptural succulents, and vibrant bloomers. Curated collections,
          guided care, and a cart that updates as you shop.
        </p>
        <div className="hero-actions">
          <Link to="/plants" className="primary">
            Get Started
          </Link>
          <Link to="/about" className="secondary">
            Learn more
          </Link>
        </div>
      </div>
    </section>

    <section className="highlights">
      <div className="highlight-card">
        <h3>Curated bundles</h3>
        <p>Mix-and-match sets that fill shelves, desks, and bright corners with ease.</p>
      </div>
      <div className="highlight-card">
        <h3>Care included</h3>
        <p>Light and watering tips accompany every order so your plants thrive.</p>
      </div>
      <div className="highlight-card">
        <h3>Delivery ready</h3>
        <p>Secure packaging keeps leaves pristine from greenhouse to your doorstep.</p>
      </div>
    </section>
  </div>
)

const AboutPage = () => (
  <div className="page">
    <Navbar />
    <AboutUs />
  </div>
)

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  )
}

export default App
