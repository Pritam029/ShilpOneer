import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { useEffect, useState } from "react";
import { Formik } from "formik";

function ProductManager() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [pimage, setPimage] = useState(null);

  // Fetch all products
  const getProducts = async () => {
    try {
      const resp = await fetch("http://localhost:2000/product/sel");
      const data = await resp.json();
      setProducts(data);
    } catch (err) {
      console.error("❌ Error fetching products:", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Submit handler
  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    if (!pimage) {
      alert("Please select a product image");
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("pname", values.pname);
    formData.append("pprice", values.pprice);
    formData.append("pdetails", values.pdetails);
    formData.append("pimage", pimage);

    try {
      const res = await fetch("http://localhost:2000/product/add", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Product added successfully!");
        resetForm();
        setPimage(null);
        setShowForm(false);
        getProducts();
      } else {
        alert(`❌ Failed to add product: ${result.msg}`);
      }
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("An error occurred while submitting the form.");
    }

    setSubmitting(false);
  };

  // Delete handler
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`http://localhost:2000/product/del/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log("🗑️ Deleted:", data);
      getProducts();
    } catch (err) {
      console.error("❌ Error deleting product:", err);
    }
  };

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Top />
            <div className="container-fluid">

              {/* Page Heading + Toggle */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 text-gray-800">
                  {showForm ? "➕ Add Product" : "📦 Product List"}
                </h1>
                <button
                  className={`btn ${showForm ? "btn-secondary" : "btn-success"}`}
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm ? "⬅ Back to List" : "➕ Add Product"}
                </button>
              </div>

              {/* Form Section */}
              {showForm ? (
                <div className="card shadow-sm p-4">
                  <Formik
                    initialValues={{ pname: "", pprice: "", pdetails: "" }}
                    onSubmit={handleFormSubmit}
                  >
                    {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="form-group">
                          <label>Product Name</label>
                          <input
                            type="text"
                            name="pname"
                            className="form-control"
                            value={values.pname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter product name"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Product Price (₹)</label>
                          <input
                            type="number"
                            name="pprice"
                            className="form-control"
                            value={values.pprice}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter price"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Product Image</label>
                          <input
                            type="file"
                            name="pimage"
                            className="form-control"
                            accept="image/*"
                            onChange={(e) => setPimage(e.currentTarget.files[0])}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Product Details</label>
                          <textarea
                            name="pdetails"
                            className="form-control"
                            rows="4"
                            value={values.pdetails}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter product details"
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              ) : (
                /* Product List Section */
                <div className="card shadow-sm p-3">
                  <h5 className="mb-3">Available Products</h5>
                  <table className="table table-bordered table-hover text-center">
                    <thead className="thead-dark">
                      <tr>
                        <th>Product Name</th>
                        <th>Price (₹)</th>
                        <th>Image</th>
                        <th>Details</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.length > 0 ? (
                        products.map((p) => (
                          <tr key={p._id}>
                            <td>{p.pname}</td>
                            <td className="text-success font-weight-bold">₹{p.pprice}</td>
                            <td>
                              <img
                                src={`http://localhost:2000/product_img/${p.pimage}`}
                                alt={p.pname}
                                className="img-thumbnail"
                                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                              />
                            </td>
                            <td>{p.pdetails}</td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteProduct(p._id)}
                              >
                                <i className="fas fa-trash-alt"></i> Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center text-muted">
                            No products available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* Scroll to Top */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </>
  );
}

export default ProductManager;
