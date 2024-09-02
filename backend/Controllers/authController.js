import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15h",
  });
};

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Check if the user already exists by email or username
    let user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    user = new User({
      email,
      password: hashedPassword,
      username, // Include username if you are using it
    });

    await user.save();

    res.status(201).json({ success: true, message: "User successfully created" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error", err });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    
    // Check if user exists
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user);

    // Exclude sensitive fields from the response
    const { password: userPassword, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Successfully logged in",
      token,
      data: rest,
      role: user.role,
    });
  } catch (err) {
    console.error("Login error:", err); // Log the error for debugging
    res.status(500).json({ success: false, message: "Internal server error", err: err.message });
  }
};