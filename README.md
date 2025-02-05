# Employee Management System

An Employee Management System built with Node.js, Express, MongoDB, JWT, and cron jobs.

## Features
- CRUD operations for employees.
- Authentication with JWT.
- Cron jobs for periodic tasks.
- Pub/Sub architecture for event-driven communication.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/employee-management-system.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   MONGO_URI=mongodb://localhost:27017/ems
   SECRET_KEY=your_secret_key
   PORT=3000
   ```

4. Start the application:
   ```
   npm start
   ```

## Routes

- `POST /api/auth/login`: Log in and get a JWT token.
- `GET /api/employees`: Get all employees.
- `POST /api/employees`: Add a new employee.
- `GET /api/employees/:id`: Get employee by ID.
- `PUT /api/employees/:id`: Update employee information.
- `DELETE /api/employees/:id`: Delete an employee.

## Cron Jobs

The application runs scheduled tasks periodically (e.g., cleanup tasks) at the configured schedule in `.env`.
