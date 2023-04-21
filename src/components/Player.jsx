import React from "react";
import '../styles/Player.css'


import PlayerHeader from "./PlayerHeader";
import PlayerSlider from "./PlayerSlider";
export function Player() {
  return (
    <div className="Player">
      <PlayerHeader />
      <PlayerSlider/>
    </div>
  )
}