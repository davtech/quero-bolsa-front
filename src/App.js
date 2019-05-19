import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Main from "./main";
import Header from './templates/header';
import logo from './images/logo.svg';
import './styles/App.css';

library.add(faInfoCircle, faUserCircle, faWhatsapp)

export default props => (
  <div className='application'>  
      <Header />
      <Main />    
  </div>
)
