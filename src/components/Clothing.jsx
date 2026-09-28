
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Clothing.css";

function Clothing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // =========================
  // PRODUCTS
  // =========================

  const products = [
    {
      id: 1,
      name: "Tiny Floral Mini Dress",
      category: "Mini Dresses",
      age: "0-3 Months",
      price: 599,
      oldPrice: 799,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxE5aofNITZwNKVlbg8ZEzMnQUkH6v7aId6sRJIvzvIQ&s=10",
    },
    {
      id: 2,
      name: "Little Princess Frock",
      category: "Frocks",
      age: "0-3 Months",
      price: 649,
      oldPrice: 849,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTb1EgagJ5P2xHwFm6-RfjYxuc7WXb-LUgxj4fRHEMA&s=10",
    },
    {
      id: 3,
      name: "Cute Bow Mini Dress",
      category: "Mini Dresses",
      age: "0-3 Months",
      price: 699,
      oldPrice: 899,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8YoGF_luv1_XmYrA21cq82px4bqZsqxq0nBNGHxQDg&s=10",
    },
    {
      id: 4,
      name: "Newborn Cotton Romper",
      category: "Rompers",
      age: "0-3 Months",
      price: 449,
      oldPrice: 599,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Id4aWj18BWdp1wIvc-NywrVsaYfUj2vZ2bVmOqYzpA&s=10",
    },
    {
      id: 5,
      name: "Sweet Pink Baby Frock",
      category: "Frocks",
      age: "3-6 Months",
      price: 579,
      oldPrice: 749,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GlRlyPrhWTFgHtRmeP17_fRtoqnvIHb2aOOQWq8UfQ&s=10",
    },
    {
      id: 6,
      name: "Baby Girl Cotton Dress",
      category: "Mini Dresses",
      age: "0-3 Months",
      price: 529,
      oldPrice: 699,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-XZSrw81sZJvvvF5s_WYeCsPHZHublqBBXVepGwxSg&s=10",
    },
    {
      id: 7,
      name: "Little Bear Bodysuit",
      category: "Bodysuits",
      age: "0-3 Months",
      price: 399,
      oldPrice: 549,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAZwoLBcJvxyUWpJ_HCfpZFMAXVQeznwKzWKC6Hae7w&s=10",
    },
    {
      id: 8,
      name: "Tiny Baby Boy Romper",
      category: "Rompers",
      age: "0-3 Months",
      price: 429,
      oldPrice: 579,
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // =========================
  // CATEGORIES
  // =========================

  const categories = [
    {
      title: "Mini Dresses",
      subtitle: "Tiny & adorable",
      icon: "🎀",
    },
    {
      title: "Rompers",
      subtitle: "Soft everyday wear",
      icon: "🧸",
    },
    {
      title: "Frocks",
      subtitle: "Cute little styles",
      icon: "🌸",
    },
    {
      title: "Bodysuits",
      subtitle: "Comfort for newborns",
      icon: "🍼",
    },
  ];

  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.age
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // =========================
  // SCROLL TO PRODUCTS
  // =========================

  const scrollToProducts = () => {
    document
      .getElementById("clothing-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // =========================
  // CATEGORY SELECT
  // =========================

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setSearch("");

    setTimeout(() => {
      scrollToProducts();
    }, 50);
  };

  // =========================
  // ADD TO CART API
  // =========================

  const addToCart = async (product) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/orders/cart/add/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_id: product.id,
            quantity: 1,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message ||
            "Failed to add product to cart"
        );
        return;
      }

      // Update frontend cart count
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
                  quantity:
                    item.quantity + 1,
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

      alert(
        `${product.name} added to cart 🛒`
      );

    } catch (error) {
      console.error(
        "Add to cart error:",
        error
      );

      alert(
        "Unable to connect to Django server. Please make sure Django is running."
      );
    }
  };

  // =========================
  // WISHLIST
  // =========================

  const toggleWishlist = (product) => {
    const alreadyAdded =
      wishlist.some(
        (item) => item.id === product.id
      );

    if (alreadyAdded) {
      setWishlist(
        (previousWishlist) =>
          previousWishlist.filter(
            (item) =>
              item.id !== product.id
          )
      );
    } else {
      setWishlist(
        (previousWishlist) => [
          ...previousWishlist,
          product,
        ]
      );
    }
  };

  // =========================
  // NEWSLETTER
  // =========================

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage(
        "Please enter your email address."
      );
      return;
    }

    if (!email.includes("@")) {
      setMessage(
        "Please enter a valid email address."
      );
      return;
    }

    setMessage(
      "Successfully subscribed! 💕"
    );

    setEmail("");
  };

  // =========================
  // CART COUNT
  // =========================

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // =========================
  // OPEN CART
  // =========================

  const openCart = () => {
    alert(
      `You have ${cartCount} item(s) in your cart 🛒`
    );
  };

  // =========================
  // OPEN WISHLIST
  // =========================

  const openWishlist = () => {
    alert(
      `You have ${wishlist.length} item(s) in your wishlist ❤️`
    );
  };

  return (
    <div className="clothing-page">

      {/* =========================
          TOP BANNER
      ========================== */}

      <div className="clothing-top-banner">
        🌸 Special Newborn Collection • Soft • Cute • Comfortable 🌸
      </div>

      {/* =========================
          NAVBAR
      ========================== */}

      <nav className="clothing-navbar">

        {/* LOGO */}

        <Link
          to="/"
          className="clothing-logo"
        >
          <span className="logo-icon">
            🧸
          </span>

          <div>
            <h2>
              Baby Shopper
            </h2>

            <p>
              Little clothes, big smiles
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}

        <div className="clothing-navlinks">

          <Link to="/">
            Home
          </Link>

          <Link
            to="/clothing"
            className="active"
          >
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

          <Link to="/offers">
            Offers
          </Link>

        </div>

        {/* ACTION BUTTONS */}

        <div className="clothing-actions">

          {/* SEARCH */}

          <button
            className="nav-action"
            onClick={scrollToProducts}
            aria-label="Search products"
          >
            🔍
          </button>

          {/* WISHLIST */}

          <button
            className="nav-action wishlist-action"
            onClick={openWishlist}
            aria-label="Wishlist"
          >
            ❤️

            {wishlist.length > 0 && (
              <span className="header-count">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* CART */}

          <button
            className="nav-action cart-action"
            onClick={openCart}
            aria-label="Cart"
          >
            🛒

            {cartCount > 0 && (
              <span className="header-count">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </nav>

      {/* =========================
          HERO
      ========================== */}

      <section className="clothing-hero">

        <div className="hero-content">

          <span className="hero-small-title">
            NEWBORN COLLECTION
          </span>

          <h1>
            Tiny Clothes
            <br />
            For Tiny Humans
          </h1>

          <p>
            Discover adorable mini dresses,
            tiny rompers, soft frocks and
            comfortable newborn outfits.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                selectCategory("All")
              }
            >
              Shop Newborns
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                selectCategory(
                  "Mini Dresses"
                )
              }
            >
              Explore Mini Dresses
            </button>

          </div>

          <div className="hero-features">

            <span>
              ✓ 0–3 Months
            </span>

            <span>
              ✓ 3–6 Months
            </span>

            <span>
              ✓ Soft Cotton
            </span>

          </div>

        </div>

        <div className="hero-image-box">

          <img
            src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80"
            alt="Newborn baby clothing"
          />

          <div className="hero-badge">

            <strong>
              NEW
            </strong>

            <span>
              Born to be cute
            </span>

          </div>

        </div>

      </section>

      {/* =========================
          CATEGORY SECTION
      ========================== */}

      <section className="category-section">

        <div className="section-heading">

          <span>
            SHOP LITTLE LOOKS
          </span>

          <h2>
            Newborn Clothing
          </h2>

          <p>
            Specially selected outfits for
            your little one's first beautiful
            months.
          </p>

        </div>

        <div className="category-grid">

          {categories.map(
            (category) => (

              <div
                className="category-card"
                key={category.title}
              >

                <div className="category-icon">
                  {category.icon}
                </div>

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.subtitle}
                </p>

                <button
                  onClick={() =>
                    selectCategory(
                      category.title
                    )
                  }
                >
                  Shop Now →
                </button>

              </div>

            )
          )}

        </div>

      </section>

      {/* =========================
          PRODUCTS
      ========================== */}

      <section
        className="products-section"
        id="clothing-products"
      >

        <div className="products-header">

          <div>

            <span>
              OUR LITTLE COLLECTION
            </span>

            <h2>
              Made For Newborns
            </h2>

            <p>
              Showing{" "}
              {filteredProducts.length}{" "}
              product(s)
            </p>

          </div>

          <button
            className="view-all"
            onClick={() => {
              setSelectedCategory("All");
              setSearch("");
            }}
          >
            View All →
          </button>

        </div>

        {/* SEARCH */}

        <div className="clothing-search">

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
            placeholder="Search baby clothing..."
          />

          {search && (
            <button
              onClick={() =>
                setSearch("")
              }
            >
              Clear
            </button>
          )}

        </div>

        {/* FILTER */}

        <div className="filter-buttons">

          {[
            "All",
            "Mini Dresses",
            "Rompers",
            "Frocks",
            "Bodysuits",
          ].map(
            (category) => (

              <button
                key={category}
                className={
                  selectedCategory ===
                  category
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
              >
                {category}
              </button>

            )
          )}

        </div>

        {/* PRODUCT GRID */}

        <div className="product-grid">

          {filteredProducts.length >
          0 ? (

            filteredProducts.map(
              (product) => {

                const isWishlisted =
                  wishlist.some(
                    (item) =>
                      item.id ===
                      product.id
                  );

                const discount =
                  Math.round(
                    ((product.oldPrice -
                      product.price) /
                      product.oldPrice) *
                      100
                  );

                return (
                  <div
                    className="product-card"
                    key={product.id}
                  >

                    <div className="product-image">

                      <span className="new-tag">
                        NEW
                      </span>

                      {/* WISHLIST */}

                      <button
                        className="wishlist"
                        onClick={() =>
                          toggleWishlist(
                            product
                          )
                        }
                        aria-label="Add to wishlist"
                      >
                        {isWishlisted
                          ? "♥"
                          : "♡"}
                      </button>

                      {/* IMAGE */}

                      <img
                        src={
                          product.image
                        }
                        alt={
                          product.name
                        }
                      />

                      {/* ADD CART */}

                      <button
                        className="quick-cart"
                        onClick={() =>
                          addToCart(
                            product
                          )
                        }
                      >
                        Add to Cart 🛒
                      </button>

                    </div>

                    <div className="product-info">

                      <span className="product-category">
                        {
                          product.category
                        }
                      </span>

                      <h3>
                        {product.name}
                      </h3>

                      <p className="product-age">
                        👶{" "}
                        {product.age}
                      </p>

                      <div className="price-row">

                        <strong>
                          ₹
                          {
                            product.price
                          }
                        </strong>

                        <del>
                          ₹
                          {
                            product.oldPrice
                          }
                        </del>

                        <span>
                          {
                            discount
                          }
                          % OFF
                        </span>

                      </div>

                    </div>

                  </div>
                );
              }
            )

          ) : (

            <div className="no-products">

              <h3>
                😔 No products found
              </h3>

              <p>
                Try another product
                name or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory(
                    "All"
                  );
                }}
              >
                Show All Products
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =========================
          AGE SECTION
      ========================== */}

      <section className="age-section">

        <div className="age-content">

          <span>
            SHOP BY AGE
          </span>

          <h2>
            Perfect Little Fits
            <br />
            For Every Tiny Stage
          </h2>

          <p>
            Find comfortable and cute
            clothing designed specially
            for newborn babies.
          </p>

        </div>

        <div className="age-cards">

          {/* 0-3 MONTHS */}

          <div className="age-card">

            <span>
              👶
            </span>

            <h3>
              0–3 Months
            </h3>

            <p>
              Newborn Essentials
            </p>

            <button
              onClick={() => {
                setSearch(
                  "0-3 Months"
                );

                setSelectedCategory(
                  "All"
                );

                scrollToProducts();
              }}
            >
              Explore →
            </button>

          </div>

          {/* 3-6 MONTHS */}

          <div className="age-card">

            <span>
              🧸
            </span>

            <h3>
              3–6 Months
            </h3>

            <p>
              Tiny Everyday Looks
            </p>

            <button
              onClick={() => {
                setSearch(
                  "3-6 Months"
                );

                setSelectedCategory(
                  "All"
                );

                scrollToProducts();
              }}
            >
              Explore →
            </button>

          </div>

          {/* 6-9 MONTHS */}

          <div className="age-card">

            <span>
              🌸
            </span>

            <h3>
              6–9 Months
            </h3>

            <p>
              Cute Little Outfits
            </p>

            <button
              onClick={() => {
                setSelectedCategory(
                  "All"
                );

                setSearch("");

                scrollToProducts();
              }}
            >
              Explore →
            </button>

          </div>

        </div>

      </section>

      {/* =========================
          WHY SECTION
      ========================== */}

      <section className="why-section">

        <div className="section-heading">

          <span>
            FOR YOUR LITTLE ONE
          </span>

          <h2>
            Why Parents Love Our
            Clothes
          </h2>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <div>
              🌿
            </div>

            <h3>
              Soft Fabrics
            </h3>

            <p>
              Gentle materials made for
              delicate newborn skin.
            </p>

          </div>

          <div className="why-card">

            <div>
              🧸
            </div>

            <h3>
              Comfort First
            </h3>

            <p>
              Tiny designs that keep
              babies comfortable all day.
            </p>

          </div>

          <div className="why-card">

            <div>
              🎀
            </div>

            <h3>
              Adorable Styles
            </h3>

            <p>
              Cute mini dresses and
              outfits for precious moments.
            </p>

          </div>

          <div className="why-card">

            <div>
              💝
            </div>

            <h3>
              Made With Love
            </h3>

            <p>
              Carefully selected styles
              for your little one.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          NEWSLETTER
      ========================== */}

      <section className="newsletter">

        <div>

          <span>
            STAY IN THE LOOP
          </span>

          <h2>
            Get Little Updates 💕
          </h2>

          <p>
            New arrivals, tiny offers and
            adorable collections delivered
            to your inbox.
          </p>

        </div>

        <form
          className="newsletter-form"
          onSubmit={
            handleSubscribe
          }
        >

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(
                event.target.value
              )
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

      <footer className="clothing-footer">

        <div className="footer-brand">

          <h2>
            🧸 Baby Shopper
          </h2>

          <p>
            Cute little clothes for your
            little ones.
          </p>

        </div>

        <div>

          <h4>
            Shop
          </h4>

          <Link to="/clothing">
            Clothing
          </Link>

          <Link to="/baby-boy">
            Baby Boy
          </Link>

          <Link to="/baby-girl">
            Baby Girl
          </Link>

          <Link to="/offers">
            Offers
          </Link>

        </div>

        <div>

          <h4>
            Help
          </h4>

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
            FAQ
          </Link>

        </div>

        <div>

          <h4>
            Follow Us
          </h4>

          <div className="social-icons">

            <span>
              📘
            </span>

            <span>
              📸
            </span>

            <span>
              ▶️
            </span>

            <span>
              💬
            </span>

          </div>

        </div>

      </footer>

      {/* =========================
          COPYRIGHT
      ========================== */}

      <div className="copyright">
        © 2026 Baby Shopper. Made with
        💕 for little ones.
      </div>

    </div>
  );
}

export default Clothing;
