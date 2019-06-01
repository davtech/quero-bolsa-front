import React, { Component } from "react";
import axios from "axios";

import BreadCrumbs from "../components/breadCrumbs";
import ListaFavoritos from "../servicos/favoritos/listaFavoritos";
import FiltraSemestre from "../servicos/favoritos/filtraSemestre"
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddFavorito from "../servicos/favoritos/addFavorito";

const URLCURSOS = "https://testapi.io/api/redealumni/scholarships";

// Definições para o estilo do modal
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.88)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "700px"
  }
};

// Identificando id do app para acessibilidade
Modal.setAppElement("#root");

export default class Favoritos extends Component {
  constructor() {
    super();

    this.state = {
      cursos: [],
      cursosEstatico: [],
      cursosFavoritos: JSON.parse(localStorage.getItem("favoritos")),
      selectCidades: "",
      selectNomeCurso: "",
      checkboxPresencial: false,
      checkboxDistancia: false,
      intervaloPreco: 5000,
      checkboxCursosItens: new Map(),
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleChangeCheckCursos = this.handleChangeCheckCursos.bind(this);
    this.salvaCursoFavorito = this.salvaCursoFavorito.bind(this);
    this.excluirCursoFavorito = this.excluirCursoFavorito.bind(this);
    this.filtraSemestre = this.filtraSemestre.bind(this);

    
  }

  componentDidMount() {
    axios.get(`${URLCURSOS}`).then(res => {
      const cursos = res.data;
      console.log(cursos)

      // ordenando cursos em ordem alfabética
      cursos.sort(function(a, b) {
        return a.university.name < b.university.name
          ? -1
          : a.university.name > b.university.name
          ? 1
          : 0;
      });

      this.setState(
        {
          cursos: cursos,
          cursosEstatico: cursos
        }
      );
    });
  }

  refresh() {
    const nomeCidade = this.state.selectCidades;
    const nomeCurso = this.state.selectNomeCurso;
    const intervaloPreco = this.state.intervaloPreco;
    var cursos = this.state.cursosEstatico;

    if (
      this.state.selectCidades !== "" ||
      this.state.selectNomeCurso !== "" ||
      this.state.checkboxPresencial === true ||
      this.state.checkboxDistancia === true ||
      this.state.intervaloPreco !== 10000
    ) {
      if (this.state.selectCidades !== "") {
        cursos = cursos.filter(function(valor){
          return valor.campus.city === nomeCidade;
        });
      }
      if (this.state.selectNomeCurso !== "") {
        cursos = cursos.filter(function(valor){
          return valor.course.name === nomeCurso;
        });
      }
      if (
        this.state.checkboxPresencial === true &&
        this.state.checkboxDistancia === false
      ) {
        cursos = cursos.filter(function(valor){
          return valor.course.kind === "Presencial";
        });
      } else if (
        this.state.checkboxPresencial === false &&
        this.state.checkboxDistancia === true
      ) {
        cursos = cursos.filter(function(valor){
          return valor.course.kind === "EaD";
        });
      }

      if (this.state.intervaloPreco !== 10000) {
        cursos = cursos.filter(function(valor){
          return valor.price_with_discount < intervaloPreco;
        });
      }

      this.setState({
        cursos
      });
    } else {
      this.setState({
        cursos: this.state.cursosEstatico
      });
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
        // cursos: this.state.cursosEstatico
      },
      function() {
        this.refresh();
      }
    );    
  }

  handleRangeChange(event) {
    this.setState(
      {
        intervaloPreco: event
      },
      function() {
        this.refresh();
      }
    );    
  }

