import React from 'react';
import {useState} from 'react';
import '../styles/ChoiceContinent.css';

const ChoiceContinent = () => {

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
            // onClick = {getData}
            >
            All World
         </button>
         <button
             type="submit"
             className="btn__country mt-3 fs-3"
             // onClick = {getData}
             >
             Europe
          </button>
          <button
              type="submit"
              className="btn__country mt-3 fs-3"
              // onClick = {getData}
              >
              Africa
           </button>
           <button
               type="submit"
               className="btn__country mt-3 fs-3"
               // onClick = {getData}
               >
               Asia
            </button>
            <button
                type="submit"
                className="btn__country mt-3 fs-3"
                // onClick = {getData}
                >
                Latin America
             </button>
          </div>
       </div>
    </div>
  );
};

export default ChoiceContinent;
