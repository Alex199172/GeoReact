import React from 'react';
import {useNavigate} from "react-router-dom";
import '../styles/MenuChoice.css';

const MenuChoice = () => {
  const navigate = useNavigate()

  function locationGame() {
    navigate('/game')
  }

  function locationGameMultiplay() {
    navigate('/game-multiplay')
  }

  function locationTraning() {
    navigate('/traning')
  }

  return (
    <div className="rg__fon d-flex justify-content-center align-items-center">
     <div className="country__form">
      <h1>
        Choose to play or train
      </h1>
      <div className="pt-2 p-4">
        <button
            type="submit"
            className="btn__country mt-1 fs-3"
            onClick = {locationGame}
            >
            Single player game
         </button>
         <button
             type="submit"
             className="btn__country mt-3 fs-3"
             onClick = {locationGameMultiplay}
             >
             Multiplayer game
          </button>
         <button
             type="submit"
             className="btn__country mt-3 fs-3"
             onClick = {locationTraning}
             >
             Training
          </button>
          </div>
       </div>
    </div>
  );
};

export default MenuChoice;
