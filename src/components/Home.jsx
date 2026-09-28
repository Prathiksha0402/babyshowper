import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // ================= SEARCH =================

  const [search, setSearch] = useState("");

  // ================= CART =================

  const [cart, setCart] = useState([]);

  // ================= WISHLIST =================

  const [wishlist, setWishlist] = useState([]);

  // ================= NEWSLETTER =================

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ================= CATEGORIES =================

  const categories = [
    {
      name: "Baby Clothing",
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=500&q=80",
      link: "/clothing",
    },
    {
      name: "Toys",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=500&q=80",
      link: "/toys",
    },
    {
      name: "Feeding",
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=500&q=80",
      link: "/feeding",
    },
    {
      name: "Baby Care",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80",
      link: "/baby-care",
    },
  ];

  // ================= PRODUCTS =================

  const products = [
    {
      id: 1,
      name: "Baby Cotton Romper",
      category: "Clothing",
      price: 599,
      oldPrice: 799,
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Soft Teddy Bear",
      category: "Toys",
      price: 499,
      oldPrice: 699,
      image:
        "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Baby Feeding Bottle",
      category: "Feeding",
      price: 349,
      oldPrice: 499,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRE2TnJ0XHwSUTyUFoD9SwdddRoD-vfWR62wmZI2j35g&s=10",
    },
    {
      id: 4,
      name: "Baby Care Kit",
      category: "Baby Care",
      price: 899,
      oldPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80",
    },
  ];

  // ================= SEARCH FUNCTION =================

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      alert("Please enter a product name");
      return;
    }

    const result = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (result.length > 0) {
      alert(`${result.length} product found`);
    } else {
      alert("Product not found");
    }
  };

  // ================= CART FUNCTION =================

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    alert(`${product.name} added to cart`);
  };

  // ================= WISHLIST FUNCTION =================

  const toggleWishlist = (product) => {
    const alreadyAdded = wishlist.some(
      (item) => item.id === product.id
    );

    if (alreadyAdded) {
      setWishlist((previousWishlist) =>
        previousWishlist.filter(
          (item) => item.id !== product.id
        )
      );
    } else {
      setWishlist((previousWishlist) => [
        ...previousWishlist,
        product,
      ]);
    }
  };

  // ================= CART PAGE =================

  const openCart = () => {
    navigate("/cart");
  };

  // ================= LOGIN =================

  const openLogin = () => {
    navigate("/login");
  };

  // ================= NEWSLETTER =================

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("Successfully subscribed! ❤️");
    setEmail("");
  };

  // ================= JSX =================

  return (
    <div className="home">

      {/* ================= HEADER ================= */}

      <header className="header">

        <Link to="/" className="logo">
          🧸 <span>BabyNest</span>
        </Link>

        {/* SEARCH */}

        <form
          className="search-box"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search for baby products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit">
            🔍
          </button>
        </form>

        {/* HEADER ACTIONS */}

        <div className="header-actions">

          <button
            type="button"
            onClick={() => navigate("/wishlist")}
          >
            ♡
            <span>{wishlist.length}</span>
          </button>

          <button
            type="button"
            onClick={openCart}
          >
            🛒
            <span>{cart.length}</span>
          </button>

          <button
            type="button"
            onClick={openLogin}
          >
            👤
          </button>

        </div>

      </header>

      {/* ================= NAVIGATION ================= */}

      <nav className="navbar">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/shop">
          Shop
        </NavLink>

        <NavLink to="/clothing">
          Clothing
        </NavLink>

        <NavLink to="/toys">
          Toys
        </NavLink>

        <NavLink to="/feeding">
          Feeding
        </NavLink>

        <NavLink to="/baby-care">
          Baby Care
        </NavLink>

        <NavLink to="/offers">
          Offers
        </NavLink>

      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small-title">
            EVERYTHING FOR YOUR LITTLE ONE
          </p>

          <h1>
            Little Moments.
            <br />
            Big Memories.
          </h1>

          <p className="hero-description">
            Discover adorable clothes, toys, feeding essentials
            and everything your baby needs.
          </p>

          <button
            className="shop-button"
            onClick={() => navigate("/shop")}
          >
            Shop Now →
          </button>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=80"
            alt="Happy baby"
          />

        </div>

      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="section">

        <div className="section-heading">
          <h2>Shop By Category</h2>

          <p>
            Everything your little one needs
          </p>
        </div>

        <div className="category-grid">

          {categories.map((category) => (

            <div
              className="category-card"
              key={category.name}
              onClick={() => navigate(category.link)}
            >

              <img
                src={category.image}
                alt={category.name}
              />

              <div className="category-overlay">

                <h3>
                  {category.name}
                </h3>

                <button type="button">
                  Shop Now →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= AGE ================= */}

      <section className="age-section">

        <div className="section-heading">

          <h2>
            Shop By Age
          </h2>

          <p>
            Find products perfect for every stage
          </p>

        </div>

        <div className="age-grid">

          <div
            className="age-card"
            onClick={() => navigate("/shop?age=newborn")}
          >
            <span>👶</span>
            <h3>Newborn</h3>
            <p>0 - 3 Months</p>
            <button>Explore →</button>
          </div>

          <div
            className="age-card"
            onClick={() => navigate("/shop?age=infant")}
          >
            <span>🍼</span>
            <h3>Infant</h3>
            <p>3 - 12 Months</p>
            <button>Explore →</button>
          </div>

          <div
            className="age-card"
            onClick={() => navigate("/shop?age=toddler")}
          >
            <span>🧸</span>
            <h3>Toddler</h3>
            <p>1 - 3 Years</p>
            <button>Explore →</button>
          </div>

          <div
            className="age-card"
            onClick={() => navigate("/shop?age=kids")}
          >
            <span>🎒</span>
            <h3>Kids</h3>
            <p>3 - 6 Years</p>
            <button>Explore →</button>
          </div>

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="section">

        <div className="section-heading">

          <h2>
            Trending Products
          </h2>

          <p>
            Our most loved products
          </p>

        </div>

        <div className="product-grid">

          {products.map((product) => {

            const isWishlisted = wishlist.some(
              (item) => item.id === product.id
            );

            return (

              <div
                className="product-card"
                key={product.id}
              >

                <div className="product-image">

                  <span className="sale-badge">
                    SALE
                  </span>

                  <button
                    className="wishlist"
                    type="button"
                    onClick={() =>
                      toggleWishlist(product)
                    }
                  >
                    {isWishlisted ? "❤️" : "♡"}
                  </button>

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>

                <div className="product-info">

                  <h3>
                    {product.name}
                  </h3>

                  <div className="rating">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <div className="price">

                    <strong>
                      ₹{product.price}
                    </strong>

                    <del>
                      ₹{product.oldPrice}
                    </del>

                  </div>

                  <button
                    className="cart-button"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            );
          })}

        </div>

      </section>

      {/* ================= OFFER ================= */}

      <section className="offer-section">

        <div>

          <p>
            LIMITED TIME OFFER
          </p>

          <h2>
            Get 20% OFF
            <br />
            on your first order
          </h2>

          <button
            className="offer-button"
            onClick={() => navigate("/offers")}
          >
            SHOP NOW →
          </button>

        </div>

        <div className="offer-emoji">
          🧸 👶 🍼
        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="feature">
          <span>🚚</span>

          <div>
            <h3>Fast Delivery</h3>
            <p>Quick delivery to your doorstep</p>
          </div>
        </div>

        <div className="feature">
          <span>🔒</span>

          <div>
            <h3>Secure Payment</h3>
            <p>100% secure payment</p>
          </div>
        </div>

        <div className="feature">
          <span>↩️</span>

          <div>
            <h3>Easy Returns</h3>
            <p>Hassle-free returns</p>
          </div>
        </div>

        <div className="feature">
          <span>❤️</span>

          <div>
            <h3>Quality Products</h3>
            <p>Carefully selected for babies</p>
          </div>
        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter">

        <div>

          <span>
            STAY IN THE LOOP
          </span>

          <h2>
            Get Little Updates 💕
          </h2>

          <p>
            Subscribe for new arrivals, parenting essentials
            and special offers.
          </p>

        </div>

        <form
          className="subscribe-box"
          onSubmit={handleSubscribe}
        >

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">
            Subscribe
          </button>

          {message && (
            <p className="subscribe-message">
              {message}
            </p>
          )}

        </form>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <Link
          to="/"
          className="footer-logo"
        >
          🧸 BabyNest
        </Link>

        <p>
          Everything you need for your little one's
          happy journey.
        </p>

        <div className="footer-links">

          <Link to="/about">
            About Us
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>

        <p className="copyright">
          © 2026 BabyNest. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;