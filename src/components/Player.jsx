import React, { useState, useEffect } from 'react';
import '../Player.scss';
import source from './alleluia-amen-gael.mp3';

const Player = () => {
  const [audio] = useState(new Audio('https://listen.radioking.com/radio/61201/stream/98566'));
  const [playing, setPlaying] = useState(false);
  const [playControl, setPlayControl] = useState(false);
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  const handlePlay = () => {
    setPlayControl(playControl === false ? true : false);
    setPlaying(!playing);
  };
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, []);
  return (
    <div>
      <div className='player'>
        <div id='info' className={`info ${playControl ? 'active' : 'play'}`}>
          <span className='artist'>En Direct</span>
          <span className='name'>98.5 FM</span>
          <div className='progress-bar'>
            <div className='bar'></div>
          </div>
        </div>
        <div
          id='control-panel'
          className={`control-panel ${playControl ? 'active' : 'play'}`}
        >
          <div className='album-art'></div>
          <div className='controls'>
            
            <div id='play' className='play' onClick={handlePlay}></div>
            <div hidden className='next'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
