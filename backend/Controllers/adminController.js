import User from '../models/User.js';

export async function createAdmin(req, res) {
  try {
    const canCreateAdmin = await User.canCreateAdmin();

    if (!canCreateAdmin) {
      return res.status(400).json({ message: 'An admin already exists. Only one admin user is allowed.' });
    }

    const { username, email, password } = req.body;

    const user = new User({
      username,
      email,
      password,
      role: 'admin',
    });

    await user.save();
    res.status(201).json({ message: 'Admin user created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
