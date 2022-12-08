const express = require('express');
const router = express.Router();

// subrouters
const tasksRouter = require('./tasks');
const employeeRouter = require('./employees');

// mount subrouter 
router.use('/tasks', tasksRouter);
router.use('/employees', employeeRouter);

module.exports = router;