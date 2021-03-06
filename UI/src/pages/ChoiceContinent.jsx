import React from 'react';
import {useNavigate} from "react-router-dom";
import {MapContext} from '../context';
import {useContext, useEffect} from 'react';
import '../styles/ChoiceContinent.css';

const ChoiceContinent = () => {
  const {mapWorldValue, setMapWorldValue} = useContext(MapContext);
  const {mapAfricaValue, setMapAfricaValue} = useContext(MapContext);
  const {mapAsiaValue, setMapAsiaValue} = useContext(MapContext);
  const {mapLatinAmericaValue, setMapLatinAmericaValue} = useContext(MapContext);
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('mapWorldValue', '')
    localStorage.setItem('mapAfricaValue', '')
    localStorage.setItem('mapAsiaValue', '')
    localStorage.setItem('mapLatinAmericaValue', '')
  });

  function locationMapWorld() {
    setMapWorldValue(() => setMapWorldValue(true))
    localStorage.setItem('mapWorldValue', true)
    navigate('/menu');
  }

  function locationMapAfrica() {
    setMapAfricaValue(() => setMapAfricaValue(true))
    localStorage.setItem('mapAfricaValue', true)
    navigate('/menu');
  }

  function locationMapAsia() {
    setMapAsiaValue(() => setMapAsiaValue(true))
    localStorage.setItem('mapAsiaValue', true)
    navigate('/menu');
  }

  function locationMapLatinAmerica() {
    setMapLatinAmericaValue(() => setMapLatinAmericaValue(true))
    localStorage.setItem('mapLatinAmericaValue', true)
    navigate('/menu');
  }

  return (
    <div className="rg__fon d-flex justify-content-center align-items-center">
     <div className="country__form">
      <h1>
        Choose a continent
      </h1>
      <div className="pt-2 p-4">
        <button
            type="submit"
            className="btn__country mt-1 fs-3"
            onClick = {locationMapWorld}
            >
            All World
         </button>
          <button
              type="submit"
              className="btn__country mt-3 fs-3"
              onClick = {locationMapAfrica}
              >
              Africa
           </button>
           <button
               type="submit"
               className="btn__country mt-3 fs-3"
               onClick = {locationMapAsia}
               >
               Asia
            </button>
            <button
                type="submit"
                className="btn__country mt-3 fs-3"
                onClick = {locationMapLatinAmerica}
                >
                Latin America
             </button>
          </div>
       </div>
    </div>
  );
};

export default ChoiceContinent;
