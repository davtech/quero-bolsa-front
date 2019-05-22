import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Favoritos extends Component {
  render() {
    return (
      <div className="conteudo-pagina">
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

        <div className="titulo-pagina">
          <div className="container">
            <h2>Bolsas Favoritas</h2>
            <p>
              Adicione bolsas de cursos e faculdades do seu interesse e receba
              atualizações com as melhores ofertas disponíveis.
            </p>
          </div>
        </div>

        <div className="bolsas">
          <div className="container">

          
            <div className="item adicionar">
              <a href="#subistituir">
                <div className="container-item"> 
                  <div className="adicionar-icone-texto">                    
                    <FontAwesomeIcon icon="plus-circle" />
                    <p>Adicionar Bolsa</p>
                    <span>
                      Clique para adicionar bolsas de cursos do seu interesse
                    </span>                    
                  </div>
                </div>
              </a>


            </div>
          </div>
        </div>
      </div>
    );
  }
}