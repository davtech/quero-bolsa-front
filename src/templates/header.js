import React from 'react';
import Menu from "./menu";
import logo from "../images/logo-quero-bolsa.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => (
  <header>
    <div className="container topbar">
      <div className="info-header">          
        <div className="como-funciona">
          <a href="#como-funciona" title="Saiba mais de como funciona a querobolsa.com">
            <FontAwesomeIcon icon="info-circle" /> <span>Como funciona</span> <span className="mobile">Ajuda</span>
          </a>
        </div>
        <div className="telefone-0800">
          <a href="tel:0800123222" title="Entre em contado">
            <FontAwesomeIcon icon={['fab', 'whatsapp']} /> 0800 123 222  <br />
            <span>Envie mensagem ou ligue</span>
          </a>
        </div>
      </div>

      <div className="logo">
        <h1>
          <a href="/" title="Recarregar a pagina">
            <img src={logo} alt="Quero Bolsa" />
          </a>
        </h1>
      </div>
      
      <div className="perfil">
        <a href="#substituir" title="Informações do seu perfil">
          <span>David Bastos </span> <FontAwesomeIcon icon="user-circle" /> <span className="mobile">Conta</span>
        </a>
      </div>
    </div>

    <Menu />
    
  </header>
)


