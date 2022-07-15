import React from 'react';
import {useState, useRef, useEffect} from 'react';
import '../styles/Chat.css';


const Chat = () => {
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')
  const [connected, setConnected] = useState(false);
  const socket = useRef()

  useEffect(() => {
         socket.current = new WebSocket('ws://localhost:8081')

         socket.current.onopen = () => {
             setConnected(true)
             const message = {
                 event: 'connection',
                 login: localStorage.getItem('login'),
                 id: localStorage.getItem('id',)
             }
             socket.current.send(JSON.stringify(message))
         }
         socket.current.onmessage = (event) => {
             const message = JSON.parse(event.data)
             setMessages(prev => [message, ...prev])
         }
         socket.current.onclose= () => {
             console.log('Socket закрыт')
         }
         socket.current.onerror = () => {
             console.log('Socket произошла ошибка')
         }
  },[]);

     const sendMessage = async () => {
         const message = {
             login: localStorage.getItem('login'),
             id: localStorage.getItem('id'),
             message: value,
             event: 'message'
         }
         socket.current.send(JSON.stringify(message));
         setValue('')
     }


  return (
    <div>
      <button className="btn position-absolute top-0 end-0 m-3"
               type="button" data-bs-toggle="offcanvas"
               data-bs-target="#offcanvasScrolling"
               aria-controls="offcanvasScrolling"
               >
           <img className="mt-5 btn__burger" src="https://img.icons8.com/material-sharp/24/000000/menu--v1.png" alt="chat" />
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
              {messages.map(elem =>
                     <div key={elem.id}>
                         {elem.event === 'connection'
                             ? <div>
                                 Пользователь {elem.login} подключился
                               </div>
                             : <div>
                                 {elem.login}. {elem.login}
                             </div>
                         }
                      </div>
              )}
           </div>
           <div className="row">
             <input
               className="form-control chat__input"
               type="text"
               placeholder="message..."
               value={value}
               onChange={event => setValue(event.target.value)}
               />
             <button
             type="button"
             className="chat__btn mt-2"
             onClick = {sendMessage}
             >
              Send
             </button>
           </div>
         </div>
       </div>
    </div>
  );
};

export default Chat;
