import React, { useState } from "react";
import "./Header.css";

function Header({ titulo, boton, logo }) {
  return (
    <>

    <link rel="stylesheet" href="..." />
      <nav>
        <div className="encabezado-style">
          <button onClick="#" className="boton-style">
            {boton}
          </button>
          <a href="#!" className="titulo-style">
            {titulo}
          </a>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            {logo}
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
