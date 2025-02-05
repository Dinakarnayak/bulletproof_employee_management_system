const express = require('express');
const { addEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require('./employee.service');
const router = express.Router();

// Register routes
router.post('/', addEmployee);          // Add employee
router.get('/', getEmployees);          // Get all employees
router.get('/:id', getEmployeeById);    // Get employee by ID
router.put('/:id', updateEmployee);     // Update employee by ID
router.delete('/:id', deleteEmployee);  // Delete employee by ID

module.exports = router;  // Export the router for use in the server
