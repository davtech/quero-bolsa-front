import React from "react";
import InputRange from 'react-input-range';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-input-range/lib/css/index.css";

export default props => {

    const cursos = props.cursos;
    const cursosEstatico = props.cursosEstatico;

    // Extraindo cidades
    const selectOpcoesCidades = () => {
      const isolandoCidades = cursosEstatico.map(element => element.campus.city);
      const cidades = [ ...new Set( isolandoCidades ) ];

      return cidades.map((select, index) => (
        <option key={index} value={select}>{select}</option>
      ))
    }

    // Extraindo nome dos cursos
    const selectOpcoesCurso = () => {
      const isolandoCursos = cursosEstatico.map(element => element.course.name);
      const nomeCursos = [ ...new Set( isolandoCursos ) ];
      return nomeCursos.map((select, index) => (
        <option key={index} value={select}>{select}</option>
      ))
    }

    const listaCursos = () => {
      return cursos.map((curso, index) => (
        <tr key={index}>
          <th className="checkbox">
            <input value={`${curso.course.name}-${curso.university.name}`} type="checkbox" />
          </th>

          <th className="imagem-curso">
            <div className="container-img-curso">
              <img src={curso.university.logo_url} alt={curso.university.name} />
            </div>
          </th>

          <th className="nome-curso">
            <p>{curso.course.name} <span className="tipo">{curso.course.level}</span></p>
          </th>

          <th className="preco-curso">
            <p className="desconto">Bolsa de <span>{curso.discount_percentage}%</span></p>
            <p className="preco">R$ {curso.price_with_discount}/mês</p>
          </th>
        </tr>
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
              <select name="selectCidades" value={props.selectCidades} onChange={props.handleChange} >              
                <option value=""></option>
                {selectOpcoesCidades()}   
              </select>           
              {/* {console.log('estado select cidades => '+props.selectCidades)}    */}
            </div>

            <div className="filtro">
              <label>Selecione o curso de sua preferência</label>
              <select name="selectNomeCurso" value={props.selectNomeCurso} onChange={props.handleChange} >
                <option value=""></option>
                {selectOpcoesCurso()}                
              </select>
              {/* {console.log('estado select Curso => '+props.selectNomeCurso)}   */}
            </div>

            <div className="filtro checkbox">
              <p>Como você gostaria de estudar?</p>
              <label>
                <input type="checkbox" name="checkboxPresencial" value={props.checkboxPresencial} onChange={props.handleChange}/> Presencial </label>
                {/* {console.log('estado checkbox presencial => '+props.checkboxPresencial)}   */}
              <label>
                <input type="checkbox" name="checkboxDistancia" value={props.checkboxDistancia} onChange={props.handleChange}/>A distância </label>
                {/* {console.log('estado checkbox distancia => '+props.checkboxDistancia)}   */}
            </div>

            <div className="filtro">
              <label>Até quanto quer pagar?</label>
                {/* <Slider min={0} max={20} defaultValue={3} /> */}
                <InputRange
                  maxValue={5000}
                  minValue={100}
                  value={props.intervaloPreco}
                  onChange={props.handleRangeChange}
                  onChangeComplete={value => console.log('estado range preco => '+value)}
                />
            </div>
          </div>
        </form>

        <div className="container-indicadores">
          <div className="resultado">
            <p className="resultado-texto">Resultado</p>
          </div>

          <div className="filtroOrdem">
            <p>Ordernar por <a href="#ordena-cursos">Nome da faculdade <FontAwesomeIcon icon="arrow-down" /></a></p>
          </div>
        </div>

        <form>
          <div className="listagem-cursos">            
            <table>
              <tbody>
                {listaCursos()}
              </tbody>
            </table>                       
          </div>

          <div className="botoes-modal">
            <button className="btn btn-light" onClick={props.closeModal}>Cancelar</button>
            <button className="btn btn-primary" type="submit">Adicionar bolsa(s)</button>
          </div> 
        </form>

        {/* <button onClick={this.props.closeModal}>close</button> */}
      </div>
    )
  
}
