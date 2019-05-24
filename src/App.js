import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faUserCircle, faHeart, faComments, faEnvelope, faPlusCircle, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import "normalize.css"
import "./styles/main.scss"


import Header from './templates/header';
import Main from "./main";
import Footer from "./templates/footer"

library.add(faInfoCircle, faUserCircle, faWhatsapp, faHeart, faComments, faEnvelope, faPlusCircle, faArrowDown)

export default props => (
  <div className='application'>  
      <Header />
      <Main />
      <Footer />
  </div>
)
