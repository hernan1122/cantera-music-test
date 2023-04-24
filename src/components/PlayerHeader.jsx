import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/PlayerHeader.css'

//Icons 
import {BsArrowLeftShort} from 'react-icons/bs'
import{BsMusicNoteList} from 'react-icons/bs'
function PlayerHeader() {
  return (
    <div className='PlayerHeader'>
      <Link to='/'>
        <BsArrowLeftShort className='PlayerHeader-Icon'/>
      </Link>
      <h2>Reproduciendo</h2>
      <BsMusicNoteList className='PlayerHeader-Icon' />
    </div>
  );
}

export default PlayerHeader;