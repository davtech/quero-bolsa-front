import React from "react";
import { Route, Switch } from "react-router-dom";

import BolsasFavoritas from "./pages/bolsasFavoritas";
import MinhaConta from "./pages/minhaConta";
import PreMatriculas from "./pages/preMatriculas";

export default props => (
  <Switch>
    <Route exact path="/" component={BolsasFavoritas} />
    <Route path="/bolsas-favoritas" component={BolsasFavoritas} />
    <Route path="/minha-conta" component={MinhaConta} />
    <Route path="/pre-matriculas" component={PreMatriculas} />
  </Switch>
)
