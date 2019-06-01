import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default props => {
  

  var cursosFavoritos = JSON.parse(localStorage.getItem("favoritos"));  
  
  const listaCursos = () => {
    if(props.cursosFavoritos!== null){
      return cursosFavoritos.map((favorito, index) => (
        <div className="item" key={index}>
          <div className="container-item">
            <div className="logo-inst">
              <img
                src={favorito.university.logo_url}
                alt={favorito.university.name}
              />
            </div>
            <div className="nome-inst">
              <p>{favorito.university.name}</p>
            </div>
            <div className="nome-curso">
              <p>{favorito.course.name}</p> 
            </div>
            <div className="estrelas">
            {favorito.university.score} 
              <Rating
                initialRating={favorito.university.score}
                emptySymbol={<FontAwesomeIcon icon={["far", "star"]} />}
                fullSymbol={<FontAwesomeIcon icon="star" />}
                readonly
              />
            </div>

            <div className="periodo-e-inicio">
              <p>
                <strong>{favorito.course.kind} - {favorito.course.shift}</strong>
                <span>Início das aulas em: {favorito.start_date}</span>
              </p>
            </div>

            <div className="mensalidade">
              <p>Mensalidade com o Quero bolsa:</p>

              <div className="preco-sem-desconto">
                <p>
                  <s>R$ {favorito.full_price}/mês</s>
                </p>
              </div>
              <div className="preco-com-desconto">
                <p>R$ {favorito.price_with_discount}/mês</p>
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
      ))
    } else {
      return (
        <h4>Sem cursos adicionado</h4>
      )
    }
  }



  return (
    listaCursos()
  )
}
