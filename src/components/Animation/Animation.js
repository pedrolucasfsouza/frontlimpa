import React, { useEffect, useRef } from "react";
import "../Animation/styles.css";
import lottie from 'lottie-web'

function Animation() {

  const container = useRef(null)

  useEffect(() =>{
  lottie.loadAnimation({
    container:container.current,
  renderer:'svg',
loop:true,
animationData:require('../../img/analise.json')  
})
}, [])


  return (
 <>
<div id="container-animation-home">
<div className="animation"ref={container}></div>
<div id="container-text-home"><h1>RECURSO PERSONALIZADO.</h1>
<p>Nosso corpo jurídico está pronto para atender a sua solicitação, contamos com profissionais especializados no <b>recurso de multas.</b> O seu recurso não será examinado de maneira genérica. Cada recurso é diagnosticado de maneira exclusiva e única. Os nossos profissionais estão capacitados para encontrar a melhor alternativa para o seu recurso. </p>
<a href="/form-analise">SOLICITAR ÁNALISE GRATUITA!</a>
</div>
</div>
 </>
  );
}

export default Animation;
