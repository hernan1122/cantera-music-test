import React from 'react';
import '../styles/Song.css'

export function Song({title, artist, img}) {
  return (
    <div className='Song'>
      <ul>
        <li>
          <img src={img} alt="" />
          <div className="Song-description">
            <h4>{ title }</h4>
            <p>{ artist }</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
