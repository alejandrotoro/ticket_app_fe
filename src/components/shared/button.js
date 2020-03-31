import React from 'react';

export const Button = props => {
  const {
    label, type, className, handleClick 
  } = props;
  return (
    <div>
      <button
        type={type}
        className={className}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  )
}
