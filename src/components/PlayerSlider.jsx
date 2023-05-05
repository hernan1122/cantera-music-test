import {React, useState, useEffect, useRef} from "react";
import { PlayerButtons } from "./PlayerButtons";
import '../styles/PlayerSlider.css'

export function PlayerSlider({data}) {
  const [songDescription, setSongDescription] = useState({name:'' , artist: ''})
  const [isPlaying, setIsPlaying] = useState(true)
  const [index, setIndex] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    setSongDescription({name: data[index].nameFile, artist: data[index].nameAuthor})
  }, [index])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const updateIndex = (newVal) => {
    setIndex(newVal)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={data[index].fileUrl}
        autoPlay
        loop
      >
      </audio>
      <div className='PlayerSlider'>
        <div className="PlayerSlider-container-slider">
          <section>
            {index<1 ? <div className="none"></div> :<img src={data[index-1].imageUrl} alt="" />}
          </section>
          <section>
            <img src={data[index].imageUrl} alt="" />
          </section>
          <section>
            {index>=data.length-1 ?  <div className="none"></div> : <img src={data[index+1].imageUrl} alt="" />}
          </section>
        </div>
      </div>
      <section className='PlayerSlider-container-description'>
        <div className="PlayerSlider-description">
          <h4>{songDescription.name}</h4>
          <p>{songDescription.artist}</p>
        </div>
        <div className="Progressline">
          <div></div>
        </div>
        <div className="PlayerSlider-TimeContainer">
          <span>1:20</span>
          <span>2:40</span>
        </div>
      </section>
      <PlayerButtons isPlaying={isPlaying} handlePlayPause={handlePlayPause} data={data} index={index} updateIndex={updateIndex}/>
    </>
  );
}
