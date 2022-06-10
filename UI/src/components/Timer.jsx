import React from 'react';
import {useState} from 'react';
import '../styles/Timer.css';

const Timer = ( props ) => {
  let [seconds, setSeconds] = useState(20);
  const [colorTimer, setColorTimer] = useState(false);
  const [disabled, setDisabled] = useState(false);


  function timerAudio() {
    let timeAudio = new Audio('assets/audio/time.mp3');
    timeAudio.play();
  }

  function timerRandomCountries() {
    props.changeRandomCountry()
    console.log(props)
  }

  function timerShowModal() {
    props.showModal()
  }

  function timerHidenModal() {
    props.hidenModal()
    props.setRandomCountry(() => props.setRandomCountry(''))
    setDisabled(() => setDisabled(false))
    setColorTimer(() => setColorTimer(false))
    setSeconds(seconds = 20)
    startTimer()
  }

  function startTimer() {

  timerRandomCountries()
  setDisabled(() => setDisabled(true))

  let newSetInterval = setInterval(() => {
      setSeconds(seconds = seconds-1);
      if(seconds < 10) {
        setSeconds(seconds = '0' + seconds);
      }
      if(seconds === 5) {
        timerAudio()
        setColorTimer(() => setColorTimer(true))
      }
      if(seconds <= 0) {
       clearInterval(newSetInterval);
       timerShowModal()
      }
    }, 1000);

  }

  return (
    <div>
      <div className={`position-absolute top-0 start-50 translate-middle-x timer p-2 d-flex ${colorTimer === true ? 'timerColor' : ''}`}>
          <div className="hours fs-2">
            <span>
              00:
            </span>
            </div>
          <div className="minuts fs-2">
            <span>
              00:
            </span>
            </div>
          <div className="seconds fs-2">
            <span>
              {seconds}
            </span>
            </div>
      </div>
      <button
      className="position-absolute top-0 start-50 translate-middle-x start__btn position-absolute"
      onClick={startTimer}
      disabled={disabled === true ? disabled : ''}
      >
        start
      </button>
    </div>
  );
};

export default Timer;
