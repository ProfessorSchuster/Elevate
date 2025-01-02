// src/components/Footer.tsx

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} GymTracker. Alle Rechte vorbehalten.</p>
    </footer>
  );
};

export default Footer;
