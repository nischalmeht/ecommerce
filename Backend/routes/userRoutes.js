const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");

// Public routes
router.post("/register", register);
router.post("/login", login);


module.exports = router; 