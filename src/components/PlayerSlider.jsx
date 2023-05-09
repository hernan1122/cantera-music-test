import {React, useState, useEffect, useRef} from "react";
import { PlayerButtons } from "./PlayerButtons";
import '../styles/PlayerSlider.css'

export function PlayerSlider({data}) {
  const [songDescription, setSongDescription] = useState({name:'' , artist: ''})
  const [isPlaying, setIsPlaying] = useState(true)
  const [index, setIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const progressBarRef = useRef(null)
  const [totalTime, setTotalTime] = useState('0:00')
  const [currentTimeSong, setCurrentTimeSong] = useState('0:00')
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current && progressBarRef.current) {
        const percent = (audioRef.current.currentTime / duration) * 100;
        progressBarRef.current.style.width = `${percent}%`
      }
      let min = Math.floor(audioRef.current.currentTime / 60);
      let seconds = audioRef.current.currentTime % 60;
      if (seconds <10){
        setCurrentTimeSong(`${min}:0${seconds.toFixed()}`)
      }else{
        setCurrentTimeSong(`${min}:${seconds.toFixed()}`)
      }

    }, 1000)
    let minutos = Math.floor(audioRef.current.duration / 60);
    let segundosRestantes = audioRef.current.duration % 60;

    if (segundosRestantes <10){
      setTotalTime(`${minutos}:0${segundosRestantes.toFixed()}`)
    }else{
      setTotalTime(`${minutos}:${segundosRestantes.toFixed()}`)
    }
    return () => clearInterval(intervalId)
  }, [duration])

  const updateIndex = (newVal) => {
    setIndex(newVal)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  return (
    <>
      <audio
        ref={audioRef}  
        src={data[index].fileUrl}
        autoPlay
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
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
          <div ref={progressBarRef}></div>
        </div>
        <div className="PlayerSlider-TimeContainer">
          <span>{currentTimeSong}</span>
          <span>{totalTime}</span>
        </div>
      </section>
      <PlayerButtons isPlaying={isPlaying} handlePlayPause={handlePlayPause} data={data} index={index} updateIndex={updateIndex}/>
    </>
  );
}




/* import {React, useState, useEffect, useRef} from "react";
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
 */