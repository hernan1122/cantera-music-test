import React from 'react';
import '../styles/Add.css'

export function Add({ see, notSee }) {
  const handleClick = () => {
    notSee(false)
  }

  return (
    <>
      {see &&
        <div className='App'>
          <div className="App-container">
            <h2>Agrega Tu Archivo</h2>
            <div className='App-content'>
              <div className='App-content-input'>
                <label className='name'>Nombre</label>
                <input className='App-input' type="text" />
              </div>
              <div className='App-content-input'>
                <label className='artist'>Artista / Autor</label>
                <input className='App-input' type="text" />
              </div>
              <div className='App-content-input'>
                <label className='category'>Categorías</label>
                <select className='App-input' >
                  <option value="" disabled selected hidden></option>
                  <option>Música</option>
                  <option>Podcast</option>
                  <option>Audio libro</option>
                </select>
              </div>
              <div className='App-content-input'>
                <label className='genres'>Géneros</label>
                <select className='App-input' >
                  <option value="" disabled selected hidden></option>
                  <option>Comedia</option>
                  <option>Reggaeton</option>
                  <option>Misterio</option>
                </select>
              </div>
              <div className='App-content-input'>
                <label className='file'>Archivo</label>
                <input
                  className='App-input-audio'
                  type="file"
                  name="uploads"
                  accept=".mp3"
                  multiple
                />
              </div>
              <div className="App-container-btn">
                <button className='App-btn-cancel' onClick={handleClick}>Cancelar</button>
                <button className='App-btn-save'>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
