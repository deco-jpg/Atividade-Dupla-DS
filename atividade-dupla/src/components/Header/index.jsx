import React, { useState } from 'react';
import './style.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="logo">
        <a href="/">O JANTAR SECRETO</a>
      </div>

      {/* Menu de Navegação */}
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#conceito">O Conceito</a></li>
          <li><a href="#cardapio">O Cardápio</a></li>
          <li><a href="#regras">Regras de Conduta</a></li>
        </ul>
      </nav>

      {/* Botão de Chamada (CTA) */}
      <div className="header-cta">
        <a href="#convite" className="btn-convite">Solicitar Convite</a>
      </div>

      {/* Botão Mobile (Hambúrguer) */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}