  handleChangeCheckCursos(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkboxCursosItens: prevState.checkboxCursosItens.set(item, isChecked) }));    
  }

  salvaCursoFavorito() {      
    this.closeModal()
    
    const cursoMaisFaculdade = this.state.checkboxCursosItens;
    cursoMaisFaculdade.forEach(function(value, key, map){
      if(!value){
        map.delete(key)
      }
    });

    var cursosEstatico = this.state.cursosEstatico;
    var listaNomeCursos = cursoMaisFaculdade.keys() 
    listaNomeCursos = Array.from(listaNomeCursos)

    var listaDeObjetosFavoritos = [];

    listaNomeCursos.forEach(function(valor, indice, array){
      const filtro = valor.split("-");
      var nomeCurso = filtro[0];
      var nomeUniversidade = filtro[1];

      listaDeObjetosFavoritos = listaDeObjetosFavoritos.concat(cursosEstatico.filter(function(valor){
        return valor.course.name === nomeCurso;
      }).filter(function(valor){
        return valor.university.name === nomeUniversidade;
      }));
    })

    console.log(listaDeObjetosFavoritos)

    const cursosAnteriores = JSON.parse(localStorage.getItem("favoritos"));

    // console.log(cursosAnteriores);

    if(cursosAnteriores !== null){
      localStorage.setItem("favoritos", JSON.stringify(listaDeObjetosFavoritos));
      this.setState({
        cursosFavoritos: listaDeObjetosFavoritos
      }) 
    } else {
      localStorage.setItem("favoritos", JSON.stringify(listaDeObjetosFavoritos));
      this.setState({
        cursosFavoritos: listaDeObjetosFavoritos
      }) 
    }
  }

  excluirCursoFavorito(e){
    const cursosFavoritos = JSON.parse(localStorage.getItem("favoritos"));
    var filtros = e.target.value.split("-");
    var nomeCurso = filtros[0];
    var nomeUniversidade = filtros[1];

    var novaLista = cursosFavoritos.filter(el => el.course.name !== nomeCurso).filter(el => el.university.name !== nomeUniversidade);
    format(novaLista);

    function format(obj) {
      return JSON.stringify(obj, null, " ");
    }

    localStorage.setItem("favoritos", JSON.stringify(novaLista));
    this.setState({
      cursosFavoritos: novaLista
    }) 
  }

  filtraSemestre(e){
    const cursosFavoritos = JSON.parse(localStorage.getItem("favoritos"));
    console.log(cursosFavoritos)
    const semestre = e.target.value;

    // Primeiro semestre
    var inicioSemestre1 = new Date("01-01-2019");
    var fimSemestre1 = new Date("01-07-2019");

    var produtosPrimeiroSemestre = cursosFavoritos.filter(function (a) {
      var hitDates = a.start_date || {};
      console.log(hitDates)

      // extract all date strings
      hitDates = Object.keys(hitDates);
      // convert strings to Date objcts
      hitDates = hitDates.map(function(date) { return new Date(date); });
      // filter this dates by startDate and endDate
      var hitDateMatches = hitDates.filter(function(date) { return date >= inicioSemestre1 && date <= fimSemestre1 });
      // if there is more than 0 results keep it. if 0 then filter it away
      return hitDateMatches.length>0;
    });

    // console.log(produtosPrimeiroSemestre)

  }

  // Modal
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="conteudo-pagina">
        <BreadCrumbs />

        <div className="titulo-pagina">
          <div className="container">
            <h2>Bolsas Favoritas</h2>
            <p>
              Adicione bolsas de cursos e faculdades do seu interesse e receba
              atualizações com as melhores ofertas disponíveis.
            </p>
          </div>
        </div>

        <FiltraSemestre
          filtraSemestre={this.filtraSemestre}
        />

        <div className="bolsas">
          <div className="container">
            <div className="item adicionar">
              <a href="#add-favoritos" onClick={this.openModal}>
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

            <ListaFavoritos
              cursosEstatico={this.state.cursosEstatico}
              cursosFavoritos={this.state.cursosFavoritos}
              excluirCursoFavorito={this.excluirCursoFavorito}
            />
          </div>
        </div>

        <div id="add-favorito" />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          // contentLabel="add-favoritos"
        >
          <AddFavorito
            cursos={this.state.cursos}
            cursosEstatico={this.state.cursosEstatico}
            selectCidades={this.state.selectCidades}
            selectNomeCurso={this.state.selectNomeCurso}
            checkboxPresencial={this.state.checkboxPresencial}
            checkboxDistancia={this.state.checkboxDistancia}
            intervaloPreco={this.state.intervaloPreco}
            checkboxCursosItens={this.state.checkboxCursosItens}
            handleChangeCheckCursos={this.handleChangeCheckCursos}
            handleRangeChange={this.handleRangeChange}
            handleChange={this.handleChange}
            salvaCursoFavorito={this.salvaCursoFavorito}
            closeModal={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
}
