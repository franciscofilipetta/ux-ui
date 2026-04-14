import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CampaignCard from '../components/CampaignCard';
import { usuarios, campanias, formatearMonto, formatearFecha } from '../data/mockData';
import './Perfil.css';

const Perfil = () => {
  const [tabActiva, setTabActiva] = useState('campanias');
  
  // Simular usuario logueado
  const usuario = usuarios[0];
  const campaniasUsuario = campanias.filter(c => usuario.campaniasCreadas.includes(c.id));
  
  const totalDonado = usuario.donacionesRealizadas.reduce((acc, d) => acc + d.monto, 0);
  const totalRecaudado = campaniasUsuario.reduce((acc, c) => acc + c.montoActual, 0);

  return (
    <div className="perfil-page">
      <div className="container">
        <div className="perfil-header">
          <div className="perfil-avatar-container">
            <img src={usuario.avatar} alt={usuario.nombre} className="perfil-avatar" />
          </div>
          <div className="perfil-info">
            <h1>{usuario.nombre}</h1>
            <div className="perfil-meta">
              <span className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {usuario.ubicacion}
              </span>
              <span className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Miembro desde {formatearFecha(usuario.fechaRegistro)}
              </span>
            </div>
          </div>
          <Link to="/crear" className="btn-nueva-campania">
            Nueva campaña
          </Link>
        </div>

        <div className="perfil-stats">
          <div className="stat-card">
            <span className="stat-valor">{campaniasUsuario.length}</span>
            <span className="stat-label">Campañas creadas</span>
          </div>
          <div className="stat-card">
            <span className="stat-valor">{formatearMonto(totalRecaudado)}</span>
            <span className="stat-label">Recaudado</span>
          </div>
          <div className="stat-card">
            <span className="stat-valor">{usuario.donacionesRealizadas.length}</span>
            <span className="stat-label">Donaciones realizadas</span>
          </div>
          <div className="stat-card">
            <span className="stat-valor">{formatearMonto(totalDonado)}</span>
            <span className="stat-label">Total donado</span>
          </div>
        </div>

        <div className="perfil-tabs">
          <button 
            className={`tab-btn ${tabActiva === 'campanias' ? 'tab-activa' : ''}`}
            onClick={() => setTabActiva('campanias')}
          >
            Mis campañas
          </button>
          <button 
            className={`tab-btn ${tabActiva === 'donaciones' ? 'tab-activa' : ''}`}
            onClick={() => setTabActiva('donaciones')}
          >
            Mis donaciones
          </button>
        </div>

        <div className="perfil-contenido">
          {tabActiva === 'campanias' && (
            <>
              {campaniasUsuario.length === 0 ? (
                <div className="sin-contenido">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="12" y1="8" x2="12" y2="16"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                  </svg>
                  <h3>Todavía no creaste ninguna campaña</h3>
                  <p>Empezá tu primera campaña y recibí apoyo para tu causa</p>
                  <Link to="/crear" className="btn-crear">Crear campaña</Link>
                </div>
              ) : (
                <div className="campanias-grid">
                  {campaniasUsuario.map((campania) => (
                    <CampaignCard key={campania.id} campania={campania} />
                  ))}
                </div>
              )}
            </>
          )}

          {tabActiva === 'donaciones' && (
            <>
              {usuario.donacionesRealizadas.length === 0 ? (
                <div className="sin-contenido">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <h3>Todavía no realizaste donaciones</h3>
                  <p>Explorá las campañas activas y apoyá las causas que te importan</p>
                  <Link to="/" className="btn-explorar">Explorar campañas</Link>
                </div>
              ) : (
                <div className="donaciones-lista">
                  {usuario.donacionesRealizadas.map((donacion, index) => {
                    const campania = campanias.find(c => c.id === donacion.campaniaId);
                    return (
                      <Link 
                        key={index} 
                        to={`/campania/${donacion.campaniaId}`}
                        className="donacion-item-perfil"
                      >
                        <img 
                          src={campania?.imagen} 
                          alt={campania?.titulo} 
                          className="donacion-imagen"
                        />
                        <div className="donacion-info">
                          <h4>{campania?.titulo}</h4>
                          <span className="donacion-fecha">{formatearFecha(donacion.fecha)}</span>
                        </div>
                        <span className="donacion-monto">{formatearMonto(donacion.monto)}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
