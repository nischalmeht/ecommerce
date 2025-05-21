const express = require("express");
const router = express.Router();
const { validateCoupon, getCoupon } = require("../controllers/couponController");
const { protectRoute } = require("../middleware/auth");

router.post("/validate-coupon",protectRoute,validateCoupon);
router.get("/get-coupon", protectRoute,getCoupon);

module.exports = router;
