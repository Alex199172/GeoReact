import React from 'react';
import {MapContext} from '../context';
import {useContext} from 'react';
import '../styles/ChoiceContinent.css';

const ChoiceContinent = () => {
  const {mapWorldValue, setMapWorldValue} = useContext(MapContext);
  const {mapAfricaValue, setMapAfricaValue} = useContext(MapContext);
  const {mapAsiaValue, setMapAsiaValue} = useContext(MapContext);
  const {mapLatinAmericaValue, setMapLatinAmericaValue} = useContext(MapContext);

  function locationMapWorld() {
    setMapWorldValue(() => setMapWorldValue(true))
    window.location.href = '/menu'
  }

  function locationMapAfrica() {
    setMapAfricaValue(() => setMapAfricaValue(true))
    // window.location.href = '/menu'
    console.log(mapAfricaValue)
  }

  function locationMapAsia() {
    setMapAsiaValue(() => setMapAsiaValue(true))
    window.location.href = '/menu'
  }

  function locationMapLatinAmerica() {
    setMapLatinAmericaValue(() => setMapLatinAmericaValue(true))
    window.location.href = '/menu'
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
