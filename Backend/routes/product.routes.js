const express = require("express");
const router = express.Router();
const { getAllProducts, getProductsByCategory, createProduct, deleteProduct, toggleFeaturedProduct, getRecommendedProducts, featuredProducts } = require("../controllers/productController");
const { protectRoute, adminRoute } = require("../middleware/auth");

router.get("/",protectRoute,adminRoute, getAllProducts);
router.get("/featured",featuredProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.get("/category/:category", getProductsByCategory);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);
router.get("/recommendations", getRecommendedProducts);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct)
module.exports = router;
