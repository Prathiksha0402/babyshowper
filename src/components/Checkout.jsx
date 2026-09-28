import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/shop");
      return;
    }

    console.log("Customer Details:", form);
    console.log("Products:", cart);
    console.log("Total:", cartTotal);

    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h1>🛒 Your Cart is Empty</h1>
        <p>Please add some baby products before checkout.</p>

        <button onClick={() => navigate("/shop")}>
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <div className="checkout-header">
        <h1>Checkout 🛍️</h1>
        <p>Complete your details to place your order</p>
      </div>

      <div className="checkout-layout">

        {/* CUSTOMER DETAILS */}

        <div className="checkout-form-card">

          <h2>👤 Customer Details</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Delivery Address</label>

              <textarea
                name="address"
                placeholder="Enter your complete address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>City</label>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Pincode</label>

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order →
            </button>

          </form>

        </div>

        {/* ORDER SUMMARY */}

        <div className="checkout-summary">

          <h2>🛒 Order Summary</h2>

          {cart.map((product) => (
            <div
              className="checkout-product"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <div>
                <h3>{product.name}</h3>

                <p>
                  ₹{product.price} × {product.quantity}
                </p>
              </div>

              <strong>
                ₹{product.price * product.quantity}
              </strong>

            </div>
          ))}

          <hr />

          <div className="checkout-total">
            <span>Total</span>

            <strong>
              ₹{cartTotal}
            </strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;