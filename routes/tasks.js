const express = require('express');
const router = express.Router();
const {Task, Employee} = require('../database/models');

// async handler
const ash = require('express-async-handler');

// Get All tasks
router.get('/', ash(async(req, res) =>
{
    let tasks = await Task.findAll({include: [Employee]});
    res.status(200).json(tasks);
}));

module.exports = router;