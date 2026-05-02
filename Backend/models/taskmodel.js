const mongoose = require("mongoose");

// Define a schema for Task
const taskSchema = new mongoose.Schema({
title: {
type: String,
required: true
},
description: {
type: String,
default: "" 
},
dueDate: String,
priority: String,
status: String,
completed: {
type: Boolean,
default: false
}
});




// Create a model from the schema
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;