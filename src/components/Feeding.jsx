import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Feeding.css";

function Feeding() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const categories = [
    {
      icon: "🍼",
      title: "Baby Bottles",
      subtitle: "Gentle feeding essentials",
      filter: "Baby Bottles",
    },
    {
      icon: "🥣",
      title: "Bowls & Plates",
      subtitle: "Perfect little meals",
      filter: "Bowls & Plates",
    },
    {
      icon: "🥄",
      title: "Baby Spoons",
      subtitle: "Tiny hands, tiny spoons",
      filter: "Baby Spoons",
    },
    {
      icon: "💧",
      title: "Sippers",
      subtitle: "Easy drinking for babies",
      filter: "Sippers",
    },
    {
      icon: "🧷",
      title: "Baby Bibs",
      subtitle: "Keep little outfits clean",
      filter: "Baby Bibs",
    },
    {
      icon: "🍱",
      title: "Food Storage",
      subtitle: "Store baby food safely",
      filter: "Food Storage",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Soft Silicone Baby Bottle",
      category: "Baby Bottles",
      age: "0-6 Months",
      price: 449,
      oldPrice: 599,
      rating: "4.9",
      reviews: 186,
      image:
        "https://images.unsplash.com/photo-1584839404042-8bc9c9a2c3d7?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Newborn Feeding Bottle",
      category: "Baby Bottles",
      age: "0-3 Months",
      price: 399,
      oldPrice: 549,
      rating: "4.8",
      reviews: 142,
      image:
        "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e1?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Cute Silicone Feeding Bowl",
      category: "Bowls & Plates",
      age: "6+ Months",
      price: 349,
      oldPrice: 499,
      rating: "4.9",
      reviews: 118,
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,
      name: "Tiny Baby Feeding Spoon Set",
      category: "Baby Spoons",
      age: "6+ Months",
      price: 249,
      oldPrice: 349,
      rating: "4.8",
      reviews: 204,
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 5,
      name: "Easy Grip Baby Sipper",
      category: "Sippers",
      age: "6+ Months",
      price: 299,
      oldPrice: 399,
      rating: "4.7",
      reviews: 96,
      image:
        "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 6,
      name: "Cute Cotton Baby Bib",
      category: "Baby Bibs",
      age: "0-12 Months",
      price: 179,
      oldPrice: 249,
      rating: "4.9",
      reviews: 165,
      image:
        "https://images.unsplash.com/photo-1544126592-807daa215a2d?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 7,
      name: "Little Bear Silicone Plate",
      category: "Bowls & Plates",
      age: "6+ Months",
      price: 399,
      oldPrice: 549,
      rating: "4.8",
      reviews: 87,
      image:
        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 8,
      name: "Baby Feeding Starter Set",
      category: "Feeding Sets",
      age: "6+ Months",
      price: 699,
      oldPrice: 899,
      rating: "4.9",
      reviews: 134,
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 9,
      name: "Mini Silicone Baby Spoon",
      category: "Baby Spoons",
      age: "4+ Months",
      price: 199,
      oldPrice: 299,
      rating: "4.8",
      reviews: 155,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 10,
      name: "Anti-Spill Baby Sipper",
      category: "Sippers",
      age: "6-12 Months",
      price: 329,
      oldPrice: 449,
      rating: "4.7",
      reviews: 76,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 11,
      name: "Soft Silicone Bib",
      category: "Baby Bibs",
      age: "6-24 Months",
      price: 229,
      oldPrice: 329,
      rating: "4.9",
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 12,
      name: "Baby Food Storage Cups",
      category: "Food Storage",
      age: "6+ Months",
      price: 299,
      oldPrice: 399,
      rating: "4.8",
      reviews: 93,
      image:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=700&q=80",
    },
  ];

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // ADD TO CART
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

  // WISHLIST
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

  // NEWSLETTER
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

  // CATEGORY CLICK
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    document
      .getElementById("feeding-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="feeding-page">

      {/* TOP BAR */}
      <div className="feeding-topbar">
        🍼 Free Shipping on Baby Feeding Essentials Above ₹499
      </div>

      {/* HEADER */}
      <header className="feeding-header">

        <Link to="/" className="feeding-logo">
          <div className="feeding-logo-icon">
            🍼
          </div>

          <div>
            <h2>Baby Shopper</h2>
            <p>Little essentials, big care</p>
          </div>
        </Link>

        <nav className="feeding-navigation">

          <Link to="/">Home</Link>
          <Link to="/clothing">Clothing</Link>
          <Link to="/toys">Toys</Link>

          <Link
            to="/feeding"
            className="active"
          >
            Feeding
          </Link>

          <Link to="/baby-care">
            Baby Care
          </Link>

          <Link to="/offers">
            Offers
          </Link>

        </nav>

        <div className="feeding-actions">

          <button
            aria-label="Search"
            onClick={() =>
              document
                .getElementById("feeding-products")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            ⌕
          </button>

          <button
            aria-label="Wishlist"
            onClick={() => alert(
              `${wishlist.length} item(s) in wishlist`
            )}
          >
            ♡ {wishlist.length}
          </button>

          <button
            aria-label="Cart"
            onClick={() => alert(
              `${cart.length} product(s) in cart`
            )}
          >
            🛒 {cart.length}
          </button>

        </div>

      </header>

      {/* HERO */}
      <section className="feeding-hero">

        <div className="feeding-hero-content">

          <span className="feeding-hero-label">
            LITTLE FEEDING COLLECTION
          </span>

          <h1>
            Happy Tummies,
            <br />
            Happy Babies
          </h1>

          <p>
            Discover thoughtfully selected feeding essentials
            designed to make every little mealtime easier,
            cleaner and more comfortable.
          </p>

          <div className="feeding-hero-buttons">

            <button
              className="feeding-primary-btn"
              onClick={() =>
                document
                  .getElementById("feeding-products")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Shop Feeding
            </button>

            <button
              className="feeding-secondary-btn"
              onClick={() =>
                handleCategoryClick("Baby Bottles")
              }
            >
              Explore Baby Bottles
            </button>

          </div>

          <div className="feeding-hero-points">

            <span>✓ Baby Friendly</span>
            <span>✓ Easy to Clean</span>
            <span>✓ Everyday Essentials</span>

          </div>

        </div>

        <div className="feeding-hero-image">

          <img
            src="https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?auto=format&fit=crop&w=1000&q=80"
            alt="Baby feeding essentials"
          />

          <div className="feeding-floating-card">

            <span>🍼</span>

            <div>
              <strong>Little Mealtimes</strong>

              <small>
                Made for growing babies
              </small>
            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="feeding-category-section">

        <div className="feeding-section-title">

          <span>SHOP BY CATEGORY</span>

          <h2>Everything For Mealtime</h2>

          <p>
            Simple, useful and adorable feeding
            essentials for your little one.
          </p>

        </div>

        <div className="feeding-category-grid">

          {categories.map((category) => (

            <div
              className="feeding-category-card"
              key={category.title}
            >

              <div className="feeding-category-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <p>{category.subtitle}</p>

              <button
                onClick={() =>
                  handleCategoryClick(category.filter)
                }
              >
                Explore →
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* PRODUCTS */}
      <section
        className="feeding-products-section"
        id="feeding-products"
      >

        <div className="feeding-products-heading">

          <div>

            <span>
              LITTLE MEALTIME COLLECTION
            </span>

            <h2>Feeding Favourites</h2>

            <p>
              Showing {filteredProducts.length} products
            </p>

          </div>

          <button
            className="feeding-view-all"
            onClick={() => setSelectedCategory("All")}
          >
            View All →
          </button>

        </div>

        {/* SEARCH */}
        <div className="feeding-search">

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search feeding products..."
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
        <div className="feeding-filter">

          {[
            "All",
            "Baby Bottles",
            "Bowls & Plates",
            "Baby Spoons",
            "Sippers",
            "Baby Bibs",
            "Food Storage",
          ].map((filter) => (

            <button
              key={filter}
              className={
                selectedCategory === filter
                  ? "feeding-filter-active"
                  : ""
              }
              onClick={() =>
                setSelectedCategory(filter)
              }
            >
              {filter}
            </button>

          ))}

        </div>

        {/* PRODUCT GRID */}
        <div className="feeding-product-grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => {

              const isWishlisted = wishlist.some(
                (item) => item.id === product.id
              );

              const discount = Math.round(
                ((product.oldPrice - product.price) /
                  product.oldPrice) *
                  100
              );

              return (
                <div
                  className="feeding-product-card"
                  key={product.id}
                >

                  <div className="feeding-product-image">

                    <span className="feeding-new-badge">
                      NEW
                    </span>

                    <button
                      className="feeding-wishlist"
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

                    <button
                      className="feeding-add-cart"
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      Add to Cart 🛒
                    </button>

                  </div>

                  <div className="feeding-product-info">

                    <span className="feeding-product-category">
                      {product.category}
                    </span>

                    <h3>{product.name}</h3>

                    <p className="feeding-age">
                      👶 {product.age}
                    </p>

                    <div className="feeding-rating">

                      <span>★</span>

                      <strong>
                        {product.rating}
                      </strong>

                      <small>
                        ({product.reviews})
                      </small>

                    </div>

                    <div className="feeding-price">

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

            <div className="no-products">
              <h3>😔 No products found</h3>

              <p>
                Try another product name or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                Show All Products
              </button>
            </div>

          )}

        </div>

      </section>

      {/* AGE SECTION */}
      <section className="feeding-age-section">

        <div className="feeding-age-content">

          <span>SHOP BY STAGE</span>

          <h2>
            Feeding Essentials
            <br />
            For Every Stage
          </h2>

          <p>
            Choose simple feeding products according
            to your baby's growing needs.
          </p>

        </div>

        <div className="feeding-age-grid">

          <div className="feeding-age-card">
            <div>🍼</div>
            <h3>0–3 Months</h3>
            <p>Newborn Bottle Essentials</p>

            <button
              onClick={() =>
                setSearch("Bottle")
              }
            >
              Explore →
            </button>
          </div>

          <div className="feeding-age-card">
            <div>🥄</div>
            <h3>4–6 Months</h3>
            <p>First Feeding Essentials</p>

            <button
              onClick={() =>
                setSelectedCategory("Baby Spoons")
              }
            >
              Explore →
            </button>
          </div>

          <div className="feeding-age-card">
            <div>🥣</div>
            <h3>6–12 Months</h3>
            <p>Little Mealtime Sets</p>

            <button
              onClick={() =>
                setSelectedCategory("Bowls & Plates")
              }
            >
              Explore →
            </button>
          </div>

        </div>

      </section>

      {/* WHY SECTION */}
      <section className="feeding-features-section">

        <div className="feeding-section-title">

          <span>MADE FOR LITTLE MEALTIMES</span>

          <h2>
            Why Parents Love Our Feeding Collection
          </h2>

        </div>

        <div className="feeding-features-grid">

          <div className="feeding-feature">
            <div className="feeding-feature-icon">
              🍼
            </div>
            <h3>Easy Feeding</h3>
            <p>
              Practical essentials designed
              to make feeding easier.
            </p>
          </div>

          <div className="feeding-feature">
            <div className="feeding-feature-icon">
              🌿
            </div>
            <h3>Baby Friendly</h3>
            <p>
              Carefully selected products
              for little ones.
            </p>
          </div>

          <div className="feeding-feature">
            <div className="feeding-feature-icon">
              🧼
            </div>
            <h3>Easy to Clean</h3>
            <p>
              Simple feeding products made
              for everyday use.
            </p>
          </div>

          <div className="feeding-feature">
            <div className="feeding-feature-icon">
              💕
            </div>
            <h3>Parent Approved</h3>
            <p>
              Useful essentials for everyday
              baby mealtimes.
            </p>
          </div>

        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="feeding-newsletter">

        <div>

          <span>LITTLE UPDATES</span>

          <h2>
            Never Miss a Mealtime Favourite 💕
          </h2>

          <p>
            Get new feeding essentials,
            offers and baby shopping updates.
          </p>

        </div>

        <form
          className="feeding-newsletter-form"
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

      {/* FOOTER */}
      <footer className="feeding-footer">

        <div className="feeding-footer-about">

          <h2>🧸 Baby Shopper</h2>

          <p>
            Cute, useful and thoughtful essentials
            for every little stage.
          </p>

        </div>

        <div>

          <h4>Shop</h4>

          <Link to="/clothing">Clothing</Link>
          <Link to="/toys">Toys</Link>
          <Link to="/feeding">Feeding</Link>
          <Link to="/baby-care">Baby Care</Link>

        </div>

        <div>

          <h4>Feeding</h4>

          <button
            onClick={() =>
              handleCategoryClick("Baby Bottles")
            }
          >
            Baby Bottles
          </button>

          <button
            onClick={() =>
              handleCategoryClick("Bowls & Plates")
            }
          >
            Bowls & Plates
          </button>

          <button
            onClick={() =>
              handleCategoryClick("Baby Spoons")
            }
          >
            Baby Spoons
          </button>

          <button
            onClick={() =>
              handleCategoryClick("Sippers")
            }
          >
            Sippers
          </button>

        </div>

        <div>

          <h4>Help</h4>

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

      <div className="feeding-copyright">
        © 2026 Baby Shopper. Made with 💕 for little ones.
      </div>

    </div>
  );
}

export default Feeding;