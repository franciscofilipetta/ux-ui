import React from 'react';
import { formatearMonto, formatearFecha } from '../data/mockData';
import './DonationList.css';

const DonationList = ({ donaciones, limite = 5 }) => {
  const donacionesMostrar = donaciones.slice(0, limite);

  return (
    <div className="donation-list">
      <h3 className="donation-list-titulo">Donaciones recientes</h3>
      {donacionesMostrar.length === 0 ? (
        <p className="sin-donaciones">Aún no hay donaciones. ¡Sé el primero en donar!</p>
      ) : (
        <ul className="donaciones">
          {donacionesMostrar.map((donacion) => (
            <li key={donacion.id} className="donacion-item">
              <div className="donacion-avatar">
                {donacion.nombre.charAt(0).toUpperCase()}
              </div>
              <div className="donacion-info">
                <div className="donacion-header">
                  <span className="donacion-nombre">{donacion.nombre}</span>
                  <span className="donacion-monto">{formatearMonto(donacion.monto)}</span>
                </div>
                {donacion.mensaje && (
                  <p className="donacion-mensaje">{donacion.mensaje}</p>
                )}
                <span className="donacion-fecha">{formatearFecha(donacion.fecha)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonationList;
