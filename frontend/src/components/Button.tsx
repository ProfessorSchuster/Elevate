// src/components/Button.tsx

import React from 'react';
import './Button.css';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', disabled = false }) => {
  return (
    <button className="button" onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
