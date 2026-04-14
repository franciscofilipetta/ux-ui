import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import DonationList from '../components/DonationList';
import DonationModal from '../components/DonationModal';
import { campanias, formatearMonto, calcularPorcentaje, calcularDiasRestantes, formatearFecha } from '../data/mockData';
import { CATEGORIA_LABELS, BADGE_LABELS } from '../types';
import './CampaniaDetalle.css';

const CampaniaDetalle = () => {
  const { id } = useParams();
  const [modalAbierto, setModalAbierto] = useState(false);

  const campania = campanias.find(c => c.id === parseInt(id));

  if (!campania) {
    return (
      <div className="campania-no-encontrada">
        <h1>Campaña no encontrada</h1>
        <p>La campaña que buscás no existe o fue eliminada.</p>
        <Link to="/" className="btn-volver-home">Volver al inicio</Link>
      </div>
    );
  }

  const porcentaje = calcularPorcentaje(campania.montoActual, campania.montoObjetivo);
  const diasRestantes = calcularDiasRestantes(campania.fechaLimite);

  return (
    <div className="campania-detalle">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <Link to={`/?categoria=${campania.categoria}`}>{CATEGORIA_LABELS[campania.categoria]}</Link>
          <span>/</span>
          <span>{campania.titulo}</span>
        </nav>

        <div className="detalle-grid">
          <div className="detalle-principal">
            <div className="imagen-container">
              <img src={campania.imagen} alt={campania.titulo} className="campania-imagen" />
              <div className="imagen-badges">
                {campania.badges.map((badge) => (
                  <span key={badge} className={`badge badge-${badge}`}>
                    {BADGE_LABELS[badge]}
                  </span>
                ))}
              </div>
            </div>

            <div className="campania-info-mobile">
              <h1 className="campania-titulo">{campania.titulo}</h1>
              <div className="creador-info">
                <img src={campania.creador.avatar} alt={campania.creador.nombre} className="creador-avatar" />
                <div>
                  <span className="creador-nombre">{campania.creador.nombre}</span>
                  <span className="creador-cargo">{campania.creador.cargo}</span>
                </div>
              </div>
            </div>

            <div className="campania-historia">
              <h2>Historia</h2>
              {campania.historia.split('\n\n').map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))}
            </div>

            <div className="compartir-section">
              <h3>Compartir esta campaña</h3>
              <div className="compartir-botones">
                <button className="btn-compartir btn-facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                <button className="btn-compartir btn-whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
                <button className="btn-compartir btn-copiar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  Copiar link
                </button>
              </div>
            </div>
          </div>

          <aside className="detalle-sidebar">
            <div className="sidebar-card sidebar-donacion">
              <div className="progreso-header">
                <span className="monto-actual">{formatearMonto(campania.montoActual)}</span>
                <span className="monto-objetivo">de {formatearMonto(campania.montoObjetivo)}</span>
              </div>
              
              <ProgressBar porcentaje={porcentaje} tamano="large" />
              
              <div className="estadisticas-grid">
                <div className="estadistica">
                  <span className="estadistica-valor">{porcentaje}%</span>
                  <span className="estadistica-label">Alcanzado</span>
                </div>
                <div className="estadistica">
                  <span className="estadistica-valor">{campania.cantidadDonantes}</span>
                  <span className="estadistica-label">Donantes</span>
                </div>
                <div className="estadistica">
                  <span className="estadistica-valor">{diasRestantes}</span>
                  <span className="estadistica-label">Días restantes</span>
                </div>
              </div>

              <button 
                className="btn-donar-grande"
                onClick={() => setModalAbierto(true)}
              >
                Donar ahora
              </button>

              <p className="seguridad-nota">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Donación segura y protegida
              </p>
            </div>

            <div className="sidebar-card">
              <h3>Organizador</h3>
              <div className="organizador-info">
                <img src={campania.creador.avatar} alt={campania.creador.nombre} />
                <div>
                  <span className="organizador-nombre">{campania.creador.nombre}</span>
                  <span className="organizador-cargo">{campania.creador.cargo}</span>
                </div>
              </div>
              <div className="organizador-detalles">
                <div className="detalle-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{campania.ubicacion}</span>
                </div>
                <div className="detalle-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>Creada el {formatearFecha(campania.fechaCreacion)}</span>
                </div>
              </div>
            </div>

            <DonationList donaciones={campania.donaciones} />
          </aside>
        </div>
      </div>

      <DonationModal 
        campania={campania}
        abierto={modalAbierto}
        onCerrar={() => setModalAbierto(false)}
      />
    </div>
  );
};

export default CampaniaDetalle;
