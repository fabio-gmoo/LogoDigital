import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ahora crearemos este archivo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll para cambiar la transparencia
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-links left">
        <a href="#trabajos">Trabajos</a>
        <a href="#servicios">Servicios</a>
      </div>
      
      <div className="logo-container">
        {/* Aquí iría la imagen de tu logo real más adelante */}
        <span className="logo-text">LogoDigital</span>
      </div>
      
      <div className="nav-links right">
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;