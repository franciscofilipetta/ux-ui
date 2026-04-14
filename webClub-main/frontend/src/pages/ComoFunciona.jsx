import React from 'react';
import { Link } from 'react-router-dom';
import './ComoFunciona.css';

const ComoFunciona = () => {
  const pasos = [
    {
      numero: 1,
      titulo: 'Creá tu campaña',
      descripcion: 'Completá el formulario con los datos de tu causa, contá tu historia y definí tu objetivo de recaudación.',
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      )
    },
    {
      numero: 2,
      titulo: 'Compartí con tu red',
      descripcion: 'Difundí tu campaña en redes sociales, grupos de WhatsApp y con tus contactos. Las campañas más exitosas son las más compartidas.',
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      )
    },
    {
      numero: 3,
      titulo: 'Recibí donaciones',
      descripcion: 'Las personas pueden donar de forma segura usando diferentes métodos de pago. Vos controlás todo desde tu panel.',
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    {
      numero: 4,
      titulo: 'Retirá los fondos',
      descripcion: 'Una vez alcanzado tu objetivo (o antes si lo necesitás), podés retirar los fondos a tu cuenta bancaria.',
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      )
    }
  ];

  const caracteristicas = [
    {
      titulo: 'Sin comisiones ocultas',
      descripcion: 'Transparencia total en cada donación que recibís.'
    },
    {
      titulo: 'Pagos seguros',
      descripcion: 'Todas las transacciones están protegidas y encriptadas.'
    },
    {
      titulo: 'Soporte 24/7',
      descripcion: 'Nuestro equipo está disponible para ayudarte cuando lo necesites.'
    },
    {
      titulo: 'Panel de control',
      descripcion: 'Gestioná tu campaña y seguí el progreso en tiempo real.'
    }
  ];

  return (
    <div className="como-funciona-page">
      <section className="como-hero">
        <div className="container">
          <h1>¿Cómo funciona Solidaridad?</h1>
          <p>Crear una campaña es gratis, fácil y solo toma unos minutos</p>
        </div>
      </section>

      <section className="pasos-section">
        <div className="container">
          <div className="pasos-grid">
            {pasos.map((paso) => (
              <div key={paso.numero} className="paso-card">
                <div className="paso-icono">
                  {paso.icono}
                </div>
                <div className="paso-numero-badge">{paso.numero}</div>
                <h3>{paso.titulo}</h3>
                <p>{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="caracteristicas-section">
        <div className="container">
          <h2>¿Por qué elegir Solidaridad?</h2>
          <div className="caracteristicas-grid">
            {caracteristicas.map((caract, index) => (
              <div key={index} className="caracteristica-item">
                <div className="caracteristica-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h4>{caract.titulo}</h4>
                  <p>{caract.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Preguntas frecuentes</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>¿Cuánto cuesta crear una campaña?</summary>
              <p>Crear una campaña es completamente gratis. Solo cobramos una pequeña comisión sobre las donaciones recibidas para mantener la plataforma.</p>
            </details>
            <details className="faq-item">
              <summary>¿Cuánto tiempo tarda en acreditarse el dinero?</summary>
              <p>Los fondos se acreditan en tu cuenta bancaria dentro de las 48-72 horas hábiles después de solicitar el retiro.</p>
            </details>
            <details className="faq-item">
              <summary>¿Puedo editar mi campaña después de publicarla?</summary>
              <p>Sí, podés editar el título, descripción, historia e imágenes de tu campaña en cualquier momento desde tu panel de control.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué pasa si no alcanzo mi objetivo?</summary>
              <p>¡No hay problema! Podés retirar los fondos recaudados aunque no hayas alcanzado el 100% de tu objetivo.</p>
            </details>
            <details className="faq-item">
              <summary>¿Cómo puedo maximizar las donaciones?</summary>
              <p>Las campañas más exitosas tienen historias emotivas, imágenes de calidad y se comparten activamente en redes sociales. Mantené a tus donantes informados con actualizaciones.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="container">
          <h2>¿Listo para empezar?</h2>
          <p>Creá tu campaña hoy y empezá a recibir el apoyo que necesitás</p>
          <Link to="/crear" className="btn-comenzar">Crear mi campaña</Link>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;
