import React from "react";
import "../Beneficios/styles.css";
import beneficio from "../../img/beneficio.svg"

function Content() {
  return (
<div className="content-beneficios">

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>Titulo Aqui</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>Titulo Aqui</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>Titulo Aqui</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    </div>

    <div className="content-beneficios-item">
      <img className="content-beneficios-img"src={beneficio}></img>
      <h1>Titulo Aqui</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    </div>


</div>
  );
}

export default Content;
