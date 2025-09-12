const express = require("express");
const router = express.Router();

const productController = require("../controller/product_controller");

// Add new product (POST /product/add)
router.post("/add", productController.addproduct);

// Get all products (GET /product/sel)
router.get("/sel", productController.selproduct);

// Delete a product by ID (DELETE /product/del/:id)
router.delete("/del/:id", productController.delproduct);

// (Optional) Add edit/update route if needed in future
// router.put("/edit/:id", productController.editproduct);

module.exports = router;
