import React from "react";
import '../styles/NotFound.css'

import logoApp from '../images/cat.png';
import imgError from '../images/pexels-lucas-pezeta-2930204.png'

export function NotFound(){
  return(
    
    <div className='Header'>
      <div className="Header-title">
        <div className="Header-content-title">
          <img className="Header-logoApp" src={logoApp} alt="" />
            <h1>Cantera <span>Music</span></h1>      
        </div>
      </div>
      <main>
      <div className="content-imgError">
          <img className="imgError" src={imgError} alt="gatoBurlon" />
          <h1 className="Error-LineText">Oops!<br/>Algo salió Mal!!!</h1>          
          <button className="error-volver">Volver</button>         
      </div>
      </main>      
    </div>    
  )
}