import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import SlideToggle from "react-slide-toggle";

export default props => (
  
      <div className="menu">
        <div className="menu-responsivo">
          <div className="container">
            <div className="minha-conta">
              <NavLink activeClassName='active' to="/minha-conta">Minha conta</NavLink>
            </div>

            <div className="slide-down-menu">
              <button type="button"  >Menu <FontAwesomeIcon icon="arrow-down" /></button>
            </div>
          </div>

          {/* <nav className="nav-resp"  ref={setCollapsibleElement} >
            <ul>          
              <li>
                <NavLink activeClassName='active' to="/pre-matriculas">Pré Matriculas</NavLink>
              </li>
              <li>
                  <NavLink activeClassName='active' to="/bolsas-favoritas" >Bolsas Favoritas</NavLink>
              </li>
            </ul>
          </nav> */}
        </div>

        <nav className="container" >
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