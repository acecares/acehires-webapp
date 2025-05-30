// server/models/Consultant.js
const mongoose = require('mongoose');

const consultantSchema = new mongoose.Schema({
  name: String,
  email: String,
  serviceType: String,
  experience: String,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Consultant', consultantSchema);
