import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Import jsonwebtoken
import User from '../models/User.js';

const generateToken = (user) => {
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15h',
  });
  console.log('Generated Token:', token); // Log the generated token
  return token;
};


export async function createAdmin(req, res) {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required: username, email, and password.' });
    }

    // Check if an admin already exists
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      return res.status(400).json({ message: 'An admin already exists. Only one admin user is allowed.' });
    }

    // Check if the username or email is already taken
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already in use.' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role: 'admin',
    });

    // Save the user
    await user.save();

    // Optionally, generate a token for the new admin user
    const token = generateToken(user);

    res.status(201).json({ message: 'Admin user created successfully', token });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
}
