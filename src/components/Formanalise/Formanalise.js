import React, {Component} from "react";
import "../Formanalise/styles.css";
import TextField from '@material-ui/core/TextField';
import Header from "../../components/Header/Header"
import api from "../../components/services/api"

export default class Formanalise extends Component {
  state = {
    nome:'',
    email:'',
    phone:'',
    description:'',
}

onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

onSubmit = (e) => {
    // get our form data out of state
    const { nome, email, phone, description } = this.state;
    api.post('/enviar', {
      name:nome,
      email:email,
      phone:phone, 
      description:description
    })
    .then((result) => {
    //redireciona o usuário para o /users 
      return window.location.href = "/enviado"
  })}

render() {
  const { nome, email, phone, description } = this.state;

    return(
    <>
    <Header />
 <div className="container-content">
   <h1>CONTE PARA NÓS</h1>
   <h3>Sobre o seu caso... Nosso time de advogados irá analisar e retornar em até 12h</h3>
   <div className='form'>
        <TextField className="input-small" name="nome" required id="standard-required" value={nome} onChange={this.onChange}label="Digite seu nome" defaultValue="" />
        <TextField className="input-small" name="email"required id="standard-required" value={email} onChange={this.onChange}label="Digite seu e-mail" defaultValue="" />
        <TextField className="input-small" name="phone" required id="standard-required" value={phone} onChange={this.onChange}label="Digite seu Telefone com DDD" placeholder="ex: 27 9999-9999" defaultValue="" />
        <TextField
          onChange={this.onChange}
          value={description}
          id="outlined-multiline-static"
          label="Descreva seu caso"
          className="input-big"
          multiline
          rows={5}
          name="description"
          defaultValue=""
          placeholder="Descreva um pouco sobre o seu caso com detalhes"
          variant="outlined"
        />
        </div>
        <div className="content-upload">
        <p>Anexe imagens da sua multa</p>
        <input type="file"></input>
        <input type="file"></input>
        <div className="botao-analise">
        <button type="submit" onClick={() => this.onSubmit()}>ENVIAR ANALISE</button>
       </div>
        </div>
 </div>
 </>
  )}}