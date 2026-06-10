import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">O JANTAR SECRETO</Link>
      </div>

      {/* Menu de Navegação */}
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/regras">Regras</Link></li>
          <li><Link to="/cardapios">Cardápios</Link></li>
        </ul>
      </nav>

      {/* Área de Ação (Cadastro + Reserva) */}
      <div className="header-actions">
        <Link to="/cadastro" className="link-login">Membro? Entrar</Link>
        <Link to="/reservas" className="btn-convite">Reservar Lugar</Link>
      </div>

      {/* Botão Mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}