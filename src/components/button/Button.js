import React from 'react';
import './button.css';


export const Button = ({ variant, label, size, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={['storybook-button', `storybook-button--${size}`, variant, `${disabled ? "disabled" : ""}`].join(' ')}
    >
      {label}
    </button>
  );
};