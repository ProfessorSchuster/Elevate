// src/components/PlanCard.tsx

import React from 'react';
import './PlanCard.css';

interface TrainingPlan {
  id: number;
  name: string;
  isActive: boolean;
  sessions: number;
}

interface PlanCardProps {
  plan: TrainingPlan;
  onEdit: () => void;
  onActivate: () => void;
  onDeactivate: () => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onEdit, onActivate, onDeactivate }) => {
  return (
    <div className="plan-card">
      <h3>{plan.name}</h3>
      <p>Sitzungen: {plan.sessions}</p>
      <p>Status: {plan.isActive ? 'Aktiv' : 'Inaktiv'}</p>
      <div className="plan-card__actions">
        <button onClick={onEdit}>Bearbeiten</button>
        {plan.isActive ? (
          <button onClick={onDeactivate}>Deaktivieren</button>
        ) : (
          <button onClick={onActivate}>Aktivieren</button>
        )}
      </div>
    </div>
  );
};
