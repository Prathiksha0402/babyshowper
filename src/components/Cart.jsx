import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-icon">🛒</div>

        <h1>Your Cart is Empty</h1>

        <p>
          Looks like you haven't added anything to your cart yet.
        </p>

        <button onClick={() => navigate("/shop")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <div className="cart-header">
        <div>
          <h1>My Shopping Cart 🛒</h1>
          <p>{cart.length} product(s) in your cart</p>
        </div>

        <Link to="/shop">
          ← Continue Shopping
        </Link>
      </div>

      <div className="cart-layout">

        <div className="cart-products">

          {cart.map((product) => (
            <div className="cart-item" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="cart-item-details">

                <h2>{product.name}</h2>

                <p>{product.category}</p>

                <h3>₹{product.price}</h3>

                <div className="quantity-box">

                  <button
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                  >
                    −
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="cart-item-right">

                <strong>
                  ₹{product.price * product.quantity}
                </strong>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>FREE</strong>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout →
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;