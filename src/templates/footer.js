import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => (
  <footer>
    <div className="contato">      
      <div className="container">
        <div className="telefone">
          <a href="tel:0800123222" title="Entre em contado">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} /> 0800 123 222
            <span>Envie mensagem ou ligue</span>
          </a>
        </div>

        <div className="chat">
          <a href="#chat" title="Entre em contado">
            <FontAwesomeIcon icon="comments" /> Chat ao vivo
            <span>Seg - Sex 8h-22h</span>
          </a>
        </div>
        
        <div className="email">
          <a href="#e-mail" title="Entre em contado">
            <FontAwesomeIcon icon="envelope" /> Mande um e-mail  
            <span>Respondemos rapidinho</span>
          </a>
        </div>

        <div className="ajuda">
          <a href="#ajuda" title="Entre em contado">
            <FontAwesomeIcon icon="info-circle" /> Central de ajuda  
            <span>Encontre todas as respostas</span>
          </a>
        </div>
      </div>
    </div>





    <div className="assinatura">
      <p>
        Feito com <FontAwesomeIcon icon="heart" /> pelo Quero Educação
      </p>
    </div>
  </footer>
);
