import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true, // Ensure unique username
    required: true,
  },
  email: {
    type: String,
    unique: true, // Ensure unique email
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['guest', 'host'],
    default: 'guest',
    required: true,
  },
  hasPurchasedPackage: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default model('User', UserSchema);
