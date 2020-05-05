import React from "react";
import Form from "../Formanalise/Formanalise"
import Homepage from "../Home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

export default (Routes) => {
  return (
    <Router>
      <Switch>
      <Route path="/" exact={true} component={Homepage} />
        <Route path="/form-analise" exact={true} component={Form} />
      </Switch>
    </Router>
  );
};
