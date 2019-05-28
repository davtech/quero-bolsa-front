import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => (
  
  <div className="item">
    <div className="container-item">
      <div className="logo-inst">
        <img
          src="https://www.tryimg.com/u/2019/04/16/unip.png"
          alt="nome da inst"
        />
      </div>
      <div className="nome-inst">
        <p>Unip</p>
      </div>
      <div className="nome-curso">
        <p>Arquitetura e Urbanismo</p>
      </div>
      <div className="estrelas">
        3.8 
        <Rating
          initialRating={3.8}
          emptySymbol={<FontAwesomeIcon icon={["far", "star"]} />}
          fullSymbol={<FontAwesomeIcon icon="star" />}
          readonly
        />
      </div>

      <div className="periodo-e-inicio">
        <p>
          <strong>Presencial Noite</strong>
          <span>Início das aulas em: 05/07/2019</span>
        </p>
      </div>

      <div className="mensalidade">
        <p>Mensalidade com o Quero bolsa:</p>

        <div className="preco-sem-desconto">
          <p>
            <s>R$ 1000,00/mês</s>
          </p>
        </div>
        <div className="preco-com-desconto">
          <p>R$ 500,00/mês</p>
        </div>
      </div>

      <div className="botoes">
        <button className="btn btn-light">Cancelar</button>
        <button className="btn btn-oferta" type="submit">
          Ver oferta
        </button>
      </div>
    </div>
  </div>
);
