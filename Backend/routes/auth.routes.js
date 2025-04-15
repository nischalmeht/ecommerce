const express = require("express");
const router = express();
const { signup, login, logout, refreshToken } = require("../controllers/userController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);

module.exports = router;
