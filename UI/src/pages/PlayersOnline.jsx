import React from 'react';
import Nav from '../components/Nav';
import '../styles/PlayersHistory.css';
import Search from '../components/Search';
import ModalInvitation from '../components/ModalInvitation';
import {useState, useEffect} from 'react';

const PlayersOnline = () => {
  const [modalInvitationActive, setModalInvitationActive] = useState(false)
  let [result, setResult] = useState([])

  function invationPlayer() {
    setModalInvitationActive(() => setModalInvitationActive(true))
  }

  useEffect(() => {
      fetch('/data/PlayersOnline', {
                method: "Get",
                headers: {
                'Content-Type': 'application/json'
                },
            }).then(rs => {
              rs.json().then(rs => {
                console.log('result', rs)
                setResult(rs)
                console.log(result)
             })
            })
          });
          console.log(result)


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
              result={result}/>
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
                {result.map(elem => (
                  <tr>
                    <th className="text-center align-middle" scope="row">{elem.login}</th>
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
