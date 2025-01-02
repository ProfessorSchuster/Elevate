// src/pages/CreateEditPlan.tsx

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import './CreateEditPlan.css';

interface Exercise {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

const CreateEditPlan: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const [planName, setPlanName] = useState('');
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

  const handleSavePlan = () => {
    // Hier sollte die API-Logik zum Speichern des Plans implementiert werden
    console.log('Plan gespeichert:', { planName, exercises });
    navigate('/training-plans');
  };

  return (
    <div className="create-edit-plan">
      <h2>{isEdit ? 'Trainingsplan bearbeiten' : 'Neuen Trainingsplan erstellen'}</h2>
      <div className="create-edit-plan__form">
        <input
          type="text"
          placeholder="Plan Name"
          value={planName}
          onChange={(e) => setPlanName(e.target.value)}
        />
        <h3>Übungen hinzufügen</h3>
        <div className="create-edit-plan__exercise-form">
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
        <div className="create-edit-plan__list">
          <h4>Übungen im Plan</h4>
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
        <Button onClick={handleSavePlan} disabled={planName.trim() === '' || exercises.length === 0}>
          {isEdit ? 'Plan speichern' : 'Plan erstellen'}
        </Button>
      </div>
    </div>
  );
};

export default CreateEditPlan;
