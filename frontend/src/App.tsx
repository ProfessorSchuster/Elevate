// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StartTraining from './pages/StartTraining';
import FreeTraining from './pages/FreeTraining';
import TrainingPlan from './pages/TrainingPlan';
import CreateEditPlan from './pages/CreateEditPlan.tsx';
import Progress from './pages/Progress';
import ExerciseProgress from './pages/ExerciseProgress';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/variables.css'; // Globale CSS-Variablen

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main style={{ padding: 'var(--spacing-md)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-training" element={<StartTraining />} />
          <Route path="/start-training/free" element={<FreeTraining />} />
          <Route path="/start-training/plan" element={<TrainingPlan />} />
          <Route path="/training-plans" element={<TrainingPlan />} />
          <Route path="/training-plans/create" element={<CreateEditPlan />} />
          <Route path="/training-plans/edit/:id" element={<CreateEditPlan />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/progress/exercise/:id" element={<ExerciseProgress />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
