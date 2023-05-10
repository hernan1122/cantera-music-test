import React, { useState, useEffect } from 'react';
import '../styles/Add.css'

export function AddFile({ see, notSee }) {
  const [nameFile, setNameFile] = useState('')
  const [nameAuthor, setNameAuthor] = useState('')
  const [category, setCategory] = useState(null)
  const [genres, setGenres] = useState(null)
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('')
  const [formData, setFormData] = useState(new FormData());

  useEffect(() => {
    const url = "http://18.117.98.49:5000/api/v1/files/upload";
    
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFileUrl(data.Location);
      });
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //objeto que se enviara
    const newFormData = new FormData();
    newFormData.append('nameFile', nameFile)
    newFormData.append('nameAuthor', nameAuthor)
    newFormData.append('file', file);
    newFormData.append('fileUrl', fileUrl)

    setFormData(newFormData);
  }

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0])
  };

  const handleClick = () => {
    notSee(false)
  }

  return (
    <>
      {see &&
        <div className='App'>
          <div className="App-container">
            <h2>Agrega Tu <span>Archivo</span></h2>
            <form onSubmit={handleSubmit} className='App-content'>

              <div className='App-content-input'>
                <label className='name'>Nombre</label>
                <input
                  className='App-input'
                  type="text"
                  id='name'
                  value={nameFile}
                  onChange={(e) => setNameFile(e.target.value)}
                />
              </div>

              <div className='App-content-input'>
                <label className='artist'>Artista / Autor</label>
                <input
                  className='App-input'
                  type="text"
                  id='artist'
                  value={nameAuthor}
                  onChange={(e) => setNameAuthor(e.target.value)}
                />
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
                  onChange={handleFileInputChange}
                />
              </div>

              <div className="App-container-btn">
                <button className='App-btn-cancel' onClick={handleClick}>Cancelar</button>
                <button type='submit' className='App-btn-save'>Guardar</button>
              </div>

            </form>
          </div>
        </div>
      }
    </>
  );
}
