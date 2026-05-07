const Task = require("../models/taskModel");

//createTask
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Task name is required" });
    }

    const task = new Task({
      title: title.trim(),
      description: description ? description.trim() : "",
      dueDate: dueDate || "",
      priority: priority || "Low",
      status: status || "Pending"
    });

    await task.save();
    res.status(201).json({ message: "Task added successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Error adding task", error });
  }
};

//get all the task
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

//update task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed, dueDate, priority, status } = req.body;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (typeof title === "string") {
      task.title = title.trim() || task.title;
    }

    if (typeof description === "string") {
      task.description = description.trim();
    }

    if (typeof completed === "boolean") {
      task.completed = completed;
    }

    if (dueDate !== undefined) task.dueDate = dueDate;
    if (priority !== undefined) task.priority = priority;
    if (status !== undefined) task.status = status;

    await task.save();
    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

// DELETE TASK 
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
};