const express = require("express");
const router = express.Router(); // Correct usage here
const { addToCart, removeAllFromCart, updateQuantity, getCartProducts } = require("../controllers/cartController");
const { protectRoute } = require("../middleware/auth");

router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.get("/", protectRoute, getCartProducts);
router.put("/:id", protectRoute, updateQuantity);

module.exports = router;
