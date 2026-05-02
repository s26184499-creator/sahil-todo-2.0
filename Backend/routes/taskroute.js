const express = require("express");

// Create a new router object to handle routes
const router = express.Router();

const {createTask} = require("../controller/taskcontroller");
const {getTasks} = require("../controller/taskcontroller");
const {updateTask} = require("../controller/taskcontroller");
const {deleteTask} = require("../controller/taskcontroller");

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;