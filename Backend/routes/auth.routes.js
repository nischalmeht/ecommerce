const express = require("express");
const router = express();
const { signup, login, logout, refreshToken,getProfile } = require("../controllers/userController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile",getProfile)
module.exports = router;
