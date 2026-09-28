import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Toys.css";

function Toys() {
  const navigate = useNavigate();

  // =========================
  // CATEGORIES
  // =========================

  const categories = [
    {
      icon: "🧸",
      title: "Soft Toys",
      subtitle: "Soft & cuddly friends",
    },
    {
      icon: "🪇",
      title: "Rattles",
      subtitle: "Fun little sounds",
    },
    {
      icon: "🦷",
      title: "Teethers",
      subtitle: "Gentle on tiny gums",
    },
    {
      icon: "🎵",
      title: "Musical Toys",
      subtitle: "Sweet sounds for babies",
    },
    {
      icon: "🌈",
      title: "Sensory Toys",
      subtitle: "Explore & discover",
    },
    {
      icon: "🛁",
      title: "Bath Toys",
      subtitle: "Make bath time fun",
    },
  ];

  // =========================
  // PRODUCTS
  // =========================

  const products = [
    {
      id: 1,
      name: "Cuddly Teddy Bear",
      category: "Soft Toys",
      age: "0-12 Months",
      price: 499,
      oldPrice: 699,
      rating: "4.9",
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Rainbow Baby Rattle",
      category: "Rattles",
      age: "0-6 Months",
      price: 299,
      oldPrice: 399,
      rating: "4.8",
      reviews: 96,
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Cute Silicone Teether",
      category: "Teethers",
      age: "3-12 Months",
      price: 249,
      oldPrice: 349,
      rating: "4.9",
      reviews: 184,
      image:
        "https://images.unsplash.com/photo-1584839042008-2e4f6b1a9f3e?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,
      name: "Musical Elephant Toy",
      category: "Musical Toys",
      age: "0-12 Months",
      price: 699,
      oldPrice: 899,
      rating: "4.7",
      reviews: 73,
      image:
        "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 5,
      name: "Soft Sensory Ball",
      category: "Sensory Toys",
      age: "3-12 Months",
      price: 349,
      oldPrice: 499,
      rating: "4.8",
      reviews: 112,
      image:
        "https://images.unsplash.com/photo-1594784053192-6d5b1b5a3d2e?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 6,
      name: "Little Bunny Plush",
      category: "Soft Toys",
      age: "0-12 Months",
      price: 549,
      oldPrice: 749,
      rating: "4.9",
      reviews: 91,
      image:
        "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 7,
      name: "Baby Bath Duck Set",
      category: "Bath Toys",
      age: "6-12 Months",
      price: 399,
      oldPrice: 549,
      rating: "4.7",
      reviews: 65,
      image:
        "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 8,
      name: "Newborn Activity Rattle",
      category: "Rattles",
      age: "0-6 Months",
      price: 279,
      oldPrice: 399,
      rating: "4.8",
      reviews: 143,
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 9,
      name: "Baby Star Sensory Toy",
      category: "Sensory Toys",
      age: "3-12 Months",
      price: 449,
      oldPrice: 599,
      rating: "4.8",
      reviews: 78,
      image:
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 10,
      name: "Tiny Musical Rattle",
      category: "Musical Toys",
      age: "0-6 Months",
      price: 329,
      oldPrice: 449,
      rating: "4.9",
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 11,
      name: "Silicone Ring Teether",
      category: "Teethers",
      age: "3-12 Months",
      price: 199,
      oldPrice: 299,
      rating: "4.8",
      reviews: 204,
      image:
        "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 12,
      name: "Mini Elephant Plush",
      category: "Soft Toys",
      age: "0-12 Months",
      price: 599,
      oldPrice: 799,
      rating: "4.9",
      reviews: 87,
      image:
        "https://images.unsplash.com/photo-1563901935883-cb61f0f2c6f7?auto=format&fit=crop&w=700&q=80",
    },
  ];

  // =========================
  // STATES
  // =========================

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All Toys");

  const [selectedAge, setSelectedAge] =
    useState("All Ages");

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
      selectedCategory === "All Toys" ||
      product.category === selectedCategory;

    const matchesAge =
      selectedAge === "All Ages" ||
      product.age === selectedAge;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesAge
    );
  });

  // =========================
  // CATEGORY FILTER
  // =========================

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);

    document
      .getElementById("toy-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // =========================
  // AGE FILTER
  // =========================

  const handleAgeFilter = (age) => {
    setSelectedAge(age);

    document
      .getElementById("toy-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
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
  // CLEAR FILTERS
  // =========================

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All Toys");
    setSelectedAge("All Ages");
  };

  // =========================
  // DISCOUNT CALCULATOR
  // =========================

  const calculateDiscount = (price, oldPrice) => {
    return Math.round(
      ((oldPrice - price) / oldPrice) * 100
    );
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
  // CART COUNT
  // =========================

  const totalCartItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // =========================
  // OPEN CART
  // =========================

  const openCart = () => {
    navigate("/cart");
  };

  return (
    <div className="toys-page">

      {/* =========================
          CART MESSAGE
      ========================= */}

      {cartMessage && (
        <div className="toy-cart-message">
          {cartMessage}
        </div>
      )}

      {/* =========================
          TOP BAR
      ========================= */}

      <div className="toys-topbar">
        🧸 Free Shipping on Baby Toys Above ₹499
      </div>

      {/* =========================
          HEADER
      ========================= */}

      <header className="toys-header">

        <Link
          to="/"
          className="toys-logo"
        >
          <div className="logo-icon">
            🧸
          </div>

          <div>
            <h2>
              Baby Shopper
            </h2>

            <p>
              Little toys, big smiles
            </p>
          </div>
        </Link>

        <nav className="toys-navigation">

          <Link to="/">
            Home
          </Link>

          <Link to="/clothing">
            Clothing
          </Link>

          <Link
            to="/toys"
            className="active"
          >
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

        </nav>

        <div className="toys-actions">

          <button
            aria-label="Search"
            onClick={() =>
              document
                .getElementById("toy-products")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            ⌕
          </button>

          <Link
            to="/wishlist"
            aria-label="Wishlist"
          >
            ♡
            {wishlist.length > 0 && (
              <span className="toy-header-count">
                {wishlist.length}
              </span>
            )}
          </Link>

          <button
            aria-label="Cart"
            onClick={openCart}
          >
            🛒

            {totalCartItems > 0 && (
              <span className="toy-header-count">
                {totalCartItems}
              </span>
            )}
          </button>

        </div>

      </header>

      {/* =========================
          HERO
      ========================= */}

      <section className="toys-hero">

        <div className="toys-hero-content">

          <span className="hero-label">
            LITTLE PLAYTIME COLLECTION
          </span>

          <h1>
            Tiny Toys
            <br />
            Big Smiles
          </h1>

          <p>
            Discover soft, safe and adorable toys
            made especially for your little one's
            first years.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-primary"
              onClick={() =>
                handleCategoryFilter("All Toys")
              }
            >
              Shop Baby Toys
            </button>

            <button
              className="hero-secondary"
              onClick={() =>
                handleCategoryFilter("Teethers")
              }
            >
              Explore Teethers
            </button>

          </div>

          <div className="hero-points">

            <span>
              ✓ Baby Friendly
            </span>

            <span>
              ✓ Soft Materials
            </span>

            <span>
              ✓ Age Appropriate
            </span>

          </div>

        </div>

        <div className="toys-hero-image">

          <img
            src="https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=1000&q=80"
            alt="Baby toys"
          />

          <div className="floating-toy-card">

            <span>
              🧸
            </span>

            <div>

              <strong>
                Little Friends
              </strong>

              <small>
                Made for tiny hands
              </small>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          CATEGORY SECTION
      ========================= */}

      <section className="toy-category-section">

        <div className="toy-section-title">

          <span>
            SHOP BY CATEGORY
          </span>

          <h2>
            Little Toys For Little Hands
          </h2>

          <p>
            Fun, colourful and baby-friendly toys
            selected for every tiny stage.
          </p>

        </div>

        <div className="toy-category-grid">

          {categories.map((category) => (

            <div
              className="toy-category-card"
              key={category.title}
              onClick={() =>
                handleCategoryFilter(
                  category.title
                )
              }
            >

              <div className="toy-category-icon">
                {category.icon}
              </div>

              <h3>
                {category.title}
              </h3>

              <p>
                {category.subtitle}
              </p>

              <button>
                Explore →
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* =========================
          PRODUCTS
      ========================= */}

      <section
        className="toy-products-section"
        id="toy-products"
      >

        <div className="toy-products-heading">

          <div>

            <span>
              OUR BABY TOY COLLECTION
            </span>

            <h2>
              Cute Picks For Playtime
            </h2>

          </div>

          <button
            className="all-toys-button"
            onClick={clearFilters}
          >
            View All Toys →
          </button>

        </div>

        {/* =========================
            SEARCH
        ========================= */}

        <div className="toy-search-box">

          <input
            type="text"
            placeholder="Search baby toys..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <span>
            🔍
          </span>

        </div>

        {/* =========================
            FILTER
        ========================= */}

        <div className="toy-filter">

          <button
            className={
              selectedCategory === "All Toys"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              handleCategoryFilter("All Toys")
            }
          >
            All Toys
          </button>

          <button
            className={
              selectedCategory === "Soft Toys"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              handleCategoryFilter("Soft Toys")
            }
          >
            Soft Toys
          </button>

          <button
            className={
              selectedCategory === "Rattles"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              handleCategoryFilter("Rattles")
            }
          >
            Rattles
          </button>

          <button
            className={
              selectedCategory === "Teethers"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              handleCategoryFilter("Teethers")
            }
          >
            Teethers
          </button>

          <button
            className={
              selectedCategory === "Musical Toys"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              handleCategoryFilter("Musical Toys")
            }
          >
            Musical
          </button>

          <button
            className={
              selectedCategory === "Sensory Toys"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              handleCategoryFilter("Sensory Toys")
            }
          >
            Sensory
          </button>

          <button
            className={
              selectedCategory === "Bath Toys"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              handleCategoryFilter("Bath Toys")
            }
          >
            Bath Toys
          </button>

        </div>

        {/* =========================
            AGE FILTER
        ========================= */}

        <div className="toy-age-filter">

          <span>
            Filter by Age:
          </span>

          <button
            className={
              selectedAge === "All Ages"
                ? "age-active"
                : ""
            }
            onClick={() =>
              setSelectedAge("All Ages")
            }
          >
            All Ages
          </button>

          <button
            className={
              selectedAge === "0-6 Months"
                ? "age-active"
                : ""
            }
            onClick={() =>
              handleAgeFilter("0-6 Months")
            }
          >
            0-6 Months
          </button>

          <button
            className={
              selectedAge === "3-12 Months"
                ? "age-active"
                : ""
            }
            onClick={() =>
              handleAgeFilter("3-12 Months")
            }
          >
            3-12 Months
          </button>

          <button
            className={
              selectedAge === "6-12 Months"
                ? "age-active"
                : ""
            }
            onClick={() =>
              handleAgeFilter("6-12 Months")
            }
          >
            6-12 Months
          </button>

          <button
            onClick={clearFilters}
          >
            Clear
          </button>

        </div>

        {/* =========================
            RESULT
        ========================= */}

        <div className="toy-result-count">
          Showing{" "}
          <strong>
            {filteredProducts.length}
          </strong>{" "}
          toys
        </div>

        {/* =========================
            PRODUCT GRID
        ========================= */}

        <div className="toy-product-grid">

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
                  className="toy-product-card"
                  key={product.id}
                >

                  <div className="toy-product-image">

                    <span className="toy-new-badge">
                      {discount >= 30
                        ? "HOT DEAL"
                        : "NEW"}
                    </span>

                    <button
                      className="toy-wishlist"
                      onClick={() =>
                        toggleWishlist(product)
                      }
                    >
                      {isWishlisted
                        ? "❤️"
                        : "♡"}
                    </button>

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <button
                      className="toy-add-cart"
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      Add to Cart 🛒
                    </button>

                  </div>

                  <div className="toy-product-info">

                    <span className="toy-product-category">
                      {product.category}
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <p className="toy-age">
                      👶 {product.age}
                    </p>

                    <div className="toy-rating">

                      <span>
                        ★
                      </span>

                      <strong>
                        {product.rating}
                      </strong>

                      <small>
                        ({product.reviews})
                      </small>

                    </div>

                    <div className="toy-price">

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

                  </div>

                </div>

              );
            })

          ) : (

            <div className="toy-no-products">

              <div>
                🔎
              </div>

              <h3>
                No Toys Found
              </h3>

              <p>
                Try another search or category.
              </p>

              <button
                onClick={clearFilters}
              >
                View All Toys
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =========================
          AGE SECTION
      ========================= */}

      <section className="toy-age-section">

        <div className="toy-age-content">

          <span>
            SHOP BY AGE
          </span>

          <h2>
            Toys For Every
            <br />
            Tiny Milestone
          </h2>

          <p>
            Choose toys according to your baby's
            age and stage of development.
          </p>

        </div>

        <div className="toy-age-grid">

          <div className="toy-age-card">

            <div>👶</div>

            <h3>
              0–3 Months
            </h3>

            <p>
              Newborn Essentials
            </p>

            <button
              onClick={() =>
                handleAgeFilter("0-6 Months")
              }
            >
              Explore →
            </button>

          </div>

          <div className="toy-age-card">

            <div>🧸</div>

            <h3>
              3–6 Months
            </h3>

            <p>
              Rattles & Teethers
            </p>

            <button
              onClick={() =>
                handleAgeFilter("0-6 Months")
              }
            >
              Explore →
            </button>

          </div>

          <div className="toy-age-card">

            <div>🌈</div>

            <h3>
              6–12 Months
            </h3>

            <p>
              Sensory Play
            </p>

            <button
              onClick={() =>
                handleAgeFilter("6-12 Months")
              }
            >
              Explore →
            </button>

          </div>

        </div>

      </section>

      {/* =========================
          FEATURES
      ========================= */}

      <section className="toy-features-section">

        <div className="toy-section-title">

          <span>
            MADE FOR BABIES
          </span>

          <h2>
            Why Parents Choose Us
          </h2>

        </div>

        <div className="toy-features-grid">

          <div className="toy-feature">
            <div className="feature-icon">
              🧸
            </div>

            <h3>
              Soft & Gentle
            </h3>

            <p>
              Comfortable toys designed
              for little hands.
            </p>
          </div>

          <div className="toy-feature">
            <div className="feature-icon">
              🌿
            </div>

            <h3>
              Baby Friendly
            </h3>

            <p>
              Carefully selected options
              suitable for babies.
            </p>
          </div>

          <div className="toy-feature">
            <div className="feature-icon">
              🌈
            </div>

            <h3>
              Fun & Colourful
            </h3>

            <p>
              Bright and engaging toys
              for early playtime.
            </p>
          </div>

          <div className="toy-feature">
            <div className="feature-icon">
              💝
            </div>

            <h3>
              Made With Love
            </h3>

            <p>
              Thoughtfully selected for
              your little one.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          NEWSLETTER
      ========================= */}

      <section className="toy-newsletter">

        <div>

          <span>
            LITTLE UPDATES
          </span>

          <h2>
            Stay in Our Little Loop 💕
          </h2>

          <p>
            Get new toy arrivals, special offers
            and baby shopping updates.
          </p>

        </div>

        <form
          className="toy-newsletter-form"
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
          <p className="toy-newsletter-message">
            {newsletterMessage}
          </p>
        )}

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="toys-footer">

        <div className="footer-about">

          <Link to="/">
            <h2>
              🧸 Baby Shopper
            </h2>
          </Link>

          <p>
            Adorable toys and essentials
            for your little one's happiest moments.
          </p>

        </div>

        <div>

          <h4>
            Shop
          </h4>

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

          <h4>
            Baby Toys
          </h4>

          <button
            onClick={() =>
              handleCategoryFilter("Soft Toys")
            }
          >
            Soft Toys
          </button>

          <button
            onClick={() =>
              handleCategoryFilter("Rattles")
            }
          >
            Rattles
          </button>

          <button
            onClick={() =>
              handleCategoryFilter("Teethers")
            }
          >
            Teethers
          </button>

          <button
            onClick={() =>
              handleCategoryFilter("Musical Toys")
            }
          >
            Musical Toys
          </button>

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

      </footer>

      <div className="toys-copyright">
        © 2026 Baby Shopper. Made with 💕 for little ones.
      </div>

      {/* =========================
          FLOATING CART
      ========================= */}

      <button
        className="toy-floating-cart"
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

export default Toys;