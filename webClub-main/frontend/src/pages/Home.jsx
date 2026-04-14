import React, { useState, useMemo } from 'react';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import CampaignCard from '../components/CampaignCard';
import { campanias } from '../data/mockData';
import './Home.css';

const Home = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('todas');
  const [busqueda, setBusqueda] = useState('');

  const campaniasFiltradas = useMemo(() => {
    return campanias.filter((campania) => {
      const coincideCategoria = categoriaActiva === 'todas' || campania.categoria === categoriaActiva;
      const coincideBusqueda = busqueda === '' || 
        campania.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        campania.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
  }, [categoriaActiva, busqueda]);

  const estadisticas = {
    campanias: campanias.length,
    recaudado: '$65M+',
    donantes: '1,554'
  };

  const handleBuscar = (termino) => {
    setBusqueda(termino);
  };

  return (
    <div className="home-page">
      <HeroSection onBuscar={handleBuscar} estadisticas={estadisticas} />

      <section id="campanias" className="campanias-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-titulo">Campañas destacadas</h2>
            <p className="section-subtitulo">
              Explorá las causas que necesitan tu apoyo y hacé la diferencia hoy
            </p>
          </div>

          <CategoryFilter 
            categoriaActiva={categoriaActiva}
            onCategoriaChange={setCategoriaActiva}
          />

          {busqueda && (
            <div className="busqueda-activa">
              <span>Resultados para: &quot;{busqueda}&quot;</span>
              <button onClick={() => setBusqueda('')} className="limpiar-busqueda">
                Limpiar
              </button>
            </div>
          )}

          {campaniasFiltradas.length === 0 ? (
            <div className="sin-resultados">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <h3>No encontramos campañas</h3>
              <p>Probá ajustando los filtros o realizando otra búsqueda</p>
              <button onClick={() => { setCategoriaActiva('todas'); setBusqueda(''); }}>
                Ver todas las campañas
              </button>
            </div>
          ) : (
            <div className="campanias-grid">
              {campaniasFiltradas.map((campania) => (
                <CampaignCard key={campania.id} campania={campania} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Tenés una causa que necesita apoyo?</h2>
            <p>
              Crear una campaña es gratis y solo toma unos minutos. 
              Contá tu historia y empezá a recibir donaciones hoy mismo.
            </p>
            <a href="/crear" className="cta-btn">Crear mi campaña</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
