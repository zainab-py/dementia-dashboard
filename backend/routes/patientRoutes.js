const express = require('express');
const router = express.Router();
const {
  getAllPatients,
  getPatient,
  createPatient,
  updatePatient
} = require('../controllers/patientController');

router.get('/', getAllPatients);
router.get('/:id', getPatient);
router.post('/', createPatient);
router.put('/:id', updatePatient);

module.exports = router;
