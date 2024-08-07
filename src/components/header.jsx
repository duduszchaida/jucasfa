import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
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
