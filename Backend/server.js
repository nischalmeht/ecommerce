const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./lib/db");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, function() {
	console.log("Server is running on http://localhost:" + PORT);
	connectDB();
});