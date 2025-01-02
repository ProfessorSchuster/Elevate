import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">GymTracker</Link>
      </div>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/training-plans">Trainingspläne</Link>
        <Link to="/progress">Fortschritt</Link>
      </nav>
    </header>
  );
};

export default Header;
