// src/pages/ExerciseProgress.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Button from '../components/Button';
import './ExerciseProgress.css';

interface ProgressData {
  date: string;
  weight: number;
}

const ExerciseProgress: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ProgressData[]>([]);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | 'all'>('30d');

  useEffect(() => {
    // Hier sollte die API-Aufruf-Logik implementiert werden
    // Beispielhafte Mock-Daten:
    const mockData: ProgressData[] = [
      { date: '2023-10-01', weight: 50 },
      { date: '2023-11-01', weight: 55 },
      { date: '2023-12-01', weight: 60 },
    ];
    setData(mockData);
  }, [id, timeRange]);

  const handleTimeRangeChange = (range: '7d' | '30d' | '90d' | 'all') => {
    setTimeRange(range);
  };

  return (
    <div className="exercise-progress">
      <h2>Fortschritt der Übung {id}</h2>
      <div className="exercise-progress__controls">
        <Button onClick={() => handleTimeRangeChange('7d')}>7 Tage</Button>
        <Button onClick={() => handleTimeRangeChange('30d')}>30 Tage</Button>
        <Button onClick={() => handleTimeRangeChange('90d')}>90 Tage</Button>
        <Button onClick={() => handleTimeRangeChange('all')}>Alles</Button>
      </div>
      <div className="exercise-progress__chart">
        {data.length === 0 ? (
          <p>Keine Fortschrittsdaten verfügbar.</p>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default ExerciseProgress;
