import React from "react";

/**
 * Barra de navegación simple.
 * Mantener accesible: uso de <nav> y enlaces semánticos.
 */
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="brand">TallerTech</h1>
        <ul className="nav-links">
          <li><a href="#usuarios">Usuarios</a></li>
          <li><a href="#servicios">Servicios</a></li>
        </ul>
      </div>
    </nav>
  );
}
