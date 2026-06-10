import './style.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-quote">
          <p>"Você tem estômago para a verdade?"</p>
        </div>
        
        <div className="footer-links">
          <a href="#termos">Termos de Sigilo</a>
          <a href="#suporte">Contato Clandestino</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 O Jantar Secreto. Todos os direitos reservados... e guardados a sete chaves.</p>
        </div>
      </div>
    </footer>
  );
}