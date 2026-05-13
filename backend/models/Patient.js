const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: String,
  dosage: String,
  time: String,
});

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  dob: Date,
  medications: [medicationSchema],
});

module.exports = mongoose.model('Patient', patientSchema);
