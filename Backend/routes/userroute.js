// Import the Express framework
const express = require("express");

// Create a new router object to handle routes
const router = express.Router();

// Import the registerUser function from usercontroller file
// (This function contains the logic for user registration)
const { registerUser } = require("../controller/usercontroller");
const { loginUser } = require("../controller/usercontroller");// (This function contains the logic for user login)



// Create a POST route for "/register"
// When a client sends a POST request to /register,
// the registerUser function will run
router.post("/register", registerUser);
router.post("/login", loginUser);// Create a POST route for "/login"



// Export the router so it can be used in main app.js/server.js file
module.exports = router;