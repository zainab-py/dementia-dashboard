import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MedicationList from '../components/MedicationList';

const PatientProfile = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/patients/${id}`);
        const data = await res.json();
        setPatient(data);
      } catch (error) {
        console.error('Failed to fetch patient:', error);
      }
    };

    fetchPatient();
  }, [id]);

  if (!patient) {
    return <div className="text-center mt-10">Loading patient data...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-6">
      <h1 className="text-2xl font-bold mb-4">{patient.name}</h1>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Date of Birth:</strong> {new Date(patient.dob).toLocaleDateString()}</p>
      <div className="mt-4">
        <MedicationList medications={patient.medications} />
      </div>
    </div>
  );
};

export default PatientProfile;