import React, { useState } from "react";
import '../styles/Search.css'

//icons
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from 'react-icons/cg'

export function Search() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`Search ${isOpen && 'open'}`}>
      <div className="Search-container">
        <input type="text" placeholder='Buscar' />
        <div className='Search-icon-container'>
          <AiOutlineSearch className='Search-icon' />
        </div>
      </div>
      <button
        onClick={handleClick}
        className={`bnt-closed ${isOpen && 'open'}`}
        >
          <CgClose className='Search-icon' />
        </button>
    </div>
  );
}
