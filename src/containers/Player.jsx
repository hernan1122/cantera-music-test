import React from 'react';
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import {FooterMenu} from "../components/FooterMenu"
import {api} from '../exports/api';

export function Player() {
  return (
    <div className="Player">
      <PlayerHeader />
      <PlayerSlider data={api} />
      <FooterMenu/>
    </div>
  )
}
