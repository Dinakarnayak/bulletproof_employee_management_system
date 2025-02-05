const Employee = require('./employee.model');

// Add a new employee
async function addEmployee(req, res) {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);  // Return the newly created employee
  } catch (err) {
    res.status(400).send(err);
  }
}

// Get all employees
async function getEmployees(req, res) {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);  // Return all employees
  } catch (err) {
    res.status(400).send(err);
  }
}

// Get employee by ID
async function getEmployeeById(req, res) {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send('Employee not found');
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Update employee by ID
async function updateEmployee(req, res) {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) {
      return res.status(404).send('Employee not found');
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Delete employee by ID
async function deleteEmployee(req, res) {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(204).send();  // No content response on successful delete
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  addEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
