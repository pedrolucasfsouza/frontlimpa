import React from "react";
import "../Beneficios/styles.css";
import beneficio from "../../img/beneficio.svg"

function Content() {
  return (
<div className="content-beneficios">

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>CELULAR</h1>
      <p>Usamos o celular para quase tudo na nossa rotina, mas não podemos manusear quando estamos no trânsito. Utilizar o celular no trânsito é uma infração média!</p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>VELOCIDADE</h1>
      <p>Fique ligado nos limites de velocidade das vias, trafegar 20% acima da velocidade permitida, é uma infração média.</p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>ESTACIONAMENTO</h1>
      <p>Muito cuidado com as paradas rápidas em locais proibidos para resolver pequenas coisas, isso pode complicar a sua vida. É uma multa gravíssima. </p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>VIA EXCLUSIVA</h1>
      <p>A faixa exclusiva de ônibus sempre está livre, cuidado ao trafegar nela, querer chegar um pouco mais rápido em casa pode custar uma infração de natureza grave. </p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>SEMÁFORO</h1>
      <p>Acelerar quando o semáforo fica amarelo, faz com que a maioria das pessoas passe em sinal vermelho, o que é passível de multa.</p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>LEI SECA</h1>
      <p>Bebida e direção não combinam, quando beber não dirija. Condutores alcolizados produzem mais acidentes.</p>
    </div>


</div>
  );
}

export default Content;
