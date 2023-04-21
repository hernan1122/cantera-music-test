import React from "react";
import '../styles/Category.css'

//aca importamos un icono
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { AiFillAudio } from 'react-icons/ai';
import { ImBooks } from 'react-icons/im';

export function Category (){
  return (
    <div className="Category">
      <h2>Categorías</h2>
      <div className="Category-container">
        <div className="Category-content">
          <div className="circle">
            <BsMusicNoteBeamed className="Category-icons"/>
          </div>
          <h3>Música</h3>
        </div>
        <div className="Category-content">
          <div className="circle">
            <AiFillAudio className="Category-icons"/>
          </div>
          <h3>Podcast</h3>
        </div>
        <div className="Category-content">
          <div className="circle">
            <ImBooks className="Category-icons"/>
          </div>
          <h3>A. Libros</h3>
        </div>
      </div>
    </div>
  )
}
