import React from "react";
import '../styles/Player.css'
import {FooterMenu} from "../components/FooterMenu"
import { PlayerButtons } from '../components/PlayerButtons';

import PlayerHeader from "../components/PlayerHeader";
import PlayerSlider from "../components/PlayerSlider";
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