import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIAS, CATEGORIA_LABELS } from '../types';
import './CrearCampania.css';

const CrearCampania = () => {
  const navigate = useNavigate();
  const [paso, setPaso] = useState(1);
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    descripcion: '',
    historia: '',
    montoObjetivo: '',
    ubicacion: '',
    imagen: null,
    imagenPreview: ''
  });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errores[name]) {
      setErrores(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        imagen: file,
        imagenPreview: URL.createObjectURL(file)
      }));
    }
  };

  const validarPaso = (pasoActual) => {
    const nuevosErrores = {};

    if (pasoActual === 1) {
      if (!formData.titulo.trim()) nuevosErrores.titulo = 'El título es requerido';
      if (!formData.categoria) nuevosErrores.categoria = 'Seleccioná una categoría';
      if (!formData.descripcion.trim()) nuevosErrores.descripcion = 'La descripción es requerida';
      if (formData.descripcion.length < 50) nuevosErrores.descripcion = 'La descripción debe tener al menos 50 caracteres';
    }

    if (pasoActual === 2) {
      if (!formData.historia.trim()) nuevosErrores.historia = 'La historia es requerida';
      if (formData.historia.length < 100) nuevosErrores.historia = 'La historia debe tener al menos 100 caracteres';
    }

    if (pasoActual === 3) {
      if (!formData.montoObjetivo) nuevosErrores.montoObjetivo = 'El monto objetivo es requerido';
      if (parseInt(formData.montoObjetivo) < 10000) nuevosErrores.montoObjetivo = 'El monto mínimo es $10.000';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSiguiente = () => {
    if (validarPaso(paso)) {
      setPaso(paso + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleAnterior = () => {
    setPaso(paso - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarPaso(paso)) {
      // Simular envío
      setPaso(5);
      window.scrollTo(0, 0);
    }
  };

  const pasos = [
    { numero: 1, titulo: 'Información básica' },
    { numero: 2, titulo: 'Tu historia' },
    { numero: 3, titulo: 'Objetivo' },
    { numero: 4, titulo: 'Revisión' }
  ];

  return (
    <div className="crear-campania-page">
      <div className="container">
        {paso <= 4 && (
          <>
            <div className="crear-header">
              <h1>Crear nueva campaña</h1>
              <p>Contanos sobre tu causa y empezá a recibir apoyo</p>
            </div>

            <div className="pasos-indicador">
              {pasos.map((p) => (
                <div 
                  key={p.numero} 
                  className={`paso-item ${paso >= p.numero ? 'paso-activo' : ''} ${paso > p.numero ? 'paso-completado' : ''}`}
                >
                  <div className="paso-numero">
                    {paso > p.numero ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      p.numero
                    )}
                  </div>
                  <span className="paso-titulo">{p.titulo}</span>
                </div>
              ))}
            </div>
          </>
        )}

        <form onSubmit={handleSubmit} className="crear-form">
          {paso === 1 && (
            <div className="form-paso">
              <h2>Información básica</h2>
              <p className="paso-descripcion">Empezá con los datos principales de tu campaña</p>

              <div className="form-group">
                <label htmlFor="titulo">Título de la campaña *</label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  placeholder="Ej: Ayudá a renovar el gimnasio del club"
                  className={errores.titulo ? 'input-error' : ''}
                />
                {errores.titulo && <span className="error-mensaje">{errores.titulo}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="categoria">Categoría *</label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  className={errores.categoria ? 'input-error' : ''}
                >
                  <option value="">Seleccionar categoría</option>
                  {Object.values(CATEGORIAS).map((cat) => (
                    <option key={cat} value={cat}>{CATEGORIA_LABELS[cat]}</option>
                  ))}
                </select>
                {errores.categoria && <span className="error-mensaje">{errores.categoria}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="descripcion">Descripción breve *</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  placeholder="Describí brevemente tu campaña (mínimo 50 caracteres)"
                  rows="4"
                  className={errores.descripcion ? 'input-error' : ''}
                />
                <span className="char-count">{formData.descripcion.length} / 50 mínimo</span>
                {errores.descripcion && <span className="error-mensaje">{errores.descripcion}</span>}
              </div>

              <div className="form-actions">
                <button type="button" className="btn-siguiente" onClick={handleSiguiente}>
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {paso === 2 && (
            <div className="form-paso">
              <h2>Contá tu historia</h2>
              <p className="paso-descripcion">Las campañas con historias emotivas y detalladas recaudan más</p>

              <div className="form-group">
                <label htmlFor="historia">Tu historia *</label>
                <textarea
                  id="historia"
                  name="historia"
                  value={formData.historia}
                  onChange={handleChange}
                  placeholder="Contá la historia detrás de tu campaña. ¿Por qué necesitás ayuda? ¿Cómo se usarán los fondos? (mínimo 100 caracteres)"
                  rows="10"
                  className={errores.historia ? 'input-error' : ''}
                />
                <span className="char-count">{formData.historia.length} / 100 mínimo</span>
                {errores.historia && <span className="error-mensaje">{errores.historia}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="imagen">Imagen principal</label>
                <div className="imagen-upload">
                  {formData.imagenPreview ? (
                    <div className="imagen-preview">
                      <img src={formData.imagenPreview} alt="Vista previa" />
                      <button 
                        type="button" 
                        className="btn-remover-imagen"
                        onClick={() => setFormData(prev => ({ ...prev, imagen: null, imagenPreview: '' }))}
                      >
                        Cambiar imagen
                      </button>
                    </div>
                  ) : (
                    <label className="upload-area">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                      <span>Hacé clic para subir una imagen</span>
                      <span className="upload-hint">JPG, PNG o GIF. Max 5MB</span>
                      <input
                        type="file"
                        id="imagen"
                        accept="image/*"
                        onChange={handleImagenChange}
                        hidden
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-anterior" onClick={handleAnterior}>
                  Anterior
                </button>
                <button type="button" className="btn-siguiente" onClick={handleSiguiente}>
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {paso === 3 && (
            <div className="form-paso">
              <h2>Definí tu objetivo</h2>
              <p className="paso-descripcion">¿Cuánto dinero necesitás recaudar?</p>

              <div className="form-group">
                <label htmlFor="montoObjetivo">Monto objetivo *</label>
                <div className="input-monto">
                  <span className="moneda">$</span>
                  <input
                    type="number"
                    id="montoObjetivo"
                    name="montoObjetivo"
                    value={formData.montoObjetivo}
                    onChange={handleChange}
                    placeholder="0"
                    min="10000"
                    className={errores.montoObjetivo ? 'input-error' : ''}
                  />
                </div>
                <span className="input-hint">Monto mínimo: $10.000</span>
                {errores.montoObjetivo && <span className="error-mensaje">{errores.montoObjetivo}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="ubicacion">Ubicación (opcional)</label>
                <input
                  type="text"
                  id="ubicacion"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleChange}
                  placeholder="Ej: Buenos Aires, Argentina"
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn-anterior" onClick={handleAnterior}>
                  Anterior
                </button>
                <button type="button" className="btn-siguiente" onClick={handleSiguiente}>
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {paso === 4 && (
            <div className="form-paso">
              <h2>Revisá tu campaña</h2>
              <p className="paso-descripcion">Verificá que toda la información sea correcta</p>

              <div className="revision-card">
                {formData.imagenPreview && (
                  <img src={formData.imagenPreview} alt="Vista previa" className="revision-imagen" />
                )}
                <div className="revision-contenido">
                  <span className="revision-categoria">{CATEGORIA_LABELS[formData.categoria]}</span>
                  <h3>{formData.titulo}</h3>
                  <p className="revision-descripcion">{formData.descripcion}</p>
                  <div className="revision-meta">
                    <span>Objetivo: ${parseInt(formData.montoObjetivo).toLocaleString('es-AR')}</span>
                    {formData.ubicacion && <span>{formData.ubicacion}</span>}
                  </div>
                </div>
              </div>

              <div className="revision-historia">
                <h4>Historia</h4>
                <p>{formData.historia}</p>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-anterior" onClick={handleAnterior}>
                  Anterior
                </button>
                <button type="submit" className="btn-publicar">
                  Publicar campaña
                </button>
              </div>
            </div>
          )}

          {paso === 5 && (
            <div className="crear-exito">
              <div className="exito-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h2>¡Tu campaña fue creada!</h2>
              <p>Tu campaña está lista para recibir donaciones. Compartila con tus amigos y familia para maximizar su alcance.</p>
              <div className="exito-actions">
                <button onClick={() => navigate('/')} className="btn-ver-campania">
                  Ver mi campaña
                </button>
                <button onClick={() => navigate('/')} className="btn-ir-inicio">
                  Ir al inicio
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CrearCampania;
