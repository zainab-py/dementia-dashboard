const API_URL = 'http://localhost:5000/api/patients';

export const fetchPatients = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};
