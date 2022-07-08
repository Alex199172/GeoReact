import React from 'react';
import '../styles/Timer.css';

const Timer = ( props ) => {

  return (
    <div>
      <div className={`position-absolute top-0 start-50 translate-middle-x timer p-2 d-flex ${props.colorTimer === true ? 'timerColor' : ''}`}>
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
              {props.seconds < 10 ? "0" + props.seconds : props.seconds}
            </span>
            </div>
      </div>
      <button
      className="position-absolute top-0 start-50 translate-middle-x start__btn position-absolute"
      onClick={props.startTimer}
      disabled={props.disabled === true ? props.disabled : ''}
      >
        start
      </button>
    </div>
  );
};

export default Timer;
