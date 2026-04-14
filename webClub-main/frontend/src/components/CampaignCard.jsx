import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { CATEGORIA_LABELS, BADGE_LABELS, BADGES } from '../types';
import { formatearMonto, calcularPorcentaje, calcularDiasRestantes } from '../data/mockData';
import './CampaignCard.css';

const CampaignCard = ({ campania }) => {
  const porcentaje = calcularPorcentaje(campania.montoActual, campania.montoObjetivo);
  const diasRestantes = calcularDiasRestantes(campania.fechaLimite);

  return (
    <Link to={`/campania/${campania.id}`} className="campaign-card">
      <div className="card-image-container">
        <img 
          src={campania.imagen} 
          alt={campania.titulo}
          className="card-image"
          loading="lazy"
        />
        <div className="card-badges">
          {campania.badges.map((badge) => (
            <span 
              key={badge} 
              className={`card-badge badge-${badge}`}
            >
              {BADGE_LABELS[badge]}
            </span>
          ))}
        </div>
        <span className="card-categoria">
          {CATEGORIA_LABELS[campania.categoria]}
        </span>
      </div>

      <div className="card-content">
        <h3 className="card-titulo">{campania.titulo}</h3>
        <p className="card-descripcion">{campania.descripcion}</p>

        <div className="card-progress">
          <ProgressBar porcentaje={porcentaje} />
          <div className="card-montos">
            <span className="monto-actual">{formatearMonto(campania.montoActual)}</span>
            <span className="monto-objetivo">de {formatearMonto(campania.montoObjetivo)}</span>
          </div>
        </div>

        <div className="card-footer">
          <div className="card-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>{campania.cantidadDonantes} donantes</span>
          </div>
          <div className="card-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            <span>{diasRestantes > 0 ? `${diasRestantes} días` : 'Finalizada'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
