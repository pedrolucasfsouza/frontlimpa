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
      url:'/enviar',
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

    return(
    <>
    <Header />
 <div className="container-content">
 <div className="container-title">
   <h1>CONTE PARA NÓS</h1>
   <h3>Sobre o seu caso... Nosso time de advogados irá analisar e retornar em até 12h</h3>
  </div>
   <div className='form'>
     <div className="input-texts">
        <TextField className="input-small" name="nome" required id="standard-required" value={nome} onChange={this.onChange}label="Digite seu nome" defaultValue="" />
        <TextField className="input-small" name="email"required id="standard-required" value={email} onChange={this.onChange}label="Digite seu e-mail" defaultValue="" />
        <TextField className="input-small" name="phone" required id="standard-required" value={phone} onChange={this.onChange}label="Digite seu Telefone com DDD" placeholder="ex: 27 9999-9999" defaultValue="" />
        
        </div>
       
        <TextField
          onChange={this.onChange}
          value={description}
          id="outlined-multiline-static"
          label="Observações e detalhes"
          className="input-big"
          multiline
          rows={4}
          name="description"
          defaultValue=""
          placeholder="Descreva um pouco sobre o seu caso com detalhes"
          variant="outlined"
        />
        </div>
        <div className="content-upload">
        <p>Anexe a foto da sua multa</p>
        <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>
        <div className="botao-analise">
        <button type="submit" onClick={() => this.onSubmit()}>ENVIAR ANALISE</button>
       </div>
        </div>
 </div>
 </>
  )}}