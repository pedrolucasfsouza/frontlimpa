import React from "react";
import "../Formanalise/styles.css";
import TextField from '@material-ui/core/TextField';
import Header from "../../components/Header/Header"


function Formanalise() {
  return (
    
    <>
    <Header />
 <div className="container-content">
   <h1>CONTE PARA NÓS</h1>
   <h3>Sobre o seu caso... Nosso time de advogados irá analisar e retornar em até 12h</h3>
   <div className='form'>
        <TextField className="input-small" required id="standard-required" label="Digite seu nome" defaultValue="" />
        <TextField className="input-small" required id="standard-required" label="Digite seu e-mail" defaultValue="" />
        <TextField className="input-small" required id="standard-required" label="Digite seu Telefone com DDD" placeholder="ex: 27 9999-9999" defaultValue="" />
        <TextField
          id="outlined-multiline-static"
          label="Descreva seu caso"
          className="input-big"
          multiline
          rows={5}
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
       <a href="enviar">SOLICITAR ANALISE GRATUITA</a>
       </div>
        </div>
 </div>
 </>
  );
}

export default Formanalise;
