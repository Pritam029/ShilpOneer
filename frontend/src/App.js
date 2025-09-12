// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ChatbotWidget from "./components/ChatbotWidget";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add to Cart function
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // ✅ Remove only ONE occurrence of a product from the cart
  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => {
      const indexToRemove = prevItems.findIndex(
        (item) => item._id === product._id
      );
      if (indexToRemove === -1) return prevItems;
      const updated = [...prevItems];
      updated.splice(indexToRemove, 1);
      return updated;
    });
  };

  // ✅ Listen for chatbot add-to-cart events
  useEffect(() => {
    function onChatbotAddToCart(e) {
      const product = e && e.detail;
      if (!product || !product._id) return;
      setCartItems((prev) => [...prev, product]);
    }
    function onChatbotRemoveFromCart(e) {
      const detail = e && e.detail;
      const id = detail && detail._id;
      const nameQuery = detail && typeof detail.pname === "string" ? detail.pname.trim().toLowerCase() : "";
      setCartItems((prevItems) => {
        let indexToRemove = -1;
        if (id) {
          indexToRemove = prevItems.findIndex((item) => item && item._id === id);
        }
        if (indexToRemove === -1 && nameQuery) {
          indexToRemove = prevItems.findIndex(
            (item) => typeof item.pname === "string" && item.pname.trim().toLowerCase() === nameQuery
          );
        }
        if (indexToRemove === -1) return prevItems;
        const updated = [...prevItems];
        updated.splice(indexToRemove, 1);
        return updated;
      });
    }
    window.addEventListener("chatbot:addToCart", onChatbotAddToCart);
    window.addEventListener("chatbot:removeFromCart", onChatbotRemoveFromCart);
    return () => {
      window.removeEventListener("chatbot:addToCart", onChatbotAddToCart);
      window.removeEventListener("chatbot:removeFromCart", onChatbotRemoveFromCart);
    };
  }, []);

  return (
    <BrowserRouter>
      <ChatbotWidget />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;