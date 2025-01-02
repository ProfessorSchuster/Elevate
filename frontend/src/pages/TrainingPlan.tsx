// src/pages/TrainingPlan.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './TrainingPlan.css';
import { PlanCard } from '../components/PlanCard';

interface TrainingPlan {
  id: number;
  name: string;
  isActive: boolean;
  sessions: number;
}

const TrainingPlanPage: React.FC = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<TrainingPlan[]>([]);

  useEffect(() => {
    // Hier sollte die API-Aufruf-Logik implementiert werden
    // Beispielhafte Mock-Daten:
    const mockPlans: TrainingPlan[] = [
      { id: 1, name: 'Anfänger Plan', isActive: true, sessions: 4 },
      { id: 2, name: 'Fortgeschrittenen Plan', isActive: false, sessions: 6 },
    ];
    setPlans(mockPlans);
  }, []);

  const handleCreatePlan = () => {
    navigate('/training-plans/create');
  };

  const handleEditPlan = (id: number) => {
    navigate(`/training-plans/edit/${id}`);
  };

  const handleActivatePlan = (id: number) => {
    // Logik zum Aktivieren des Plans
    console.log(`Plan ${id} aktiviert`);
  };

  const handleDeactivatePlan = (id: number) => {
    // Logik zum Deaktivieren des Plans
    console.log(`Plan ${id} deaktiviert`);
  };

  return (
    <div className="training-plan">
      <h2>Trainingspläne</h2>
      <Button onClick={handleCreatePlan}>Neuen Plan erstellen</Button>
      <div className="training-plan__list">
        {plans.length === 0 ? (
          <p>Keine Trainingspläne vorhanden.</p>
        ) : (
          plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onEdit={() => handleEditPlan(plan.id)}
              onActivate={() => handleActivatePlan(plan.id)}
              onDeactivate={() => handleDeactivatePlan(plan.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TrainingPlanPage;
