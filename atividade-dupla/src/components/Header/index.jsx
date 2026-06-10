
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">O JANTAR SECRETO</Link>
      </div>

      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/regras">Regras</Link></li>
          <li><Link to="/cardapios">Cardápios</Link></li>
        </ul>
      </nav>

      <div className="header-actions">
        <Link to="/cadastro" className="link-login">Membro? Entrar</Link>
        <Link to="/reservas" className="btn-convite">Reservar Lugar</Link>
      </div>
    </header>
  );
}