import React from "react";
import "../styles/PlayerHeader.css";

//Icons
import { BsArrowLeftShort } from "react-icons/bs";
import { BsMusicNoteList } from "react-icons/bs";
function PlayerHeader(props) {
  return (
    <div className="PlayerHeader">
      <BsArrowLeftShort className="PlayerHeader-Icon" />
      <h2>Hola Soy Marlene</h2>
      <BsMusicNoteList className="PlayerHeader-Icon" />
    </div>
  );
}

export default PlayerHeader;
