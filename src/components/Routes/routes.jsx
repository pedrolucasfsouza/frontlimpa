import React from "react";
import Form from "../Formanalise/Formanalise"
import Homepage from "../Home/Home"
import Adm from "../Adm/Adm"
import Login from "../Login/Login"
import Upload from "../Upload/Upload"
import Enviado from "../Enviado/Enviado"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/enviado" exact component={Enviado} />
        <Route path="/form-analise" exact component={Form} />
        <Route path="/login" exact component={Login} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/adm" exact component={Adm} />
      </Switch>
    </Router>
  );
};
