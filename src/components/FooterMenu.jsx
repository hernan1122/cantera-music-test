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
        <h5>Categorías</h5>
      </Link>
      <Link className='FooterMenu-link' to='/'>
        <HiHome className='FooterMenu-icons' />
        <h5>Home</h5>
      </Link>
      <Link className='FooterMenu-link' to='/'>
        <BiAddToQueue className='FooterMenu-icons' />
        <h5>Agregar</h5>
      </Link>
    </div>
  );
}
