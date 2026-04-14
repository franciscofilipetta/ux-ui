import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ porcentaje, tamano = 'normal', mostrarTexto = false, color = 'primary' }) => {
  const porcentajeNumerico = parseFloat(porcentaje);
  
  return (
    <div className={`progress-container progress-${tamano}`}>
      <div className="progress-bar">
        <div 
          className={`progress-fill progress-${color}`}
          style={{ width: `${Math.min(porcentajeNumerico, 100)}%` }}
        />
      </div>
      {mostrarTexto && (
        <span className="progress-text">{porcentajeNumerico.toFixed(1)}%</span>
      )}
    </div>
  );
};

export default ProgressBar;
