import React from 'react';
import '../styles/Modal.css';

const ModalDescription = ( {active, setActive, flag, nameCountry, descriptionCountry, hidenModalDescription} ) => {

  function hiden() {
     setActive(false)
     hidenModalDescription()
  }

  return (
    <div
    className={active ? 'modalWindow active' : 'modalWindow'}
    onClick={hiden}
    >
      <div
      className={active ? 'modal__content active' : 'modal__content'}
      onClick={e => e.stopPropagation()}
      >
        <h1 className="text-center">{nameCountry}</h1>
        <div className="text-center text-center pb-4" >
          <img src={`https://ipdata.co/flags/${flag}.png`} alt="Flag" />
        </div>
        <div className="text-center">{descriptionCountry}</div>
      </div>
    </div>
  );
};

export default ModalDescription;
