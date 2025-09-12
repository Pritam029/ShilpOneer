import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ handleAddToCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [toastMessage, setToastMessage] = useState(""); // ✅ Toast message state

  // Fetch products from backend API
  useEffect(() => {
    fetch("http://localhost:2000/product/sel")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.pname.toLowerCase().includes(search.toLowerCase())
  );

  // Function to handle adding to cart and showing toast
  const handleAdd = (product) => {
    handleAddToCart(product); // add to cart
    setToastMessage(`${product.pname} added to cart successfully!`); // set toast message
    setTimeout(() => setToastMessage(""), 3000); // hide after 3 sec
  };

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

          {/* Search Bar */}
          <form className="form-inline mx-auto w-75 d-none d-md-flex">
            <input
              className="form-control flex-grow-1"
              type="search"
              placeholder="Search for products, brands and more..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ borderRadius: "0" }}
            />
            <button
              className="btn btn-warning"
              type="button"
              style={{ borderRadius: "0" }}
            >
              <i className="fas fa-search"></i>
            </button>
            <Link
              to="/cart"
              className="btn btn-outline-light ml-3"
              style={{ marginLeft: "12px", whiteSpace: "nowrap" }}
            >
              <i className="fas fa-shopping-cart"></i> Cart
            </Link>
            <Link to="/about" className="btn btn-outline-light ml-3" style={{ marginLeft: "12px", whiteSpace: "nowrap" }}>
              About Us
            </Link>
            <a
              href="http://localhost:3001/"
              className="btn btn-outline-light ml-3"
              style={{ marginLeft: "12px", whiteSpace: "nowrap" }}
            >
              Admin
            </a>
          </form>

          {/* Right Menu */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              {/* <Link className="nav-link" to="#">
                <i className="fas fa-user"></i> Account
              </Link> */}
            </li>
            
          </ul>
        </div>
      </nav>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          className="toast align-items-center text-white bg-success border-0 position-fixed bottom-0 end-0 m-3 show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ zIndex: 9999 }}
        >
          <div className="d-flex">
            <div className="toast-body">{toastMessage}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setToastMessage("")}
            ></button>
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <div
        className="jumbotron jumbotron-fluid text-white d-flex align-items-center"
        style={{
          background: "linear-gradient(to right, #ff9f43, #ff6f61)",
          height: "220px",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 font-weight-bold">Welcome to ShilpOneer</h1>
          <p className="lead">Where quality meets care.</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container my-5">
        <h2 className="mb-4 text-center font-weight-bold">
          <i className="fas fa-box-open text-warning"></i> Our Products
        </h2>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3 col-sm-6 mb-4" key={product._id}>
              <div className="card h-100 border-0 shadow-sm rounded-lg hover-shadow">
                {/* Product Image */}
                <img
                  src={`http://localhost:2000/product_img/${product.pimage}`}
                  className="card-img-top"
                  alt={product.pname}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />

                {/* Product Info */}
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-dark font-weight-bold">
                    {product.pname}
                  </h6>
                  <p className="card-text text-muted small">{product.pdetails}</p>
                  <h5 className="mt-auto text-danger font-weight-bold">
                    ₹{product.pprice}
                  </h5>
                </div>

                {/* Add to Cart Button */}
                <div className="card-footer bg-white text-center">
                  <button
                    className="btn btn-warning btn-block font-weight-bold"
                    onClick={() => handleAdd(product)}
                  >
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* If no products */}
          {filteredProducts.length === 0 && (
            <div className="col-12 text-center py-5">
              <h5 className="text-muted">
                <i className="fas fa-exclamation-circle"></i> No products found
              </h5>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">
            © {new Date().getFullYear()}{" "}
            <span className="text-warning">ShilpOneer</span>. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
