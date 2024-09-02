// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['guest', 'host', 'admin'],
    default: 'guest',
  },
  hasPurchasedPackage: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// // Hash password before saving user
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Method to match passwords
// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // Static method to check if an admin already exists
// UserSchema.statics.canCreateAdmin = async function () {
//   const adminCount = await this.countDocuments({ role: 'admin' });
//   return adminCount === 0;  // Only allow one admin
// };

module.exports = mongoose.model('User', UserSchema);
