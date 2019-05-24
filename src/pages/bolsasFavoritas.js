import React, { Component } from "react";
import axios from 'axios'

import BreadCrumbs from "../components/breadCrumbs";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AddFavorito from "../servicos/favoritos/addFavorito";


const CURSOS = 'https://testapi.io/api/redealumni/scholarships';


// Definições para o estilo do modal
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.88)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '10px',
    width                 : '100%',
    maxWidth              : '700px'
  }
};

// Identificando id do app para acessibilidade
Modal.setAppElement('#root')


export default class Favoritos extends Component {
  
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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

        <div className="filtro-semestre">
          <div className="container">
            <ul>
              <li className="active"><button className="btn btn-primary primeiro" type="button">Todos os semestres</button></li>
              <li><button className="btn btn-light" type="button">2 semestres</button></li>
              <li><button className="btn btn-light ultimo" type="button">1 semestres</button></li>
            </ul>
          </div>
        </div>

        <div className="bolsas">
          <div className="container">            

            {/* Chama modal e componente adicionar */}
            <div className="item adicionar">
              <a href="#add-favoritos" onClick={this.openModal} >
                <div className="container-item">
                  <div className="adicionar-icone-texto">
                    <FontAwesomeIcon icon="plus-circle" />
                    <p>Adicionar Bolsa</p>
                    <span>Clique para adicionar bolsas de cursos do seu interesse</span>
                  </div>
                </div>
              </a>
            </div>
            {/* fim - elemento chama modal adicionar */}

            {/* Aqui lista as bolsas favoritas*/}


          </div>
        </div>


        {/* aqui vem o conteudo do modal */}
        <div id="add-favorito"></div>



        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="adicionar favorito"
        >          
          <AddFavorito
            closeModal={this.closeModal}
          />

        </Modal>


      </div>
    );
  }
}