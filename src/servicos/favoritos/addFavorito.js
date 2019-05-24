import React, { Component } from "react";

export default class Favoritos extends Component {
  render() {
    return (
      <div className="container-modal">
        <h4>Adicionar Bolsa</h4>
        <p>Filtre e adicione as bolsas do seu interesse.</p>

        <form>
          <div className="filtros">
            <div className="filtro">
              <label >Selecione sua cidade</label>
              <select name="cidade">
                <option>Teste 1</option>
                <option>Teste 2</option>
              </select>
            </div>

            <div className="filtro">
              <label>Selecione o curso de sua preferência</label>
              <select name="curso">
                <option>Teste 1</option>
                <option>Teste 2</option>
              </select>
            </div>

            <div className="filtro checkbox">
              <p>Como você gostaria de estudar?</p>
              <label>
                <input type="checkbox" name="vehicle1" value="Bike" />
                Presencial
              </label>
              <label>
                <input type="checkbox" name="vehicle1" value="Bike" />A
                distância
              </label>
            </div>

            <div className="filtro">
              <label>Até quanto quer pagar?</label>
            </div>
          </div>
        </form>



        <div className="resultado">
          
          <p className="resultado-texto">Resultado</p>
        </div>

        {/* <button onClick={this.props.closeModal}>close</button> */}
      </div>
    );
  }
}
