// src/pages/StartTraining.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './StartTraining.css';

const StartTraining: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="start-training">
      <h2>Training starten</h2>
      <div className="start-training__options">
        <Button onClick={() => navigate('/start-training/free')}>Freies Training</Button>
        <Button onClick={() => navigate('/start-training/plan')}>Trainingsplan folgen</Button>
      </div>
    </div>
  );
};

export default StartTraining;
