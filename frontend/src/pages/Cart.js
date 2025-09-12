import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cartItems, handleRemoveFromCart }) {
  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.pprice, 0);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">
          <Link
            className="navbar-brand font-weight-bold text-warning"
            to="/"
            style={{ fontSize: "1.5rem" }}
          >
            <i className="fas fa-shopping-bag"></i> ShilpOneer
          </Link>

          {/* Right Menu */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              {/* <Link className="nav-link" to="#">
                <i className="fas fa-user"></i> Account
              </Link> */}
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
                <span className="badge badge-warning ml-1">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Cart Section */}
      <div className="container my-5">
        <h2 className="mb-4 text-center font-weight-bold">
          <i className="fas fa-shopping-cart text-warning"></i> Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h5 className="text-muted">
              <i className="fas fa-exclamation-circle"></i> Your cart is empty
            </h5>
            <Link to="/" className="btn btn-warning mt-3 font-weight-bold">
              <i className="fas fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-8">
              {cartItems.map((item, index) => (
                <div
                  className="card mb-3 shadow-sm border-0 rounded-lg"
                  key={index}
                >
                  <div className="row no-gutters align-items-center">
                    {/* Product Image */}
                    <div className="col-md-3">
                      <img
                        src={`http://localhost:2000/product_img/${item.pimage}`}
                        className="card-img"
                        alt={item.pname}
                        style={{
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "0.5rem",
                        }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="col-md-6">
                      <div className="card-body">
                        <h6 className="card-title font-weight-bold">
                          {item.pname}
                        </h6>
                        <p className="card-text text-muted small">
                          {item.pdetails}
                        </p>
                        <h5 className="text-danger font-weight-bold">
                          ₹{item.pprice}
                        </h5>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <div className="col-md-3 text-center">
                      <button
                        className="btn btn-outline-danger btn-sm font-weight-bold"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <i className="fas fa-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0 rounded-lg">
                <div className="card-body">
                  <h5 className="font-weight-bold">Cart Summary</h5>
                  <hr />
                  <p className="d-flex justify-content-between">
                    <span>Total Items:</span>
                    <span className="font-weight-bold">{cartItems.length}</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span>Total Price:</span>
                    <span className="text-danger font-weight-bold">
                      ₹{totalPrice}
                    </span>
                  </p>
                  <button className="btn btn-warning btn-block font-weight-bold">
                    <i className="fas fa-credit-card"></i> Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">
            © {new Date().getFullYear()}{" "}
            <span className="text-warning">ShilpOneer</span>. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
