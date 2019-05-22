import React from "react";
import { NavLink } from "react-router-dom";

export default props => (
  <div className="menu">
    <nav className="container">
        <ul>
          <li>
            <NavLink activeClassName='active' to="/minha-conta" >Minha conta</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to="/pre-matriculas">Pré Matriculas</NavLink>
          </li>
          <li>
              <NavLink activeClassName='active' to="/bolsas-favoritas" >Bolsas Favoritas</NavLink>
          </li>
        </ul>
    </nav>
  </div>
);
