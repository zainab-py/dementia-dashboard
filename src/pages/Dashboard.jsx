import React, { useEffect, useState } from 'react';
import PatientCard from '../components/PatientCard';
import { fetchPatients } from '../../api';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients().then(setPatients);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">Caretaker Dashboard</h1>
      {patients.map(patient => (
        <PatientCard key={patient._id} patient={patient} />
      ))}
    </div>
  );
};

export default Dashboard;
