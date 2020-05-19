import React, { Component } from "react";
import logo from "../../img/logo2.png";
import menu from "../../img/menu.png";
import close from "../../img/sign.svg";
import "../Header/styles.css";

export default class Header extends Component {
  render() {
    const changeMenu = (event) => {
      let menu = document.getElementById("expandemenu");
      if (event == "open") {
        menu.className = "expandemenu on";
      } else if (event == "close") {
        menu.className = "expandemenu off";
      }
    };

    return (
      <>
        <div id="expandemenu" className="expandemenu off">
          <ul>
            <li naorogerio>
              <a href="/">Inicio</a>
            </li>
            <li naorogerio>
              <a href="#">Como Recorrer?</a>
            </li>
            <li naorogerio>
              <a href="#">Sobre Nós</a>
            </li>
            <li naorogerio>
              <a href="#">Depoimentos</a>
            </li>
            <li naorogerio>
              <a href="#">Contato</a>
            </li>
            <li className="menu-mobile-close">
              <a onClick={() => changeMenu("close")}> <img src={close}></img> </a>
            </li>
          </ul>
        </div>
        <div className="Header">
        <div className="menu-mobile">
          <a onClick={() => changeMenu("open")}><img className="menu-icon" src={menu}></img></a>
          </div>
          
          <div className="menu-mobile-content">
          <div className="logo">
            <img src={logo} className="logo" alt="logo" />
          </div>
          </div>
          <div className="botoes">
            <div className="botao1">
              <p>Foi multado? não fique sem dirigir</p>
              <a href="http://google.com.br">SOLICITAR ANÁLISE GRÁTIS</a>
            </div>
          </div>
        </div>
        <div className="menu">
          <a className="menu-mobile" onClick={() => changeMenu("open")}>MENU</a>
          <div className="links">
            <ul>
              <li naorogerio>
                <a href="#">Inicio</a>
              </li>
              <li naorogerio>
                <a href="#">Como Recorrer?</a>
              </li>
              <li naorogerio>
                <a href="#">Sobre Nós</a>
              </li>
              <li naorogerio>
                <a href="#">Depoimentos</a>
              </li>
              <li naorogerio>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
