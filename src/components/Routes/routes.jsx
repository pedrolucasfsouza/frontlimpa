import React from "react";
import Form from "../Formanalise/Formanalise"
import Homepage from "../Home/Home"
import Adm from "../Adm/Adm"
import Login from "../Login/Login"
import Enviado from "../Enviado/Enviado"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default (Routes) => {
  return (
    <Router>
      <Switch>
      <Route path="/" exact={true} component={Homepage} />
      <Route path="/enviado" exact={true} component={Enviado} />
        <Route path="/form-analise" exact={true} component={Form} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/adm" exact={true} component={Adm} />
      </Switch>
    </Router>
  );
};
