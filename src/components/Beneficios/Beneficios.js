import React from "react";
import "../Beneficios/styles.css";
import beneficio from "../../img/beneficio.svg"

function Content() {
  return (
<div className="content-beneficios">

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>MULTA</h1>
      <p>As multas são classificadas por sua natureza, em escala ascendente de gravidade, são classificas por leve, média, grave e gravíssima. Levou alguma multa? Podemos te ajudar, faça seu orçamento gratuito.</p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>SUSPENSÃO</h1>
      <p>A suspensão da CNH, ocorre, quando o condutor atinge o número máximo de 20 ou mais pontos, dentro de 12 meses, por qualquer infração. Nesta hipótese a CNH, pode ficar suspensa pelo prazo de 6 e 12 meses. Teve sua carteira suspensa? Conte com nosso time, realize seu orçamento grátis.</p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>CASSAÇÃO</h1>
      <p>É a maior penalidade do CTB (Código de Trânsito Brasileiro). O condutor é punido quando há reincidência de infrações que causam  suspensão direta, se aconteceram no prazo de um ano após a primeira suspensão. A cassação também é punível quando o condutor comete algum delito de trânsito.</p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>LEI SECA</h1>
      <p>A lei seca, tem consequências, para os que tem a embriaguez confirmada e para aqueles que se recusam a fazer o teste de bafômetro, que são a multa no valor de R$ 2.934,70, suspensão do direito de dirigir e recolhimento da CNH. Parou na blitz da lei seca, quer continuar dirigindo? Entre em contato com nosso time e faça seu orçamento gratuito! Nós preparamos o seu recurso.</p>
    </div>


</div>
  );
}

export default Content;
