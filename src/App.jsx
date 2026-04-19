import React from "react";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import AboutUs from "./AboutUs";
import "./App.css";

const App = () => {
  const itemCount = useSelector((state) => state.cart?.totalQuantity ?? 0);

  return (
    <div className="app" id="home">
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
              <span className="pill">{itemCount}</span>
            </span>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Bring The Paradise Home</h1>
        <p>
          Discover lush houseplants curated by our growers, matched with care tips, and delivered
          fresh to your door. Build the perfect indoor jungle with Paradise Nursery.
        </p>
        <a href="#plants" className="cta">
          Get Started
        </a>
      </header>

      <main>
        <section id="plants" className="section">
          <ProductList />
        </section>
        <section id="about" className="section">
          <AboutUs />
        </section>
      </main>
    </div>
  );
};

export default App;
