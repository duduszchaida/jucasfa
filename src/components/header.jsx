import React from 'react';
import { Link,  useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isQuerigma = location.pathname === "/querigma";
  return (
    <header className={`header ${isQuerigma ? 'black-text' : ''}`}>
      <ul className="nav">
      
        <li>
          <a href="/#about">Sobre</a>
        </li>
        <li>
          <a href="/#services">Galeria</a>
        </li>
        <li>
          <a href="/#contact">Contatos</a>
        </li>
        <li>
          <Link to='/querigma'>Querigma </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
