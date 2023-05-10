import React, { useState } from 'react';
import '../noTocar/FileUploader.css'

export function FileUploader() {
  const [bucket, setBucket] = useState('');
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');

  //envia el archivo
  const handleSubmit = (e) => {
    e.preventDefault();

    //objeto que se enviara
    const formData = new FormData();
    formData.append('bucket', bucket);
    formData.append('file', file);
    formData.append('fileUrl', downloadLink)

    uploadFile(formData);
  };

  //toma el archivo que se va a subir
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const url = "http://18.117.98.49:5000/api/v1/files/upload";
  //subir archivo
  const uploadFile = (formData) => {
    fetch(url , {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        setImageUrl(data.Location);
        setDownloadLink(data.Location);
      });
  };

  return (
    <div className='FileUploader'>
      <form className='FileUploader-form' onSubmit={handleSubmit}>
        <label className='FileUploader-label' htmlFor="buckets">Bucket:</label>
        <input
          className='FileUploader-input'
          type="text"
          id="buckets"
          value={bucket}
          onChange={(e) => setBucket(e.target.value)}
        />

        <label className='FileUploader-label' htmlFor="file">File:</label>
        <input
          className='FileUploader-input-file'
          type="file"
          id="file"
          onChange={handleFileChange}
        />

        <button className='FileUploader-form-btn' type="submit">Upload</button>
      </form>

      {imageUrl && <img src={imageUrl} alt="Uploaded file" />}
      {downloadLink && (
        <a href={downloadLink} target="_blank" rel="noreferrer">
          Download
        </a>
      )}
    </div>
  );
};
