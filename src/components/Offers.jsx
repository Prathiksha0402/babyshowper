import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Offers.css";

function Offers() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Newborn Cotton Mini Dress",
      category: "Clothing",
      price: 399,
      oldPrice: 599,
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Soft Baby Teddy Bear",
      category: "Toys",
      price: 299,
      oldPrice: 499,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Baby Feeding Bottle",
      category: "Feeding",
      price: 249,
      oldPrice: 399,
      discount: "38% OFF",
      image:
        "https://images.unsplash.com/photo-1584839404042-8bc8e4e8b6b8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Baby Care Gift Set",
      category: "Baby Care",
      price: 699,
      oldPrice: 999,
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Baby Girl Party Mini Frock",
      category: "Clothing",
      price: 549,
      oldPrice: 799,
      discount: "31% OFF",
      image:
        "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Baby Musical Toy",
      category: "Toys",
      price: 449,
      oldPrice: 699,
      discount: "36% OFF",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      name: "Baby Silicone Bowl Set",
      category: "Feeding",
      price: 349,
      oldPrice: 499,
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1604914620347-0f4c6f5f3d45?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      name: "Baby Skincare Combo",
      category: "Baby Care",
      price: 599,
      oldPrice: 899,
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // =========================
  // STATES
  // =========================

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [search, setSearch] = useState("");

  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const [couponMessage, setCouponMessage] = useState("");

  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 32,
    seconds: 45,
  });

  // =========================
  // SEARCH
  // =========================

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // =========================
  // ADD TO CART
  // =========================

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

    alert(`${product.name} added to cart 🛒`);
  };

  // =========================
  // WISHLIST
  // =========================

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

  // =========================
  // COUPON COPY
  // =========================

  const copyCoupon = async () => {
    try {
      await navigator.clipboard.writeText("BABY10");

      setCouponMessage("Coupon BABY10 copied! 🎉");

      setTimeout(() => {
        setCouponMessage("");
      }, 3000);
    } catch (error) {
      setCouponMessage("Please copy the code manually.");
    }
  };

  // =========================
  // FLASH COUNTDOWN
  // =========================

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        let { hours, minutes, seconds } = previousTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
            }
          }
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // =========================
  // NEWSLETTER
  // =========================

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setNewsletterMessage("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterMessage(
      "Successfully subscribed! Welcome to Baby Shopper 💕"
    );

    setEmail("");
  };

  // =========================
  // OPEN CART
  // =========================

  const openCart = () => {
    navigate("/cart");
  };

  return (
    <div className="offers-page">

      {/* ================= TOP BAR ================= */}

      <div className="offers-topbar">
        🎉 Special Offers – Extra 10% OFF on orders above ₹999
      </div>

      {/* ================= NAVBAR ================= */}

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

      {/* ================= HERO ================= */}

      <section className="offers-hero">

        <div className="hero-content">

          <span className="hero-badge">
            LIMITED TIME DEALS
          </span>

          <h1>
            Little Deals,
            <br />
            <span>Big Savings!</span>
          </h1>

          <p>
            Cute products for your little ones at prices
            you'll love. Grab your favourite baby essentials
            before the offers end!
          </p>

          <a
            href="#offers-products"
            className="shop-offers-btn"
          >
            Shop Offers →
          </a>

        </div>

        <div className="hero-circle">
          👶
        </div>

        <div className="floating-offer offer-one">
          🏷️
          <strong>50% OFF</strong>
          <small>Selected Items</small>
        </div>

        <div className="floating-offer offer-two">
          🎁
          <strong>FREE GIFT</strong>
          <small>On orders ₹1499+</small>
        </div>

      </section>

      {/* ================= OFFER CATEGORIES ================= */}

      <section className="offer-categories">

        <div className="section-heading">

          <span>
            SHOP & SAVE
          </span>

          <h2>
            Today's Top Offers
          </h2>

          <p>
            Find amazing deals across our baby collection.
          </p>

        </div>

        <div className="category-grid">

          <div className="offer-category clothing-offer">

            <div className="category-icon">
              👗
            </div>

            <h3>
              Baby Clothing
            </h3>

            <p>
              Up to 40% OFF
            </p>

            <Link to="/clothing">
              Shop Now →
            </Link>

          </div>

          <div className="offer-category toys-offer">

            <div className="category-icon">
              🧸
            </div>

            <h3>
              Baby Toys
            </h3>

            <p>
              Up to 50% OFF
            </p>

            <Link to="/toys">
              Shop Now →
            </Link>

          </div>

          <div className="offer-category feeding-offer">

            <div className="category-icon">
              🍼
            </div>

            <h3>
              Feeding
            </h3>

            <p>
              Up to 35% OFF
            </p>

            <Link to="/feeding">
              Shop Now →
            </Link>

          </div>

          <div className="offer-category care-offer">

            <div className="category-icon">
              🧴
            </div>

            <h3>
              Baby Care
            </h3>

            <p>
              Up to 45% OFF
            </p>

            <Link to="/baby-care">
              Shop Now →
            </Link>

          </div>

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}

      <section
        className="offers-products"
        id="offers-products"
      >

        <div className="section-heading">

          <span>
            BEST DEALS
          </span>

          <h2>
            Products On Offer
          </h2>

          <p>
            Limited-time discounts on your little one's
            favourites.
          </p>

        </div>

        {/* SEARCH */}

        <div className="offer-search">

          <input
            type="text"
            placeholder="Search offer products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <span>
            🔍
          </span>

        </div>

        <div className="products-grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => {

              const isWishlisted =
                wishlist.some(
                  (item) => item.id === product.id
                );

              return (

                <div
                  className="offer-product-card"
                  key={product.id}
                >

                  <div className="product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="discount-badge">
                      {product.discount}
                    </span>

                    <button
                      className="wishlist"
                      onClick={() =>
                        toggleWishlist(product)
                      }
                    >
                      {isWishlisted ? "❤️" : "♡"}
                    </button>

                  </div>

                  <div className="product-details">

                    <span className="product-category">
                      {product.category}
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <div className="rating">
                      ⭐⭐⭐⭐⭐
                      <span>
                        (24)
                      </span>
                    </div>

                    <div className="price">

                      <strong>
                        ₹{product.price}
                      </strong>

                      <del>
                        ₹{product.oldPrice}
                      </del>

                    </div>

                    <div className="saving">
                      You Save ₹
                      {product.oldPrice -
                        product.price}
                    </div>

                    <button
                      className="add-cart"
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
              <h3>
                😔 No products found
              </h3>

              <p>
                Try searching for another product.
              </p>
            </div>

          )}

        </div>

      </section>

      {/* ================= COUPON ================= */}

      <section className="coupon-section">

        <div className="coupon-icon">
          🎟️
        </div>

        <div>

          <span>
            EXTRA SAVINGS
          </span>

          <h2>
            Get 10% OFF Your First Order
          </h2>

          <p>
            Use this coupon during checkout and save
            more on your little one's favourites.
          </p>

        </div>

        <div className="coupon-code">

          <strong>
            BABY10
          </strong>

          <button onClick={copyCoupon}>
            Copy Code
          </button>

          {couponMessage && (
            <small>
              {couponMessage}
            </small>
          )}

        </div>

      </section>

      {/* ================= FLASH DEAL ================= */}

      <section className="flash-section">

        <div>

          <span className="flash-label">
            ⚡ FLASH DEAL
          </span>

          <h2>
            Hurry! Special Baby Deals
            <br />
            Ending Soon
          </h2>

          <p>
            Don't miss out on these adorable products
            at special prices.
          </p>

          <a
            href="#offers-products"
            className="flash-btn"
          >
            Shop Flash Deals →
          </a>

        </div>

        <div className="countdown">

          <div>
            <strong>
              {String(timeLeft.hours).padStart(2, "0")}
            </strong>
            <span>
              Hours
            </span>
          </div>

          <div>
            <strong>
              {String(timeLeft.minutes).padStart(2, "0")}
            </strong>
            <span>
              Minutes
            </span>
          </div>

          <div>
            <strong>
              {String(timeLeft.seconds).padStart(2, "0")}
            </strong>
            <span>
              Seconds
            </span>
          </div>

        </div>

      </section>

      {/* ================= BENEFITS ================= */}

      <section className="benefits">

        <div>
          <div>🚚</div>
          <h3>
            Free Shipping
          </h3>
          <p>
            On orders above ₹499
          </p>
        </div>

        <div>
          <div>↩️</div>
          <h3>
            Easy Returns
          </h3>
          <p>
            7-day easy returns
          </p>
        </div>

        <div>
          <div>🔒</div>
          <h3>
            Secure Payment
          </h3>
          <p>
            100% secure checkout
          </p>
        </div>

        <div>
          <div>👶</div>
          <h3>
            Baby Friendly
          </h3>
          <p>
            Quality checked products
          </p>
        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter">

        <div>

          <span>
            STAY UPDATED
          </span>

          <h2>
            Get Cute Deals in Your Inbox 💌
          </h2>

          <p>
            Subscribe and receive special offers,
            new arrivals and parenting-friendly deals.
          </p>

        </div>

        <form
          className="newsletter-form"
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

      {/* ================= FOOTER ================= */}

      <footer className="offers-footer">

        <div>

          <Link to="/">
            <h2>
              🧸 Baby Shopper
            </h2>
          </Link>

          <p>
            Making shopping for your little ones simple,
            safe and adorable.
          </p>

        </div>

        <div>

          <h3>
            Quick Links
          </h3>

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

        </div>

        <div>

          <h3>
            Customer Care
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

        <div>

          <h3>
            Follow Us
          </h3>

          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
            <span>💬</span>
          </div>

        </div>

      </footer>

      <div className="copyright">
        © 2026 Baby Shopper. All Rights Reserved.
      </div>

    </div>
  );
}

export default Offers;