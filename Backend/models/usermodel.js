// Import mongoose package (used to connect and work with MongoDB)
const mongoose = require("mongoose");

// Create a schema (structure of the document inside MongoDB collection)
const userSchema = new mongoose.Schema({

// Define 'name' field
name: { 
type: String, // Data type must be String
required: true // This field is mandatory
},

// Define 'password' field
password: { 
type: String, // Data type must be String
required: true // Password must be provided
},

// Define 'email' field
email: { 
type: String, // Data type must be String
required: true // Email is mandatory
}

});

// Export the model
// "User" = collection name (MongoDB will create "users" collection automatically)
// userSchema = structure of documents inside the collection
module.exports = mongoose.model("User", userSchema);