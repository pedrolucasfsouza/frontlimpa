import React from "react";
import guard from "../../img/guarda.png";
import "../Subcontent/styles.css";

function Subcontent() {
  return (
    <div className="subcontainer">
      <div className="img-sub-content">
        <img src={guard} className="img-sub" alt="logo" />
      </div>
      <div className="texto-sub">
        <p>
          <h1>NÃO FIQUE SEM A SUA HABILITAÇÃO!</h1>
          <p>
          Limpa Multas é uma empresa especializada na elaboração de recursos administrativos ao DETRAN.  Descubra com o limpa multas, como deve ser feito o recurso, para <b>cancelar a sua multa.</b> Você nos envia a documentação necessária, em até 12H, retornaremos com o recurso personalizado para você cancelar a sua multa. 
          </p>
        </p>
        <div className="link-sub">
          <a href="/form-analise">SOLICITAR ANALISE GRÁTIS</a>
        </div>
      </div>
    </div>
  );
}

export default Subcontent;
