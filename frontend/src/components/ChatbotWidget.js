import React, { useState } from "react";

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div style={{ position: "fixed", right: "20px", bottom: "20px", zIndex: 1000 }}>
      {isOpen && (
        <div
          style={{
            width: "320px",
            maxWidth: "90vw",
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            overflow: "hidden",
            marginBottom: "12px"
          }}
       >
          <div
            style={{
              background: "#343a40",
              color: "#ffc107",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
         >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-robot"></i>
              <strong>ShilpOneer Assistant</strong>
            </div>
            <button
              onClick={toggleOpen}
              aria-label="Close chatbot"
              style={{ background: "transparent", border: 0, color: "#fff", cursor: "pointer" }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div style={{ padding: "12px 14px" }}>
            <p style={{ marginBottom: "10px", color: "#555" }}>
              Hi! I can help you with:
            </p>
            <ul style={{ paddingLeft: "18px", marginBottom: "12px" }}>
              <li>Browsing products and categories</li>
              <li>Searching for items</li>
              <li>Adding/removing items from your cart</li>
              <li>Understanding delivery and returns</li>
              <li>Checkout and payment queries</li>
              <li>Contacting support</li>
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <button className="btn btn-sm btn-warning" onClick={() => alert("Try the search bar at the top!")}>How to search?</button>
              <button className="btn btn-sm btn-outline-dark" onClick={() => alert("Go to the cart page to review items.")}>View my cart</button>
              <button className="btn btn-sm btn-outline-dark" onClick={() => alert("Proceed to checkout from the cart page.")}>Checkout help</button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={toggleOpen}
        className="btn btn-warning shadow"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px"
        }}
        aria-label="Open chatbot"
      >
        <i className="fas fa-comment-dots"></i>
      </button>
    </div>
  );
}

export default ChatbotWidget;
