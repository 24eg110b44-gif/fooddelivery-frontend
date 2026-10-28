import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <h2>🍔 FoodExpress</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Restaurants</a>
          <a href="#">Orders</a>
          <a href="#">Login</a>
          <button>Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Delicious Food,
            <br />
            Delivered Fast! 🍕
          </h1>

          <p>
            Order your favorite food from the best restaurants
            near you.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search for food or restaurants..."
            />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <h2>Popular Categories</h2>

        <div className="categories">
          <div className="category">
            🍕
            <span>Pizza</span>
          </div>

          <div className="category">
            🍔
            <span>Burgers</span>
          </div>

          <div className="category">
            🍜
            <span>Chinese</span>
          </div>

          <div className="category">
            🍗
            <span>Biryani</span>
          </div>

          <div className="category">
            🥗
            <span>Healthy</span>
          </div>
        </div>
      </section>

      {/* Popular Food */}
      <section className="section">
        <h2>Popular Food</h2>

        <div className="food-container">

          <div className="food-card">
            <div className="food-image">🍕</div>

            <h3>Margherita Pizza</h3>

            <p>Cheesy and delicious pizza</p>

            <div className="food-bottom">
              <strong>₹249</strong>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="food-card">
            <div className="food-image">🍔</div>

            <h3>Chicken Burger</h3>

            <p>Juicy chicken burger</p>

            <div className="food-bottom">
              <strong>₹199</strong>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="food-card">
            <div className="food-image">🍗</div>

            <h3>Chicken Biryani</h3>

            <p>Authentic flavorful biryani</p>

            <div className="food-bottom">
              <strong>₹299</strong>
              <button>Add to Cart</button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>🍔 FoodExpress</h3>
        <p>Food Delivery Management System</p>
        <p>© 2026 FoodExpress. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
