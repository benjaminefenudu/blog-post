// Import Dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Other imports
const database = require("./config/database");
const blogPostRoute = require("./src/api/routes/blogPost");

// Fetch database, app listen
const app = express();
database.connectDatabase(app);

// Use middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Set landing page
app.get("/", (req, res) => {
  res.redirect("/api/post");
});

// Set base routes
app.use("/api/post", blogPostRoute);
