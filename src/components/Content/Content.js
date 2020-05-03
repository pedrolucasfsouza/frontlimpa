import React from "react";
import people from "../../img/placas-header-2.png";
import "../Content/styles.css";

function Content() {
  return (
    <div className="content">
      <div className="texto">
        <h1>FOI MULTADO?</h1>
        <h3>Nós realizamos o recurso!</h3>
        <p>
          Solicite uma ÁNALISE GRATUITA do seu caso e descubra se existe
          possibilidade de recurso para solicitar o cancelamento da sua multa.
        </p>
        <div className="botao">
          <a href="#">SOLICITAR ANALISE GRÁTIS</a>
        </div>
      </div>
      <div className="img-content">
        <img src={people} className="img" alt="logo" />
      </div>
    </div>
  );
}

export default Content;
