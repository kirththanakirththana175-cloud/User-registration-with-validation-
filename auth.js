const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

// ✅ REGISTER
router.post('/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'Email already registered' });

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: 'Registered successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// ✅ LOGIN
router.post('/login',
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').notEmpty().withMessage('Password required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'User not found' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

      res.status(200).json({ message: `Welcome, ${user.name}!` });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// ✅ FORGOT PASSWORD (Simulated)
router.post('/forgot',
  [body('email').isEmail().withMessage('Enter a valid email')],
  async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Email not registered' });
      res.status(200).json({ message: 'Password reset link sent (simulation)' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

module.exports = router;