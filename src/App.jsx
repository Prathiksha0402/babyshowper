import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Shop from "./components/Shop";
import Clothing from "./components/Clothing";
import Toys from "./components/Toys";
import Feeding from "./components/Feeding";
import BabyCare from "./components/BabyCare";
import Offers from "./components/Offers";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/feeding" element={<Feeding />} />
          <Route path="/baby-care" element={<BabyCare />} />
          <Route path="/offers" element={<Offers />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;