import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import "../Formanalise/Ronaldo.css";
import Header from "../../components/Header/Header"
import api from "../../components/services/api"
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

export default class Formanalise extends Component {
  state = {
    nome:'',
    email:'',
    phone:'',
    description:'',
    file: null
}


handleFile(e){
  let file = e.target.file[0]
console.log(this.state.file)
 this.setState({file: file})
}

onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

}

handleFile(e){
  let file = e.target.files[0]
  this.setState({file:file})

}

onSubmit = (e) => {
const {nome, email, phone, description, file} = this.state
  let formdata = new FormData()

  formdata.append('file', file)
  formdata.append('name', nome)
  formdata.append('email', email)
  formdata.append('phone', phone)
  formdata.append('description', description)

  api({
      url:'https://limpamultasapi.ue.r.appspot.com/upload',
      method: 'POST',
      headers:{
          authorization: 'tanto faz',
      },
      data: formdata
  }).then((res) =>{
      console.log('upload realizado com sucesso!')
      return window.location.href = "/enviado"
  },(err)=>{
     console.log(err)
  })
}

render() {

  const { nome, email, phone, description } = this.state;

  const classes = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0),
    },
  }));
    return(
    <>
    <Header />
 <div id="container-flex">
 <div id="container-text-top">
   <h1>CONTE PARA NÓS</h1>
   <h3>Daremos um retorno em até 12h. Fique atento ao seu e-mail e whatsapp.</h3>
  </div>
   <div id='form-case'>
        <Input
        value={nome} onChange={this.onChange} name="nome"
        className="input-form"
          id="input-with-icon-adornment"
          placeholder="Digite seu nome"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />

<Input
        defaultValue={email} onChange={this.onChange}
        className="input-form"
          id="input-with-icon-adornment"
          placeholder="Digite seu e-mail"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />

<Input
        defaultValue={phone} onChange={this.onChange} 
        className="input-form"
          id="input-with-icon-adornment"
          placeholder="Digite seu telefone (com DDD)"
          startAdornment={
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          }
        />

        <TextField
          onChange={this.onChange}
          value={description}
          id="outlined-multiline-static"
          label="Observações e detalhes (opcional)"
          className="input-big"
          multiline
          rows={3}
          name="description"
          defaultValue=""
          placeholder="Descreva um pouco sobre o seu caso com detalhes"
          variant="outlined"
        />
        <div className="texto-end-form">
<p>Forneça as informações corretas, para contato do nosso time</p>
<p>* <b>Caso queira solicitar mais de uma ánalise de multa. Preencha o formulário quantas vezes forem necessárias.</b></p>
</div>
        </div>
        <div id="content-upload-file">
          
        <p>Anexe a foto da sua multa</p>
        <input className="input-upload" type="file" name="file" onChange={(e)=>this.handleFile(e)}/>

        <button className="content-upload-file-button"type="submit" onClick={() => this.onSubmit()}>SOLICITAR ANALISE GRÁTIS</button>
        </div>
 </div>
 </>
  )}}