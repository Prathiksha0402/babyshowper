import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Shop.css";

function Shop() {
  const navigate = useNavigate();

  // =========================
  // PRODUCTS DATA
  // =========================

  const products = [
    {
      id: 1,
      name: "Soft Cotton Baby Romper",
      category: "Clothing",
      age: "0-3 Months",
      price: 599,
      oldPrice: 799,
      badge: "BEST SELLER",
      rating: 5,
      reviews: 124,
      emoji: "👶",
    },
    {
      id: 2,
      name: "Soft Teddy Bear",
      category: "Toys",
      age: "1-3 Years",
      price: 449,
      oldPrice: 599,
      badge: "POPULAR",
      rating: 5,
      reviews: 98,
      emoji: "🧸",
    },
    {
      id: 3,
      name: "Premium Baby Feeding Bottle",
      category: "Feeding",
      age: "0-3 Months",
      price: 699,
      oldPrice: 899,
      badge: "NEW",
      rating: 5,
      reviews: 76,
      emoji: "🍼",
    },
    {
      id: 4,
      name: "Gentle Baby Care Kit",
      category: "Baby Care",
      age: "3-6 Months",
      price: 899,
      oldPrice: 1199,
      badge: "TRENDING",
      rating: 5,
      reviews: 151,
      emoji: "🧴",
    },
    {
      id: 5,
      name: "Newborn Baby Dress",
      category: "Clothing",
      age: "0-3 Months",
      price: 499,
      oldPrice: 699,
      badge: "NEW",
      rating: 5,
      reviews: 63,
      emoji: "👗",
    },
    {
      id: 6,
      name: "Baby Musical Rattle",
      category: "Toys",
      age: "3-6 Months",
      price: 299,
      oldPrice: 399,
      badge: "POPULAR",
      rating: 5,
      reviews: 88,
      emoji: "🪇",
    },
    {
      id: 7,
      name: "Silicone Baby Bowl Set",
      category: "Feeding",
      age: "6-12 Months",
      price: 349,
      oldPrice: 499,
      badge: "BEST SELLER",
      rating: 5,
      reviews: 91,
      emoji: "🥣",
    },
    {
      id: 8,
      name: "Baby Skincare Combo",
      category: "Baby Care",
      age: "6-12 Months",
      price: 599,
      oldPrice: 899,
      badge: "TRENDING",
      rating: 5,
      reviews: 112,
      emoji: "🧴",
    },
  ];

  // =========================
  // STATES
  // =========================

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedAge, setSelectedAge] =
    useState("All");

  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState([]);

  const [email, setEmail] = useState("");

  const [newsletterMessage, setNewsletterMessage] =
    useState("");

  const [cartMessage, setCartMessage] =
    useState("");

  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesAge =
      selectedAge === "All" ||
      product.age === selectedAge;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesAge
    );
  });

  // =========================
  // CALCULATE DISCOUNT
  // =========================

  const calculateDiscount = (price, oldPrice) => {
    return Math.round(
      ((oldPrice - price) / oldPrice) * 100
    );
  };

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct =
        previousCart.find(
          (item) => item.id === product.id
        );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
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

    setCartMessage(
      `${product.name} added to cart 🛒`
    );

    setTimeout(() => {
      setCartMessage("");
    }, 2500);
  };

  // =========================
  // WISHLIST
  // =========================

  const toggleWishlist = (product) => {
    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    if (exists) {
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

  // =========================
  // AGE FILTER
  // =========================

  const handleAgeFilter = (age) => {
    setSelectedAge(age);

    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // =========================
  // NEWSLETTER
  // =========================

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setNewsletterMessage(
        "Please enter your email address."
      );
      return;
    }

    if (
      !email.includes("@") ||
      !email.includes(".")
    ) {
      setNewsletterMessage(
        "Please enter a valid email address."
      );
      return;
    }

    setNewsletterMessage(
      "Successfully subscribed! 💕"
    );

    setEmail("");
  };

  // =========================
  // CART
  // =========================

  const totalCartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const openCart = () => {
    navigate("/cart");
  };

  // =========================
  // RESET FILTERS
  // =========================

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedAge("All");
  };

  return (
    <div className="shop-page">

      {/* =========================
          CART MESSAGE
      ========================= */}

      {cartMessage && (
        <div className="cart-message">
          {cartMessage}
        </div>
      )}

      {/* =========================
          HERO
      ========================= */}
     <nav className="offers-navbar">

<Link to="/" className="offers-logo">
  🧸 <span>Baby Shopper</span>
</Link>

<div className="offers-navlinks">

  <Link to="/">Home</Link>

  <Link to="/clothing">
    Clothing
  </Link>

  <Link to="/toys">
    Toys
  </Link>

  <Link to="/feeding">
    Feeding
  </Link>

  <Link to="/baby-care">
    Baby Care
  </Link>

  <Link
    to="/offers"
    className="active"
  >
    Offers
  </Link>

</div>

<div className="offers-actions">

  <Link to="/wishlist">
    ❤️
    {wishlist.length > 0 && (
      <span className="header-count">
        {wishlist.length}
      </span>
    )}
  </Link>

  <button
    className="cart-icon"
    onClick={openCart}
  >
    🛒

    {cart.length > 0 && (
      <span className="header-count">
        {cart.length}
      </span>
    )}
  </button>

</div>

</nav>
      <section className="shop-hero">

        <div className="hero-content">

          <span className="hero-small-title">
            WELCOME TO VITA-ECOM
          </span>

          <h1>
            Everything Your
            <span> Little One </span>
            Needs
          </h1>

          <p>
            Discover adorable clothing, playful toys,
            feeding essentials and gentle baby care
            products—all made for happy little moments.
          </p>

          <div className="hero-buttons">

            <a
              href="#products"
              className="primary-btn"
            >
              Shop Collection
            </a>

            <Link
              to="/offers"
              className="secondary-btn"
            >
              View Offers
            </Link>

          </div>

          <div className="hero-features">

            <div>
              <strong>1000+</strong>
              <span>Baby Products</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Quality Products</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Customer Support</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="hero-circle"></div>

          <div className="baby-placeholder">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEzRL4e3sbQUyzlS798wnMBqRkNPgGA3B86eg1W5Xqw&s=10"
              alt="Baby"
            />
          </div>

          <div className="floating-card card-one">
            🧸
            <span>New Toys</span>
          </div>

          <div className="floating-card card-two">
            💕
            <span>Loved by Parents</span>
          </div>

        </div>

      </section>

      {/* =========================
          CATEGORY
      ========================= */}

      <section className="shop-section">

        <div className="section-heading">

          <span>
            EXPLORE OUR COLLECTION
          </span>

          <h2>
            Shop By Category
          </h2>

          <p>
            Find everything you need for your
            baby's everyday journey.
          </p>

        </div>

        <div className="category-grid">

          <Link
            to="/clothing"
            className="large-category"
          >
            <div className="category-emoji">
              👕
            </div>

            <div>
              <h3>
                Baby Clothing
              </h3>

              <p>
                Soft & stylish outfits
              </p>

              <span>
                Explore Collection →
              </span>
            </div>
          </Link>

          <Link
            to="/toys"
            className="large-category"
          >
            <div className="category-emoji">
              🧸
            </div>

            <div>
              <h3>
                Toys & Games
              </h3>

              <p>
                Fun for every little age
              </p>

              <span>
                Explore Collection →
              </span>
            </div>
          </Link>

          <Link
            to="/feeding"
            className="large-category"
          >
            <div className="category-emoji">
              🍼
            </div>

            <div>
              <h3>
                Feeding Essentials
              </h3>

              <p>
                Made for happy mealtimes
              </p>

              <span>
                Explore Collection →
              </span>
            </div>
          </Link>

          <Link
            to="/baby-care"
            className="large-category"
          >
            <div className="category-emoji">
              🧴
            </div>

            <div>
              <h3>
                Baby Care
              </h3>

              <p>
                Gentle everyday care
              </p>

              <span>
                Explore Collection →
              </span>
            </div>
          </Link>

        </div>

      </section>

      {/* =========================
          AGE FILTER
      ========================= */}

      <section className="age-section">

        <div className="section-heading">

          <span>
            FIND THE PERFECT PRODUCTS
          </span>

          <h2>
            Shop By Age
          </h2>

          <p>
            Products carefully selected for every stage.
          </p>

        </div>

        <div className="age-grid">

          <div className="age-card">
            <div>🍼</div>
            <h3>0 – 3 Months</h3>
            <p>Newborn essentials</p>

            <button
              onClick={() =>
                handleAgeFilter("0-3 Months")
              }
            >
              Explore →
            </button>
          </div>

          <div className="age-card">
            <div>👶</div>
            <h3>3 – 6 Months</h3>
            <p>Growing baby essentials</p>

            <button
              onClick={() =>
                handleAgeFilter("3-6 Months")
              }
            >
              Explore →
            </button>
          </div>

          <div className="age-card">
            <div>🐣</div>
            <h3>6 – 12 Months</h3>
            <p>Play & discovery</p>

            <button
              onClick={() =>
                handleAgeFilter("6-12 Months")
              }
            >
              Explore →
            </button>
          </div>

          <div className="age-card">
            <div>🧒</div>
            <h3>1 – 3 Years</h3>
            <p>Growing little explorers</p>

            <button
              onClick={() =>
                handleAgeFilter("1-3 Years")
              }
            >
              Explore →
            </button>
          </div>

        </div>

      </section>

      {/* =========================
          PRODUCTS
      ========================= */}

      <section
        className="product-section"
        id="products"
      >

        <div className="section-top">

          <div>

            <span>
              OUR FAVORITES
            </span>

            <h2>
              Best Sellers
            </h2>

            <p>
              Parent-loved products for your little ones.
            </p>

          </div>

          <Link to="/shop">
            View All Products →
          </Link>

        </div>

        {/* =========================
            FILTER BAR
        ========================= */}

        <div className="shop-filter-bar">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
          >
            <option value="All">
              All Categories
            </option>

            <option value="Clothing">
              Clothing
            </option>

            <option value="Toys">
              Toys
            </option>

            <option value="Feeding">
              Feeding
            </option>

            <option value="Baby Care">
              Baby Care
            </option>
          </select>

          <select
            value={selectedAge}
            onChange={(e) =>
              setSelectedAge(e.target.value)
            }
          >
            <option value="All">
              All Ages
            </option>

            <option value="0-3 Months">
              0 - 3 Months
            </option>

            <option value="3-6 Months">
              3 - 6 Months
            </option>

            <option value="6-12 Months">
              6 - 12 Months
            </option>

            <option value="1-3 Years">
              1 - 3 Years
            </option>
          </select>

          <button
            onClick={clearFilters}
          >
            Clear
          </button>

        </div>

        {/* =========================
            RESULT COUNT
        ========================= */}

        <div className="product-result-count">
          Showing{" "}
          <strong>
            {filteredProducts.length}
          </strong>{" "}
          products
        </div>

        <div className="product-grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => {

              const isWishlisted =
                wishlist.some(
                  (item) =>
                    item.id === product.id
                );

              const discount =
                calculateDiscount(
                  product.price,
                  product.oldPrice
                );

              return (

                <div
                  className="product-card"
                  key={product.id}
                >

                  <div className="product-image">

                    <span className="product-badge">
                      {product.badge}
                    </span>

                    <button
                      className="wishlist"
                      onClick={() =>
                        toggleWishlist(product)
                      }
                    >
                      {isWishlisted
                        ? "❤️"
                        : "♡"}
                    </button>

                    <div className="product-emoji">
                      {product.emoji}
                    </div>

                  </div>

                  <div className="product-info">

                    <span className="product-category">
                      {product.category}
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <div className="rating">

                      {"⭐".repeat(product.rating)}

                      <span>
                        ({product.reviews})
                      </span>

                    </div>

                    <div className="price">

                      ₹{product.price}

                      <del>
                        ₹{product.oldPrice}
                      </del>

                      <strong>
                        {discount}% OFF
                      </strong>

                    </div>

                    <button
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      Add to Cart 🛒
                    </button>

                  </div>

                </div>

              );
            })

          ) : (

            <div className="no-products">

              <div>
                🔎
              </div>

              <h3>
                No Products Found
              </h3>

              <p>
                Try another search or category.
              </p>

              <button
                onClick={clearFilters}
              >
                View All Products
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =========================
          OFFER BANNER
      ========================= */}

      <section className="offer-banner">

        <div className="offer-content">

          <span>
            LIMITED TIME OFFER
          </span>

          <h2>
            Little Things,
            <br />
            Big Savings 💕
          </h2>

          <p>
            Get up to <strong>50% OFF</strong>{" "}
            on selected baby essentials.
          </p>

          <Link to="/offers">
            Shop Offers →
          </Link>

        </div>

        <div className="offer-icon">
          🎁
        </div>

      </section>

      {/* =========================
          NEW ARRIVALS
      ========================= */}

      <section className="new-section">

        <div className="section-heading">

          <span>
            JUST ARRIVED
          </span>

          <h2>
            New Arrivals
          </h2>

          <p>
            Fresh picks for your little sunshine.
          </p>

        </div>

        <div className="new-grid">

          <div className="new-card">

            <div>🧸</div>

            <h3>
              Educational Toys
            </h3>

            <p>
              From ₹399
            </p>

            <Link to="/toys">
              Discover →
            </Link>

          </div>

          <div className="new-card">

            <div>👗</div>

            <h3>
              Baby Party Wear
            </h3>

            <p>
              From ₹799
            </p>

            <Link to="/clothing">
              Discover →
            </Link>

          </div>

          <div className="new-card">

            <div>🍼</div>

            <h3>
              Feeding Collection
            </h3>

            <p>
              From ₹299
            </p>

            <Link to="/feeding">
              Discover →
            </Link>

          </div>

        </div>

      </section>

      {/* =========================
          TRUST
      ========================= */}

      <section className="trust-section">

        <div className="section-heading">

          <span>
            WHY PARENTS CHOOSE US
          </span>

          <h2>
            Shopping Made Easy
          </h2>

        </div>

        <div className="trust-grid">

          <div className="trust-card">
            <div>🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              Get your little one's essentials
              delivered quickly to your door.
            </p>
          </div>

          <div className="trust-card">
            <div>🔒</div>
            <h3>Secure Payments</h3>
            <p>
              Your payment information is protected
              with secure checkout.
            </p>
          </div>

          <div className="trust-card">
            <div>↩️</div>
            <h3>Easy Returns</h3>
            <p>
              Shop confidently with our simple
              return process.
            </p>
          </div>

          <div className="trust-card">
            <div>💬</div>
            <h3>Parent Support</h3>
            <p>
              Our support team is always ready
              to help you.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          NEWSLETTER
      ========================= */}

      <section className="newsletter">

        <div>

          <span>
            STAY IN THE LOOP
          </span>

          <h2>
            Get Little Updates 💕
          </h2>

          <p>
            Subscribe for new arrivals, parenting
            essentials and special offers.
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
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

        {newsletterMessage && (
          <p className="newsletter-message">
            {newsletterMessage}
          </p>
        )}

      </section>

      {/* =========================
          FLOATING CART
      ========================= */}

      <button
        className="floating-cart"
        onClick={openCart}
      >
        🛒

        {totalCartItems > 0 && (
          <span>
            {totalCartItems}
          </span>
        )}
      </button>

    </div>
  );
}

export default Shop;