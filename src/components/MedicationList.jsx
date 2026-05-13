import React from 'react';

const MedicationList = ({ medications }) => (
  <div className="mt-2">
    <h3 className="font-bold">Medications:</h3>
    <ul className="list-disc ml-6">
      {medications.map((med, index) => (
        <li key={index}>
          {med.name} - {med.dosage} at {med.time}
        </li>
      ))}
    </ul>
  </div>
);

export default MedicationList;
