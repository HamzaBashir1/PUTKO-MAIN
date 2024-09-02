import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15h",
  });
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user (initially all users are 'guest')
    user = new User({
      name,
      email,
      password: hashedPassword,
      photo,
      gender,
      role: 'guest', // All new users start as 'guest'
    });

    await user.save();

    res.status(200).json({ success: true, message: "User successfully created" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user);

    // Exclude sensitive fields from the response
    const { password, ...rest } = user._doc;

    res.status(200).json({ success: true, message: "Successfully logged in", token, data: rest, role: user.role });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
