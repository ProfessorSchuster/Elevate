// src/pages/Home.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Button from '../components/Button';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Willkommen bei GymTracker</h1>
      <div className="home__buttons">
        <Button onClick={() => navigate('/start-training')}>Training starten</Button>
        <Button onClick={() => navigate('/training-plans')}>Workout-Pläne</Button>
        <Button onClick={() => navigate('/progress')}>Fortschritt und Verlauf prüfen</Button>
      </div>
    </div>
  );
};

export default Home;
