import React, { useEffect, useRef } from "react";
import "../Enviado/styles.css";
import Header from "../Header/Header"
import lottie from 'lottie-web'

function Enviado() {

  const container = useRef(null)

  useEffect(() =>{
  lottie.loadAnimation({
    container:container.current,
  renderer:'svg',
loop:true,
animationData:require('../../img/ok2.json')  
})
}, [])


  return (
 <>
 <Header />
 <div className="container-enviado">
<div className="animation"ref={container}></div>
   <div className="texto-enviado">
    
<h1>SOLICITAÇÃO DE ÁNALISE ENVIADA COM SUCESSO!</h1>

<h2>Fique atento ao seu email e whatsapp, iremos retornar em até 12h úteis</h2>
</div>

 </div>
 </>
  );
}

export default Enviado;
