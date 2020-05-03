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
          <h1>AQUI VAI UM TÍTULO EM CAIXA ALTA</h1>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </p>
        <div className="link-sub">
          <a href="#">SOLICITAR ANALISE GRÁTIS</a>
        </div>
      </div>
    </div>
  );
}

export default Subcontent;
