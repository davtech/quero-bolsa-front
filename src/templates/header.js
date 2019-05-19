import React from 'react'
import Menu from "./menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => (
  <header>
    <div className="container topbar">
      <div className="info-header">          
        <div className="como-funciona">
          <a href="#como-funciona" title="Saiba mais de como funciona a querobolsa.com">
            <FontAwesomeIcon icon="info-circle" /> Como funciona
          </a>
        </div>
        <div className="0800">
          <a href="tel:0800123222" title="Entre em contado">
            <FontAwesomeIcon icon={['fab', 'whatsapp']} /> 0800 123 222
          </a>
        </div>
      </div>
      <div className="logo">
        <h1>
          <a href="/" title="Recarregar a p[agina">
            <img src="./images/logo.png" alt="Quero Bolsa" />
          </a>
        </h1>
      </div>
      <div className="perfil">
        <a href="#substituir" title="Informações do seu perfil">
          <p>David Bastos <FontAwesomeIcon icon="user-circle" /></p> 
        </a>
      </div>
    </div>

    <Menu />
    
  </header>
)


