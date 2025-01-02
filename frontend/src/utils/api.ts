// src/utils/api.ts

import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api'; // Passe dies entsprechend an

// Beispielhafte API-Aufrufe

export const fetchTrainingPlans = async () => {
  const response = await axios.get(`${API_BASE_URL}/training-plans`);
  return response.data;
};

export const createTrainingPlan = async (plan: any) => {
  const response = await axios.post(`${API_BASE_URL}/training-plans`, plan);
  return response.data;
};

// Weitere API-Aufrufe nach Bedarf hinzufügen
