const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  email: { type: String, unique: true },
  walletBalance: { type: Number, default: 100 }
});

module.exports = mongoose.model('User', userSchema);
