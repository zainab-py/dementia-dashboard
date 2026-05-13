import React from 'react';
import MedicationList from './MedicationList';

const PatientCard = ({ patient }) => (
  <div className="bg-white shadow-md rounded-xl p-4">
    <h2 className="text-xl font-semibold">{patient.name}</h2>
    <p>Age: {patient.age}</p>
    <p>Date of Birth: {new Date(patient.dob).toLocaleDateString()}</p>
    <MedicationList medications={patient.medications} />
  </div>
);

export default PatientCard;
