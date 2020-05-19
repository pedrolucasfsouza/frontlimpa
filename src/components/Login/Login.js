import React, {Component} from "react";
import "../Login/styles.css";
import TextField from '@material-ui/core/TextField';
import Header from "../../components/Header/Header"
import api from "../../components/services/api"

export default class Formanalise extends Component {
  state = {
    name:'',
    password:''
}

onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

onSubmit = (e) => {
    // get our form data out of state
    const { nome, password} = this.state;
    api.post('/login', {
      name:nome,
      password:password,
    })
    .then((result) => {
    //redireciona o usuário para o /users 
      return window.location.href = "/adm"
  })}

render() {
  const { nome, password} = this.state;

    return(
    <>
    <Header />
 <div className="container-content">
  
   <div className='form'>
   <h1>LOGIN</h1>
        <TextField className="input-small" name="nome" required id="standard-required" value={nome} onChange={this.onChange}label="Digite seu nome" defaultValue="" />
        <TextField className="input-small" name="password"required id="standard-required" value={password} onChange={this.onChange}label="Digite seu e-mail" defaultValue="" />
        <button type="submit">Login</button>
        </div>
 </div>
 </>
  )}}