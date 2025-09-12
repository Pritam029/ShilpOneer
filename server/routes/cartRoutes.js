const express = require("express");
const router = express.Router();
const { addToCart, removeOneFromCart, removeAllOfProduct } = require("../controllers/cartController");

// Add to cart
router.post("/add", addToCart);

// Remove ONE item (decrement qty)
router.patch("/remove-one", removeOneFromCart);

// Remove ALL instances of a product
router.delete("/remove-all", removeAllOfProduct);

module.exports = router;
