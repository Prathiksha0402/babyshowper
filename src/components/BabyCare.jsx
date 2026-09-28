
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BabyCare.css";

function BabyCare() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const categories = [
    {
      name: "Baby Skincare",
      filter: "Skincare",
      icon: "🧴",
      text: "Gentle care for delicate baby skin",
    },
    {
      name: "Bath Essentials",
      filter: "Bath",
      icon: "🛁",
      text: "Everything for a happy bath time",
    },
    {
      name: "Diaper Care",
      filter: "Diaper",
      icon: "🧷",
      text: "Comfortable everyday diaper essentials",
    },
    {
      name: "Baby Grooming",
      filter: "Grooming",
      icon: "✂️",
      text: "Tiny grooming essentials for little ones",
    },
    {
      name: "Oral Care",
      filter: "Oral Care",
      icon: "🪥",
      text: "Gentle oral care from the beginning",
    },
    {
      name: "Baby Safety",
      filter: "Safety",
      icon: "🛡️",
      text: "Helpful essentials for baby-safe spaces",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Gentle Baby Body Lotion",
      category: "Skincare",
      price: 299,
      oldPrice: 349,
      rating: 4.8,
      reviews: 124,
      age: "0+ Months",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Baby Mild Shampoo",
      category: "Bath",
      price: 249,
      oldPrice: 299,
      rating: 4.7,
      reviews: 98,
      age: "0+ Months",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Baby Massage Oil",
      category: "Skincare",
      price: 279,
      oldPrice: 329,
      rating: 4.9,
      reviews: 156,
      age: "0+ Months",
      image:
        "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,
      name: "Soft Baby Hair Brush",
      category: "Grooming",
      price: 149,
      oldPrice: 199,
      rating: 4.6,
      reviews: 75,
      age: "0+ Months",
      image:
        "https://images.unsplash.com/photo-1584839404042-8bc21d2408b4?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 5,
      name: "Baby Bath Towel",
      category: "Bath",
      price: 399,
      oldPrice: 499,
      rating: 4.8,
      reviews: 112,
      age: "0–12 Months",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 6,
      name: "Baby Diaper Changing Mat",
      category: "Diaper",
      price: 449,
      oldPrice: 599,
      rating: 4.7,
      reviews: 89,
      age: "0–24 Months",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 7,
      name: "Baby Nail Care Set",
      category: "Grooming",
      price: 229,
      oldPrice: 299,
      rating: 4.8,
      reviews: 63,
      age: "0+ Months",
      image:
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 8,
      name: "Baby Toothbrush Set",
      category: "Oral Care",
      price: 199,
      oldPrice: 249,
      rating: 4.6,
      reviews: 54,
      age: "6+ Months",
      image:
        "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 9,
      name: "Baby Diaper Rash Cream",
      category: "Diaper",
      price: 319,
      oldPrice: 379,
      rating: 4.9,
      reviews: 187,
      age: "0+ Months",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 10,
      name: "Baby Wash & Shampoo",
      category: "Bath",
      price: 349,
      oldPrice: 399,
      rating: 4.8,
      reviews: 145,
      age: "0+ Months",
      image:
        "https://images.unsplash.com/photo-1556228852-80b6e5a0f9d9?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 11,
      name: "Soft Baby Comb",
      category: "Grooming",
      price: 129,
      oldPrice: 169,
      rating: 4.7,
      reviews: 42,
      age: "0+ Months",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 12,
      name: "Baby Care Gift Box",
      category: "Skincare",
      price: 799,
      oldPrice: 999,
      rating: 4.9,
      reviews: 91,
      age: "Newborn",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    },
  ];

  const filters = [
    "All",
    "Skincare",
    "Bath",
    "Diaper",
    "Grooming",
    "Oral Care",
  ];

  // ==============================
  // FILTER + SEARCH
  // ==============================

  const filteredProducts = products.filter((product) => {
    const filterMatch =
      activeFilter === "All" ||
      product.category === activeFilter;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return filterMatch && searchMatch;
  });

  // ==============================
  // SCROLL TO PRODUCTS
  // ==============================

  const scrollToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // ==============================
  // CATEGORY
  // ==============================

  const selectCategory = (category) => {
    setActiveFilter(category);
    setSearch("");

    setTimeout(() => {
      scrollToProducts();
    }, 50);
  };

  // ==============================
  // ADD TO CART
  // ==============================

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
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
  };

  // ==============================
  // WISHLIST
  // ==============================

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

  // ==============================
  // CART COUNT
  // ==============================

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ==============================
  // NEWSLETTER
  // ==============================

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Successfully subscribed! 💕");
    setEmail("");
  };

  return (
    <div className="baby-care-page">

      {/* =========================
          TOP OFFER BAR
      ========================== */}

      <div className="baby-care-topbar">
        🧸 Free Shipping on Baby Care Essentials Above ₹499
      </div>

      {/* =========================
          NAVBAR
      ========================== */}

      <header className="baby-care-header">

        <Link
          to="/"
          className="baby-care-logo"
        >
          <span className="logo-baby">
            🍼
          </span>

          <div>
            <h2>Baby Shopper</h2>
            <p>Little Things, Big Love</p>
          </div>
        </Link>

        <nav className="baby-care-nav">

          <Link to="/">
            Home
          </Link>

          <Link to="/clothing">
            Clothing
          </Link>

          <Link to="/toys">
            Toys
          </Link>

          <Link to="/feeding">
            Feeding
          </Link>

          <Link
            className="active"
            to="/baby-care"
          >
            Baby Care
          </Link>

          <Link to="/offers">
            Offers
          </Link>

        </nav>

        <div className="baby-care-actions">

          <button
            onClick={scrollToProducts}
            aria-label="Search"
          >
            ⌕
          </button>

          <button
            onClick={() =>
              alert(
                `${wishlist.length} item(s) in wishlist`
              )
            }
            aria-label="Wishlist"
          >
            ♡ {wishlist.length}
          </button>

          <button
            className="cart-button"
            onClick={() =>
              alert(
                `${cartCount} item(s) in cart`
              )
            }
          >
            🛒
            <span>
              {cartCount}
            </span>
          </button>

        </div>

      </header>

      {/* =========================
          HERO
      ========================== */}

      <section className="baby-care-hero">

        <div className="hero-content">

          <span className="hero-small">
            💗 MADE WITH LOVE FOR BABIES
          </span>

          <h1>
            Gentle Care
            <br />
            For Your <span>Little One</span>
          </h1>

          <p>
            Discover gentle and thoughtful baby care essentials made for
            delicate skin, happy bath times and everyday baby moments.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => {
                setActiveFilter("All");
                setSearch("");
                scrollToProducts();
              }}
            >
              Shop Baby Care →
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("categories")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Explore Categories
            </button>

          </div>

          <div className="hero-features">

            <div>
              <strong>✓</strong>
              <span>Baby Friendly</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Gentle Essentials</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Everyday Care</span>
            </div>

          </div>

        </div>

        <div className="hero-image-area">

          <div className="hero-circle"></div>

          <img
            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1000&q=85"
            alt="Baby care"
          />

          <div className="floating-card">

            <span>💗</span>

            <div>
              <strong>
                Happy Baby
              </strong>

              <small>
                Happy Parents
              </small>
            </div>

          </div>

        </div>

      </section>

      {/* =========================
          CATEGORIES
      ========================== */}

      <section
        className="care-categories"
        id="categories"
      >

        <div className="section-heading">

          <span>
            SHOP BY CATEGORY
          </span>

          <h2>
            Everything Your Baby Needs
          </h2>

          <p>
            Thoughtfully selected essentials for your little one's daily care.
          </p>

        </div>

        <div className="category-grid">

          {categories.map((category, index) => (

            <div
              className={`care-category category-${index}`}
              key={category.name}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>
                {category.name}
              </h3>

              <p>
                {category.text}
              </p>

              <button
                onClick={() =>
                  selectCategory(category.filter)
                }
              >
                Shop Now →
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* =========================
          PRODUCTS
      ========================== */}

      <section
        className="care-products"
        id="products"
      >

        <div className="section-heading">

          <span>
            OUR BABY CARE COLLECTION
          </span>

          <h2>
            Little Care, Big Comfort 💕
          </h2>

          <p>
            Showing {filteredProducts.length} product(s)
          </p>

        </div>

        {/* SEARCH */}

        <div className="baby-care-search">

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search baby care products..."
          />

          {search && (
            <button
              onClick={() => setSearch("")}
            >
              Clear
            </button>
          )}

        </div>

        {/* FILTERS */}

        <div className="product-filters">

          {filters.map((filter) => (

            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>

          ))}

        </div>

        {/* PRODUCT GRID */}

        <div className="product-grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => {

              const isWishlisted =
                wishlist.some(
                  (item) => item.id === product.id
                );

              const discount = Math.round(
                ((product.oldPrice - product.price) /
                  product.oldPrice) *
                  100
              );

              return (
                <div
                  className="care-product-card"
                  key={product.id}
                >

                  <div className="product-image">

                    <span className="product-badge">
                      BABY CARE
                    </span>

                    <button
                      className="heart-btn"
                      onClick={() =>
                        toggleWishlist(product)
                      }
                    >
                      {isWishlisted ? "♥" : "♡"}
                    </button>

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>

                  <div className="product-info">

                    <span className="product-age">
                      {product.age}
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <div className="rating">

                      ⭐ {product.rating}

                      <span>
                        ({product.reviews})
                      </span>

                    </div>

                    <div className="price-row">

                      <strong>
                        ₹{product.price}
                      </strong>

                      <del>
                        ₹{product.oldPrice}
                      </del>

                      <span>
                        {discount}% OFF
                      </span>

                    </div>

                    <button
                      className="add-cart"
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      🛒 Add to Cart
                    </button>

                  </div>

                </div>
              );
            })

          ) : (

            <div className="no-products">

              <h3>
                😔 No products found
              </h3>

              <p>
                Try another product name or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
              >
                Show All Products
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =========================
          AGE COLLECTION
      ========================== */}

      <section className="age-care-section">

        <div className="section-heading">

          <span>
            CARE BY AGE
          </span>

          <h2>
            Made for Every Little Stage
          </h2>

          <p>
            Find useful essentials according to your baby's age.
          </p>

        </div>

        <div className="age-care-grid">

          <div className="age-card">

            <div className="age-emoji">
              👶
            </div>

            <h3>
              Newborn
            </h3>

            <p>
              0–3 Months
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
                scrollToProducts();
              }}
            >
              Explore →
            </button>

          </div>

          <div className="age-card">

            <div className="age-emoji">
              🧸
            </div>

            <h3>
              Little Baby
            </h3>

            <p>
              3–6 Months
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("Bath");
                scrollToProducts();
              }}
            >
              Explore →
            </button>

          </div>

          <div className="age-card">

            <div className="age-emoji">
              🌼
            </div>

            <h3>
              Growing Baby
            </h3>

            <p>
              6–12 Months
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("Skincare");
                scrollToProducts();
              }}
            >
              Explore →
            </button>

          </div>

          <div className="age-card">

            <div className="age-emoji">
              🧒
            </div>

            <h3>
              Toddler
            </h3>

            <p>
              1–3 Years
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
                scrollToProducts();
              }}
            >
              Explore →
            </button>

          </div>

        </div>

      </section>

      {/* =========================
          WHY BABY SHOPPER
      ========================== */}

      <section className="why-care">

        <div className="why-content">

          <span>
            WHY PARENTS LOVE US
          </span>

          <h2>
            Because Your Baby Deserves the Best 💗
          </h2>

          <p>
            From the first bath to those tiny everyday moments, we bring
            together practical baby care essentials designed around comfort,
            convenience and happy parenting.
          </p>

          <div className="why-list">

            <div>

              <span>🧴</span>

              <div>
                <h3>
                  Gentle Baby Care
                </h3>

                <p>
                  Made with baby's delicate needs in mind.
                </p>
              </div>

            </div>

            <div>

              <span>🛁</span>

              <div>
                <h3>
                  Everyday Essentials
                </h3>

                <p>
                  Useful products for everyday baby routines.
                </p>
              </div>

            </div>

            <div>

              <span>💗</span>

              <div>
                <h3>
                  Parent Friendly
                </h3>

                <p>
                  Simple products that make parenting easier.
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="why-image">

          <img
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=85"
            alt="Happy baby"
          />

        </div>

      </section>

      {/* =========================
          NEWSLETTER
      ========================== */}

      <section className="baby-newsletter">

        <div>

          <span>
            💌 JOIN OUR BABY CLUB
          </span>

          <h2>
            Get Baby Care Tips & Special Offers
          </h2>

          <p>
            Subscribe for useful baby care ideas, new arrivals and exclusive
            offers.
          </p>

        </div>

        <form
          className="newsletter-form"
          onSubmit={handleSubscribe}
        >

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter your email address"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

        {message && (
          <p className="newsletter-message">
            {message}
          </p>
        )}

      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="baby-footer">

        <div className="footer-main">

          <div className="footer-brand">

            <h2>
              🍼 Baby Shopper
            </h2>

            <p>
              Everything little ones need, carefully selected with lots of
              love.
            </p>

            <div className="social-icons">
              <span>📷</span>
              <span>📘</span>
              <span>▶️</span>
              <span>💬</span>
            </div>

          </div>

          <div>

            <h3>
              Shop
            </h3>

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

          </div>

          <div>

            <h3>
              Baby Care
            </h3>

            <button
              onClick={() =>
                selectCategory("Skincare")
              }
            >
              Skincare
            </button>

            <button
              onClick={() =>
                selectCategory("Bath")
              }
            >
              Bath Essentials
            </button>

            <button
              onClick={() =>
                selectCategory("Diaper")
              }
            >
              Diaper Care
            </button>

            <button
              onClick={() =>
                selectCategory("Grooming")
              }
            >
              Grooming
            </button>

          </div>

          <div>

            <h3>
              Help
            </h3>

            <Link to="/contact">
              Contact Us
            </Link>

            <Link to="/shipping">
              Shipping
            </Link>

            <Link to="/returns">
              Returns
            </Link>

            <Link to="/faq">
              FAQs
            </Link>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Baby Shopper. Made with 💗 for little ones.
          </p>

          <div>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default BabyCare;