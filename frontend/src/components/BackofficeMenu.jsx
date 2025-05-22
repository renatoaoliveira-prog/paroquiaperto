// BackofficeMenu.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/BackofficeMenu.css';

export default function BackofficeMenu() {
  return (
    <nav className="backoffice-menu">
      <h3>Área Administrativa</h3>
      <ul>
        <li>
          <NavLink to="/backoffice/paroquias" activeclassname="active">Inserir Paróquia</NavLink>
        </li>
        <li>
          <NavLink to="/backoffice/horarios" activeclassname="active">Inserir Horários</NavLink>
        </li>
        <li>
          <NavLink to="/backoffice/eventos" activeclassname="active">Inserir Eventos</NavLink>
        </li>
      </ul>
    </nav>
  );
}
