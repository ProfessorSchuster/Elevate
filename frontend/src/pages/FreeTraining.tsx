// src/pages/FreeTraining.tsx

import React, { useState } from 'react';
import Button from '../components/Button';
import './FreeTraining.css';

interface Exercise {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

const FreeTraining: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);
  const [weight, setWeight] = useState(0);

  const addExercise = () => {
    if (exerciseName.trim() === '') return;
    const newExercise: Exercise = {
      id: Date.now(),
      name: exerciseName,
      sets,
      reps,
      weight,
    };
    setExercises([...exercises, newExercise]);
    setExerciseName('');
    setSets(3);
    setReps(10);
    setWeight(0);
  };

  const handleStartTraining = () => {
    // Hier sollte die Logik zum Starten der Trainingseinheit implementiert werden
    console.log('Training gestartet mit Übungen:', exercises);
  };

  return (
    <div className="free-training">
      <h2>Freies Training</h2>
      <div className="free-training__form">
        <input
          type="text"
          placeholder="Übung Name"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sätze"
          value={sets}
          onChange={(e) => setSets(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Wiederholungen"
          value={reps}
          onChange={(e) => setReps(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Gewicht (kg)"
          value={weight}
          onChange={(e) => setWeight(parseInt(e.target.value))}
        />
        <Button onClick={addExercise}>Übung hinzufügen</Button>
      </div>
      <div className="free-training__list">
        <h3>Übungen</h3>
        {exercises.length === 0 ? (
          <p>Keine Übungen hinzugefügt.</p>
        ) : (
          <ul>
            {exercises.map((exercise) => (
              <li key={exercise.id}>
                {exercise.name} - {exercise.sets} Sätze x {exercise.reps} Wiederholungen @ {exercise.weight}kg
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button onClick={handleStartTraining} disabled={exercises.length === 0}>
        Training starten
      </Button>
    </div>
  );
};

export default FreeTraining;
