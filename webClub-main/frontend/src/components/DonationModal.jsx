import React, { useState, useEffect } from 'react';
import { formatearMonto } from '../data/mockData';
import './DonationModal.css';

const MONTOS_SUGERIDOS = [5000, 10000, 25000, 50000, 100000];

const DonationModal = ({ campania, abierto, onCerrar }) => {
  const [monto, setMonto] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [anonimo, setAnonimo] = useState(false);
  const [paso, setPaso] = useState(1);

  useEffect(() => {
    if (abierto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [abierto]);

  const handleMontoSugerido = (valor) => {
    setMonto(valor.toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paso === 1 && monto) {
      setPaso(2);
    } else if (paso === 2) {
      // Simular envío
      setPaso(3);
    }
  };

  const resetForm = () => {
    setMonto('');
    setNombre('');
    setEmail('');
    setMensaje('');
    setAnonimo(false);
    setPaso(1);
    onCerrar();
  };

  if (!abierto) return null;

  return (
    <div className="modal-overlay" onClick={resetForm}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <button className="modal-cerrar" onClick={resetForm} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {paso === 1 && (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-header">
              <h2>Donar a esta campaña</h2>
              <p className="modal-campania">{campania.titulo}</p>
            </div>

            <div className="montos-sugeridos">
              <p className="montos-label">Elegí un monto:</p>
              <div className="montos-grid">
                {MONTOS_SUGERIDOS.map((valor) => (
                  <button
                    key={valor}
                    type="button"
                    className={`monto-btn ${monto === valor.toString() ? 'monto-activo' : ''}`}
                    onClick={() => handleMontoSugerido(valor)}
                  >
                    {formatearMonto(valor)}
                  </button>
                ))}
              </div>
            </div>

            <div className="monto-personalizado">
              <label htmlFor="monto-custom">O ingresá otro monto:</label>
              <div className="input-monto">
                <span className="moneda">$</span>
                <input
                  type="number"
                  id="monto-custom"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  placeholder="0"
                  min="100"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-continuar"
              disabled={!monto || parseInt(monto) < 100}
            >
              Continuar
            </button>
          </form>
        )}

        {paso === 2 && (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-header">
              <h2>Completá tus datos</h2>
              <p className="monto-seleccionado">Donación: {formatearMonto(parseInt(monto))}</p>
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                required
                disabled={anonimo}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje (opcional)</label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribí un mensaje de apoyo..."
                rows="3"
              />
            </div>

            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={anonimo}
                onChange={(e) => setAnonimo(e.target.checked)}
              />
              <span className="checkmark"></span>
              Donar de forma anónima
            </label>

            <div className="modal-actions">
              <button type="button" className="btn-volver" onClick={() => setPaso(1)}>
                Volver
              </button>
              <button type="submit" className="btn-donar">
                Confirmar donación
              </button>
            </div>
          </form>
        )}

        {paso === 3 && (
          <div className="modal-exito">
            <div className="exito-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h2>¡Gracias por tu donación!</h2>
            <p>Tu aporte de {formatearMonto(parseInt(monto))} ayudará a hacer realidad esta causa.</p>
            <p className="exito-nota">Recibirás un email con los detalles del pago.</p>
            <button className="btn-cerrar-exito" onClick={resetForm}>
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationModal;
