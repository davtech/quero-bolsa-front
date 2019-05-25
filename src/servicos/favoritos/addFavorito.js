import React from "react";

export default props => {

    const cursos = props.cursos;

    // extraindo cidades
    const carregandoOpcoesCidades = () => {
      const isolandoCidades = cursos.map(element => element.campus.city);
      const cidades = [ ...new Set( isolandoCidades ) ];
      return cidades.map(select => (
        <option key={select.toString()} value={select}>{select}</option>
      ))
    }

    // Extraindo Nome dos cursos
    const carregandoOpcoesCurso = () => {
      const isolandoCursos = cursos.map(element => element.course.name);
      const nomeCursos = [ ...new Set( isolandoCursos ) ];
      return nomeCursos.map(select => (
        <option key={select} value={select}>{select}</option>
      ))
    }

    return(      
      <div className="container-modal">
        <h4>Adicionar Bolsa</h4>
        <p>Filtre e adicione as bolsas do seu interesse.</p>

        <form>
          <div className="filtros">
            <div className="filtro">
              <label>Selecione sua cidade</label>
              <select name="cidade" value={props.selectCidades} onChange={props.handleChange} >              
                <option value=""></option>
                {carregandoOpcoesCidades()}                              
              </select>
              {console.log(props.select)}
            </div>

            <div className="filtro">
              <label>Selecione o curso de sua preferência</label>
              <select name="curso">
                <option value=""></option>
                
                {carregandoOpcoesCurso()}
              </select>
            </div>

            <div className="filtro checkbox">
              <p>Como você gostaria de estudar?</p>
              <label>
                <input type="checkbox" name="vehicle1" value="Bike" /> Presencial </label>
              <label>
                <input type="checkbox" name="vehicle1" value="Bike" />A distância </label>
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
    )
  
}
