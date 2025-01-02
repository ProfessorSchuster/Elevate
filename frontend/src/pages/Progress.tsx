// src/pages/Progress.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './Progress.css';

interface TrainingSession {
  id: number;
  date: string;
  exercises: {
    id: number;
    name: string;
    sets: number;
    reps: number;
    weight: number;
  }[];
}

const Progress: React.FC = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<TrainingSession[]>([]);

  useEffect(() => {
    // Hier sollte die API-Aufruf-Logik implementiert werden
    // Beispielhafte Mock-Daten:
    const mockSessions: TrainingSession[] = [
      {
        id: 1,
        date: '2023-12-01',
        exercises: [
          { id: 1, name: 'Bankdrücken', sets: 3, reps: 10, weight: 60 },
          { id: 2, name: 'Kniebeugen', sets: 3, reps: 12, weight: 80 },
        ],
      },
      {
        id: 2,
        date: '2023-12-03',
        exercises: [
          { id: 1, name: 'Bankdrücken', sets: 3, reps: 10, weight: 65 },
          { id: 2, name: 'Kniebeugen', sets: 3, reps: 12, weight: 85 },
        ],
      },
    ];
    setSessions(mockSessions);
  }, []);

  const handleViewExerciseProgress = (id: number) => {
    navigate(`/progress/exercise/${id}`);
  };

  return (
    <div className="progress">
      <h2>Fortschritt und Verlauf</h2>
      <div className="progress__sessions">
        {sessions.length === 0 ? (
          <p>Keine Trainingssitzungen vorhanden.</p>
        ) : (
          sessions.map((session) => (
            <div key={session.id} className="progress__session">
              <h3>{session.date}</h3>
              <ul>
                {session.exercises.map((exercise) => (
                  <li key={exercise.id}>
                    {exercise.name} - {exercise.sets} Sätze x {exercise.reps} Wiederholungen @ {exercise.weight}kg
                    <Button onClick={() => handleViewExerciseProgress(exercise.id)}>Fortschritt anzeigen</Button>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Progress;
