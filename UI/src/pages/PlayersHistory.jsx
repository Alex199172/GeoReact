import React from 'react';
import '../styles/PlayersOnline.css';
import Nav from '../components/Nav';

const PlayersOnline = () => {
  return (
    <div>
      <Nav />
      <div className="rg__fon d-flex justify-content-center align-items-start pt-5">
          <div className="rg__form">
            <h1 className="">Players Online</h1>
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
                <tr>
                  <th className="text-center align-middle" scope="row">1</th>
                  <td className="text-center align-middle">Mark</td>
                  <td className="text-center align-middle">Otto</td>
                  <td className="text-center align-middle">
                    <button className="btn__invite text-white">
                      to Invite
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default PlayersOnline;
