const Patient = require('../models/Patient');

exports.getAllPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

exports.getPatient = async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
};

exports.createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
};

exports.updatePatient = async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(patient);
};
