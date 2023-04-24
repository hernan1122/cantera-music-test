import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Categories.css'

//aca importamos un icono
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { CgMediaPodcast } from 'react-icons/cg';
import { ImBooks } from 'react-icons/im';
import { MdMenuBook } from 'react-icons/md';

export function Categories (){
  return (
    <div className="Categories">
      <h2>Categorías</h2>
      <div className="Categories-container">
        <Link className="Categories-content" to='/category'>
          <div className="circle">
            <BsMusicNoteBeamed className="Categories-icons"/>
          </div>
          <h3>Música</h3>
        </Link>
        <Link className="Categories-content" to='/category'>
          <div className="circle">
            <CgMediaPodcast className="Categories-icons"/>
          </div>
          <h3>Podcast</h3>
        </Link>
        <Link className="Categories-content" to='/category'>
          <div className="circle">
            <MdMenuBook className="Categories-icons"/>
          </div>
          <h3>A. Libros</h3>
        </Link>
      </div>
    </div>
  )
}
