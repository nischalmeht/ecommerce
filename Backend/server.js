const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./lib/db");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
const productRoutes = require("./routes/product.routes");
const couponRoutes = require("./routes/coupen.routes");
// const graphqlHttp = require('express-graphql');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema');

const graphqlResolver = require('./graphql/resolvers');
const cors = require("cors");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
	origin: 'http://localhost:5173',  // your frontend URL
	credentials: true,                 // if sending cookies or auth headers
  }));
app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request
app.use(cookieParser());
// app.use('/graphql', graphqlHTTP({
//     schema: graphqlSchema,
//     rootValue: graphqlResolver,
//     graphiql: true, // Enable GraphiQL UI for testing
//     customFormatErrorFn: function(error) {
//       if(!error.originalError) {
//           return error;
//       }
//       return {
//           message: error.message,
//           data: error.originalError.data || null,
//           status: error.originalError.statusCode || 500,
//           locations: error.locations,
//           path: error.path
//       };
//   }
// }));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupon", couponRoutes);
app.listen(PORT, function() {
	console.log("Server is running on http://localhost:" + PORT);
	connectDB();
});