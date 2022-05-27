import React from 'react';
import '../styles/Chat.css';

const Chat = () => {
  return (
    <div>
      <button className="btn position-absolute top-0 end-0 m-3"
               type="button" data-bs-toggle="offcanvas"
               data-bs-target="#offcanvasScrolling"
               aria-controls="offcanvasScrolling">
           <img className="mt-5" src="https://img.icons8.com/material-sharp/24/000000/menu--v1.png" alt="chat" />
       </button>

       <div className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1" id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel">
         <div className="offcanvas-header">
           <h5 className="offcanvas-title chat__title text-center" id="offcanvasScrollingLabel">Chat Game</h5>
           <button type="button"
                   className="btn-close text-reset"
                   data-bs-dismiss="offcanvas"
                   aria-label="Закрыть">
           </button>
         </div>
         <div className="offcanvas-body chat__fon">
           <p className="text-light text-center">Online</p>
           <div className="chat__form mb-2">

           </div>
           <div className="row">
             <input className="form-control chat__input" type="text" placeholder="message..." />
             <button type="button" className="chat__btn mt-2">Send</button>
           </div>
         </div>
       </div>
    </div>
  );
};

export default Chat;
