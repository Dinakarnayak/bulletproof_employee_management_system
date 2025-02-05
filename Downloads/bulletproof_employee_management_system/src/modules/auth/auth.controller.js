const express = require('express');
const { login } = require('./auth.service');
const router = express.Router();

router.post('/login', login);

module.exports = router;
