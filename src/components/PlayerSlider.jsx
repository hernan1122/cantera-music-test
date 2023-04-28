import React from 'react';
import '../styles/PlayerSlider.css'

function PlayerSlider() {
  return (
    <>
      <div className='PlayerSlider'>
        <div className="PlayerSlider-container-slider">
          <section>
            <img src="https://lastfm.freetls.fastly.net/i/u/300x300/248a618cf08723dfccf2a39d3bf143a4.jpg" alt="" />
          </section>
          <section>
            <img src="https://i1.sndcdn.com/artworks-jTy3zaoSBktD4e0K-qvgDwg-t500x500.jpg" alt="" />
          </section>
          <section>
            <img src="https://i.ytimg.com/vi/FpKERvWaWQs/maxresdefault.jpg" alt="" />
          </section>
        </div>
      </div>
      <section className='PlayerSlider-container-description'>
        <div className="PlayerSlider-description">
          <h3>Un Finde</h3>
          <p>Big One ~ Ke Personaje ~ FMK</p>
        </div>
        <div className="Progressline">
          <div></div>
        </div>
        <div className="PlayerSlider-TimeContainer">
          <span>0.43</span>
          <span>2:49</span>
        </div>
      </section>
      
    </>
  );
}

export default PlayerSlider;