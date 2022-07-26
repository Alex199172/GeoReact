import React from 'react';
import Nav from '../components/Nav';
import '../styles/PlayersHistory.css';
import Search from '../components/Search';
import ModalInvitation from '../components/ModalInvitation';
import {useState, useRef, useEffect} from 'react';


const PlayersOnline = () => {
  const [modalInvitationActive, setModalInvitationActive] = useState(false)
  const socket = useRef()
  let [result, setResult] = useState([])
  let [loginArray, setLoginArray] = useState([])
  let [loginObj, setLoginObj] = useState([])


  function invationPlayer() {
    setModalInvitationActive(() => setModalInvitationActive(true))
  }

  useEffect(() => {
      socket.current = new WebSocket('ws://localhost:8081')

      socket.current.onopen = () => {
          let loginObj = {
            event: 'connection',
            login: localStorage.getItem('login'),
            id: localStorage.getItem('id'),
            free: true
          }
          setLoginArray(loginArray.push(loginObj))
          socket.current.send(JSON.stringify(loginObj))
      }
      socket.current.onmessage = (event) => {
        const loginArray = JSON.parse(event.data)
        setLoginArray(prev => [loginArray, ...prev])

      }
      socket.current.onclose= () => {
          console.log('Socket закрыт')
      }
      socket.current.onerror = () => {
          console.log('Socket произошла ошибка')
      }
      console.log(loginArray)
      console.log(loginObj)
  },[]);

  return (
    <div>
      <Nav />
      <ModalInvitation
        active={modalInvitationActive}
        setActive={setModalInvitationActive}
      />
      <div className="rg__fon d-flex justify-content-center align-items-start pt-5">
          <div className="rg__form mt-5">
            <h1 className="mt-3 mb-4">Players Online</h1>
            <Search
              // result={result}
              />
            <table className="table">
              <thead>
                <tr className="">
                  <th className="text-center align-middle" scope="col">Login</th>
                  <th className="text-center align-middle" scope="col">in Game</th>
                  <th className="text-center align-middle" scope="col">Free</th>
                  <th className="text-center align-middle" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {loginArray.map((elem,idx) => (
                  <tr>
                    <th className="text-center align-middle" scope="row">{elem}</th>
                    <td className="text-center align-middle">
                       <img className="checked" src="assets/img/checked.png" alt="chat" />
                    </td>
                    <td className="text-center align-middle">
                       <img className="checked" src="assets/img/checked.png" alt="chat" />
                    </td>
                    <td className="text-center align-middle">
                      <button className="btn__invite text-white"
                      onClick = {invationPlayer}
                      >
                        to Invite
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default PlayersOnline;
