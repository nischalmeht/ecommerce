const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');
const isAuthenticated = require('../middleware/auth');

// All routes are protected with authentication
// router.use(isAuthenticated);

// Create a new task
router.post('/create-task',isAuthenticated, TaskController.createTask);

// Get all tasks for authenticated user
router.get('/get-tasks',isAuthenticated, TaskController.getTasks);

// Get a specific task by ID
router.get('/get-task/:id',isAuthenticated, TaskController.getTaskById);

// Update a task
router.put('/update-task/:id',isAuthenticated, TaskController.updateTask);

// Delete a task
router.delete('/delete-task/:id',isAuthenticated, TaskController.deleteTask);

module.exports = router;
