import React from 'react';
import {useState} from 'react';
import '../styles/Timer.css';

const Timer = ( props ) => {
  let [seconds, setSeconds] = useState(20);
  let [color, setColor] = useState('red');

  function onChange(v) {
    props.onChangeSpeed(v)
  }

  const startTimer = () => {

  let newSetInterval = setInterval(() => {
      setSeconds(seconds = seconds-1);
      if(seconds < 10) {
        setSeconds(seconds = '0' + seconds);
        onChange(seconds)
      }
      if(seconds <= 0) {
       clearInterval(newSetInterval);
       setSeconds(seconds = 20)
      }
    }, 1000);

  }

  return (
    <div>
      <div className="position-absolute top-0 start-50 translate-middle-x timer p-2 d-flex">
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
      >
        start
      </button>
    </div>
  );
};

export default Timer;
