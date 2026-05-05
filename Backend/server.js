// Import Express framework
const express = require("express");


// Create Express application FIRST 
const app = express();


// Import other packages
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


// Import routes
const taskRoutes = require("./routes/taskroute");
const userRoutes = require("./routes/userroute");


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("../Frontend"));


// Routes (AFTER app is created) 
app.use("/api", taskRoutes);
app.use("/api", userRoutes);


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/users")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});