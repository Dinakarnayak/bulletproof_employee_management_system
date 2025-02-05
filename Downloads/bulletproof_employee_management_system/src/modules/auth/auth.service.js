const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./auth.model');
const SECRET_KEY = process.env.SECRET_KEY;

async function login(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('User not found');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid credentials');

  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
}

module.exports = { login };
