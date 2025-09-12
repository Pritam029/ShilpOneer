const Cart = require("../models/Cart");

// ✅ Add to cart (increments if already exists)
exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, qty = 1 } = req.body;
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [{ product: productId, quantity: qty }]
      });
      return res.json(cart);
    }

    const idx = cart.items.findIndex(i => i.product.toString() === productId);
    if (idx > -1) {
      cart.items[idx].quantity += qty;
    } else {
      cart.items.push({ product: productId, quantity: qty });
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

// ✅ Remove ONE instance (decrement, delete if zero)
exports.removeOneFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ msg: "Cart not found" });

    const idx = cart.items.findIndex(i => i.product.toString() === productId);
    if (idx === -1) return res.status(404).json({ msg: "Product not in cart" });

    cart.items[idx].quantity -= 1;
    if (cart.items[idx].quantity <= 0) {
      cart.items.splice(idx, 1);
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

// ✅ Remove ALL instances (optional “trash bin” button)
exports.removeAllOfProduct = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: productId } } },
      { new: true }
    );
    if (!cart) return res.status(404).json({ msg: "Cart not found" });
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

