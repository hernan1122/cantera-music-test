import React, { useState } from "react";
import { Link } from 'react-router-dom'
import '../styles/FooterMenu.css'

//icons
import { BiCategory } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { BiAddToQueue } from 'react-icons/bi'
import { Add } from "./Add";

export function FooterMenu({ see, notSee }) {
  const [seeModal, setSeeModal] = useState(false);

  const closeAdd = () => {
    setSeeModal(!seeModal);
    console.log('holaaaaa');
  }

  return (
    <div className='FooterMenu'>
      <Link className='FooterMenu-link' to='/'>
        <BiCategory className='FooterMenu-icons' />
        <h6>Categorías</h6>
      </Link>
      <Link className='FooterMenu-link' to='/'>
        <HiHome className='FooterMenu-icons' />
        <h6>Inicio</h6>
      </Link>
      <div className='FooterMenu-link' onClick={closeAdd}>
        <BiAddToQueue className='FooterMenu-icons' />
        <h6>Agregar</h6>
      </div>
      <Add see={seeModal} notSee={setSeeModal} />
    </div>
  );
}
