import React from 'react';
import { CATEGORIAS, CATEGORIA_LABELS, CATEGORIA_ICONS } from '../types';
import './CategoryFilter.css';

const CategoryFilter = ({ categoriaActiva, onCategoriaChange }) => {
  const categorias = [
    { id: 'todas', label: 'Todas', icon: '🌟' },
    ...Object.values(CATEGORIAS).map(cat => ({
      id: cat,
      label: CATEGORIA_LABELS[cat],
      icon: CATEGORIA_ICONS[cat]
    }))
  ];

  return (
    <div className="category-filter">
      <div className="filter-scroll">
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            className={`filter-btn ${categoriaActiva === categoria.id ? 'filter-activo' : ''}`}
            onClick={() => onCategoriaChange(categoria.id)}
          >
            <span className="filter-icon">{categoria.icon}</span>
            <span className="filter-label">{categoria.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
