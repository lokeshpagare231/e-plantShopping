import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/CartSlice.jsx'
import { plantCatalog } from '../data/plants.js'
import Navbar from './Navbar.jsx'

const ProductList = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const handleAdd = (product, category) => {
    dispatch(addItem({ ...product, category }))
  }

  return (
    <div className="page">
      <Navbar />
      <header className="page-header">
        <p className="eyebrow">Plant Menu</p>
        <h1>Find the right plant for your space</h1>
        <p>
          Choose from lush foliage, sun-loving succulents, and bright bloomers. Add plants to your
          cart and watch the total update instantly.
        </p>
      </header>

      {plantCatalog.map((group) => (
        <section key={group.category} className="category">
          <div className="category-header">
            <div>
              <p className="eyebrow">{group.tagline}</p>
              <h2>{group.category}</h2>
            </div>
            <span className="pill">6+ picks</span>
          </div>

          <div className="product-grid">
            {group.items.map((product) => {
              const inCart = Boolean(cartItems[product.id])
              return (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-body">
                    <div>
                      <h3>{product.name}</h3>
                      <p className="price">${product.price.toFixed(2)}</p>
                    </div>
                    <button
                      type="button"
                      className="primary"
                      disabled={inCart}
                      onClick={() => handleAdd(product, group.category)}
                    >
                      {inCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ProductList
