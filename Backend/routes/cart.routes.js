const express = require("express");
const router = express();
const { addToCart, removeAllFromCart, updateQuantity } = require("../controllers/cartController");

router.post("/add-to-cart/:id", addToCart);
router.post("/remove-all-from-cart", removeAllFromCart);
router.post("/update-quantity/:id", updateQuantity);

module.exports = router;
