import React from 'react';
import '../styles/Modal.css';

const Modal = ({active, setActive, children}) => {
  return (
    <div
    className={active ? 'modalWindow active' : 'modalWindow'}
    onClick={() => setActive(false)}
    >
      <div
      className={`text-center fs-4 ${active ? 'modal__content active' : 'modal__content'}`}
      onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
