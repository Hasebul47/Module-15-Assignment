/**
 * User Model Schema Placeholder
 * 
 * In a real application with MongoDB/Mongoose, it would look like:
 * 
 * const mongoose = require('mongoose');
 * 
 * const userSchema = new mongoose.Schema({
 *   name: { type: String, required: true },
 *   email: { type: String, required: true, unique: true },
 *   password: { type: String, required: true },
 *   role: { type: String, enum: ['user', 'admin'], default: 'user' },
 *   isBlocked: { type: Boolean, default: false },
 *   isVerified: { type: Boolean, default: false },
 *   profilePicture: { type: String, default: '' }
 * }, { timestamps: true });
 * 
 * module.exports = mongoose.model('User', userSchema);
 */

// Simulated database model structure for documentation
const UserSchemaDescription = {
  name: "String (Required)",
  email: "String (Required, Unique)",
  password: "String (Required, Hashed)",
  role: "String (Enum: ['user', 'admin'], Default: 'user')",
  isBlocked: "Boolean (Default: false)",
  isVerified: "Boolean (Default: false)",
  profilePicture: "String (Default: '')",
  createdAt: "Date",
  updatedAt: "Date"
};

module.exports = UserSchemaDescription;
