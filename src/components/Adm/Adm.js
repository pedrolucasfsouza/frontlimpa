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
    const response = await api.get(`/`);
    const data = response.data.map(t => t);
    this.setState({ cases: data })
    
}



render() {

  const { cases } = this.state;
  
  return (
    <>
    <Header />
<div className="container-adm">
<h1>CASOS EM ABERTO:</h1>
{cases.map(c =><article><h3>#{c.id}</h3>
    <h3>{}</h3>
    <h3>{c.User.name}</h3>
    <h3>{c.User.phone}</h3>
    <h3>{c.User.email}</h3>
<h2>Aguardando Analise</h2>
    <div class="caso-texto">
    <p>{c.description}</p></div></article> )}
    </div></>

  );
}}
