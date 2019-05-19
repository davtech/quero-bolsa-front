import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <nav>
    <ul>
      <li>
        <Link to="/">Minha conta</Link>
      </li>
      <li>
        <Link to="/pre-matriculas">Pré Matriculas</Link>
      </li>
      <li>
        <Link to="/bolsas-favoritas">Bolsas Favoritas</Link>
      </li>
    </ul>
  </nav>
);
