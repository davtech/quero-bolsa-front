import React from "react";


export default props => (
  <div className="filtro-semestre">
    <div className="container">
      <ul>
        <li className="active">
          <button value={0} className="btn btn-primary primeiro" type="button">
            Todos os semestres
          </button>
        </li>
        <li>
          <button value={2} className="btn btn-light" type="button">
            2 semestres
          </button>
        </li>
        <li>
          <button value={1} className="btn btn-light ultimo" type="button">
            1 semestres
          </button>
        </li>
      </ul>
    </div>
  </div>
);
