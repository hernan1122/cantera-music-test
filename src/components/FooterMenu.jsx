import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/FooterMenu.css'

//icons
import { BiCategory } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { BiAddToQueue } from 'react-icons/bi'

export function FooterMenu() {
  return (
    <div className='FooterMenu'>
      <Link className='FooterMenu-link' to='/player'>
        <BiCategory className='FooterMenu-icons' />
        <h6>Categorías</h6>
      </Link>
      <Link className='FooterMenu-link' to='/'>
        <HiHome className='FooterMenu-icons' />
        <h6>Inicio</h6>
      </Link>
      <Link className='FooterMenu-link' to='/'>
        <BiAddToQueue className='FooterMenu-icons' />
        <h6>Agregar</h6>
      </Link>
    </div>
  );
}
