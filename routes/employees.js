const express = require('express');
const router = express.Router();
const {Task, Employee} = require('../database/models');

// async handler
const ash = require('express-async-handler');

// Get All employees
router.get('/', ash(async(req, res) =>
{
    let employees = await Employee.findAll();
    res.status(200).json(employees);
}));

module.exports = router;