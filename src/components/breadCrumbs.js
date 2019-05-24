import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <div className="breadcrumbs">
    <div className="container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/minha-conta" title="acesse sua conta">
            Minha Conta
          </Link>
        </li>
        <li className="pagina-atual">Bolsas favoritas</li>
      </ul>
    </div>
  </div>
);
