import React from 'react';
import Nav from '../components/Nav';
import '../styles/PlayersHistory.css';
import Search from '../components/Search';
import ModalInvitation from '../components/ModalInvitation';
import {useState, useEffect} from 'react';

const PlayersHistory = () => {
  const [modalInvitationActive, setModalInvitationActive] = useState(false)
  const result = []

  function invationPlayer() {
    setModalInvitationActive(() => setModalInvitationActive(true))
  }

  useEffect(() => {
      fetch('/data/RatingSingle', {
                method: "Get",
                headers: {
                'Content-Type': 'application/json'
                },
            }).then(rs => {
              rs.json().then(rs => {
                console.log('result', rs)
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
          <div className="rg__form">
            <h1 className="mt-3 mb-4">Players Online</h1>
            <Search />
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
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle"></td>
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

export default PlayersHistory;
