import React from "react";
import people from "../../img/placas-header-2.png";
import "../Content/styles.css";

function Content() {
  return (
    <div className="content">
      <div className="texto">
        <h1>FOI MULTADO?</h1>
        <h3>Recebeu um comunicado do DETRAN?</h3>
        <p>
        Entre em contato, com nosso <b>time de especialistas</b>, e realize uma <b>ánalise gratuita.</b> Retornaremos, com os trâmites administrativos, para realizar o <b>cancelamento da sua multa!</b>
        </p>
        <div className="botao">
          <a href="/form-analise">SOLICITAR ANALISE GRÁTIS</a>
        </div>
      </div>
      <div className="img-content">
        <img src={people} className="img" alt="logo" />
      </div>
    </div>
  );
}

export default Content;
