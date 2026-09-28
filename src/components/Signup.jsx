import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const user = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    };

    // Demo storage
    localStorage.setItem("vitaUser", JSON.stringify(user));

    alert("Account created successfully! 🎉");

    navigate("/login");
  };

  return (
    <div className="signup-page">

      <div className="signup-card">

        <div className="signup-logo">
          🧸
        </div>

        <h1>Create Account</h1>

        <p className="signup-subtitle">
          Join VITA Baby Shop today
        </p>

        {error && (
          <div className="signup-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <label className="terms">
            <input type="checkbox" required />
            <span>
              I agree to the Terms & Conditions
            </span>
          </label>

          <button type="submit" className="signup-btn">
            Create Account
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          className="google-btn"
          onClick={() => alert("Google signup will be connected later.")}
        >
          <span>G</span>
          Sign up with Google
        </button>

        <p className="auth-switch">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Signup;