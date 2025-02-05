const connectDB = require('./database');  // Correct import
const cron = require('./cron');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Load cron jobs for periodic tasks
cron();

// Set up routes
app.get('/', (req, res) => res.send('Employee Management System'));

// Export app to be used in app.js
module.exports = app;
