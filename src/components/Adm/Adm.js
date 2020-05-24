import React, { Component } from "react";
import "../Adm/styles.css";
import Header from "../Header/Header"
import api from "../services/api"

export default class Adm extends Component {
  state = {
      cases: []
  }
  componentDidMount() {
    this.LoadCases()
  }
  LoadCases = async () => {
      const login = this.getParameterByName('login',window.location.href)
      const password = this.getParameterByName('password',window.location.href)
      const response = await api.get(`/?login=`+login+`&password=`+password);
      const data = response.data.map(t => t);
      this.setState({ cases: data })
  }

  getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }


  render() {

    const { cases } = this.state;
    return (
      <>
      <Header />
  <div className="container-adm">
    <h1>CASOS EM ABERTO:</h1><h2>Total de casos em aberto: {cases.length}</h2>

  {cases.map(c =>
  <article><h3>#{c.id}</h3>
      <h3>{c.name}</h3>
      <h3>{c.email}</h3>
      <h3>{c.phone}</h3>
      <h2>Aguardando Analise</h2>
      <div class="caso-texto">
    
      <p>{c.description}</p>
      </div>
      
      <a href={`http://localhost:3000/uploads/${c.multa}`}><img className="multa" src={`http://localhost:3000/uploads/${c.multa}`}></img></a></article> )}
      </div></>

    );
  }
}
