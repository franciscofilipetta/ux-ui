import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ onBuscar, estadisticas }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(busqueda);
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-titulo">
          Ayudá a cambiar una historia
        </h1>
        <p className="hero-subtitulo">
          Conectamos personas que quieren ayudar con causas que necesitan apoyo. 
          Cada donación, por pequeña que sea, puede hacer la diferencia.
        </p>

        <form className="hero-busqueda" onSubmit={handleSubmit}>
          <div className="busqueda-input-container">
            <svg className="busqueda-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar campañas..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="busqueda-input"
            />
          </div>
          <button type="submit" className="busqueda-btn">
            Buscar
          </button>
        </form>

        <div className="hero-estadisticas">
          <div className="estadistica">
            <span className="estadistica-numero">{estadisticas?.campanias || '50+'}</span>
            <span className="estadistica-label">Campañas activas</span>
          </div>
          <div className="estadistica-separador"></div>
          <div className="estadistica">
            <span className="estadistica-numero">{estadisticas?.recaudado || '$15M+'}</span>
            <span className="estadistica-label">Recaudados</span>
          </div>
          <div className="estadistica-separador"></div>
          <div className="estadistica">
            <span className="estadistica-numero">{estadisticas?.donantes || '2,500+'}</span>
            <span className="estadistica-label">Donantes</span>
          </div>
        </div>

        <div className="hero-cta">
          <Link to="/crear" className="btn-hero-primario">
            Crear una campaña
          </Link>
          <a href="#campanias" className="btn-hero-secundario">
            Explorar causas
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
