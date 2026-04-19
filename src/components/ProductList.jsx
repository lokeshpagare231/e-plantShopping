import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartCount, selectCartItems } from "../redux/CartSlice";
import CartItem from "./CartItem";

const catalog = [
  {
    category: "Low Light Lovers",
    plants: [
      {
        id: "zz-plant",
        name: "ZZ Plant",
        price: 24,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "snake-plant",
        name: "Snake Plant",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "pothos",
        name: "Golden Pothos",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "philodendron",
        name: "Heartleaf Philodendron",
        price: 19,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "aglaonema",
        name: "Aglaonema",
        price: 27,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "parlor-palm",
        name: "Parlor Palm",
        price: 21,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=60",
      },
    ],
  },
  {
    category: "Air Purifying",
    plants: [
      {
        id: "peace-lily",
        name: "Peace Lily",
        price: 23,
        image:
          "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "rubber-plant",
        name: "Rubber Plant",
        price: 29,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "areca-palm",
        name: "Areca Palm",
        price: 35,
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "boston-fern",
        name: "Boston Fern",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "ivy",
        name: "English Ivy",
        price: 17,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "dracaena",
        name: "Dracaena",
        price: 26,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
      },
    ],
  },
  {
    category: "Statement Plants",
    plants: [
      {
        id: "fiddle-leaf",
        name: "Fiddle Leaf Fig",
        price: 58,
        image:
          "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "monstera",
        name: "Monstera Deliciosa",
        price: 48,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "bird-paradise",
        name: "Bird of Paradise",
        price: 52,
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "alocasia",
        name: "Alocasia Polly",
        price: 32,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "calathea",
        name: "Calathea Orbifolia",
        price: 34,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=60",
      },
      {
        id: "rubber-tree",
        name: "Burgundy Rubber Tree",
        price: 39,
        image:
          "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?auto=format&fit=crop&w=400&q=60",
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  const inCart = (id) => cartItems.some((item) => item.id === id);

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
            <a href="#cart" className="cart-pill">
              Cart <span className="pill">{cartCount}</span>
            </a>
          </li>
        </ul>
      </nav>

      {catalog.map((group) => (
        <section key={group.category} className="section">
          <h2>{group.category}</h2>
          <div className="grid">
            {group.plants.map((plant) => (
              <div className="card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price.toFixed(2)}</p>
                <button
                  className="btn"
                  disabled={inCart(plant.id)}
                  onClick={() => dispatch(addToCart(plant))}
                >
                  {inCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section id="cart" className="section">
        <CartItem />
      </section>
    </div>
  );
};

export default ProductList;
