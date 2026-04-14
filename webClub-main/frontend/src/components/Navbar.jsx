import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={cerrarMenu}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
            </svg>
          </div>
          <span className="logo-text">Solidaridad</span>
        </Link>

        <button 
          className={`menu-toggle ${menuAbierto ? 'activo' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
          aria-expanded={menuAbierto}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`navbar-nav ${menuAbierto ? 'nav-abierto' : ''}`}>
          <ul className="nav-lista">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-activo' : ''}`}
                onClick={cerrarMenu}
              >
                Explorar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/como-funciona" 
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-activo' : ''}`}
                onClick={cerrarMenu}
              >
                Cómo funciona
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/perfil" 
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-activo' : ''}`}
                onClick={cerrarMenu}
              >
                Mi perfil
              </NavLink>
            </li>
          </ul>
          <Link to="/crear" className="btn-crear-campania" onClick={cerrarMenu}>
            Crear campaña
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
