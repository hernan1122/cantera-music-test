import React from "react";
import '../styles/Player.css'
import {FooterMenu} from "./FooterMenu"
import { PlayerButtons } from './PlayerButtons';

import PlayerHeader from "./PlayerHeader";
import PlayerSlider from "./PlayerSlider";
export function Player() {
  return (
    <div className="Player">
      <PlayerHeader />
      <PlayerSlider/>
      <PlayerButtons />
      <FooterMenu/>
    </div>
  )
}