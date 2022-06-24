import React from 'react';
import '../styles/ModalInvitation.css';

const ModalInvitation = ( {active, setActive, children} ) => {
  return (
    <div
    className={active ? 'modalWindow active' : 'modalWindow'}
    onClick={() => setActive(false)}
    >
      <div
      className={active ? 'modal__content active' : 'modal__content'}
      onClick={e => e.stopPropagation()}
      >
        <h1 className="text-center">Invation</h1>
        <div className="text-center text-center pb-4" >
          player invites you
        </div>
          <div className="text-center">
          <button className="btn__invation resolve text-white me-5">
            resolve
          </button>
          <button className="btn__invation reject text-white"
            onClick = {() => setActive(false)}
            >
            reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInvitation;
