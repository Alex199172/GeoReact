import React from 'react';
import {useState} from 'react';
import '../styles/PlayersItem.css';
import Nav from '../components/Nav';
import Search from '../components/Search';

const PlayersItem = () => {
  const [statusValue, setStatusValue] = useState(false);
  const [statusAdmin, setStatusAdmin] = useState(true);
  let [dateUpdate, setDateUpdate] = useState('');

function changeStatusBlock() {
  setStatusValue(() => setStatusValue(false))
}

function changeStatusUnlock() {
  setStatusValue(() => setStatusValue(true))
}

function changeStatusUsear() {
  setStatusAdmin(() => setStatusAdmin(false))
}

function changeStatusAdmin() {
  setStatusAdmin(() => {setStatusAdmin(true)})
}

function changeDateUpdate() {
  setStatusAdmin(() => {
    let date = new Date();
    let dateUpdate = String(date.getDate()).padStart(2, '0') + '.' +
    String(date.getMonth() + 1).padStart(2, '0') + '.' +
    date.getFullYear() + " " +
    new Date().toLocaleTimeString().slice(0,-3);
    return dateUpdate
  })
}

  return (
    <div>
      <Nav />
      <div className="rg__fon d-flex justify-content-center align-items-start pt-5">
         <div className="rg__form mt-5">
         <h1 className="mt-3 mb-4">Players Item</h1>
           <Search />
       <table className="table">
        <thead>
           <tr className="">
             <th className="text-center" scope="col">Login</th>
             <th className="text-center" scope="col">Status</th>
             <th className="text-center" scope="col">Created</th>
             <th className="text-center" scope="col">Updated</th>
             <th className="text-center" scope="col"></th>
           </tr>
          </thead>
         <tbody>
           <tr>
             <th className="text-center align-middle">Alex</th>
             <td className="text-center align-middle text-white">
               <div className={statusValue === true ? 'blocked' : 'activeStatus'}>
                 {statusValue === true ? 'Blocked' : 'Active'}
               </div>
             </td>
             <td className="text-center align-middle">May 03 2022</td>
             <td className="text-center align-middle">{dateUpdate}</td>
             <td className="text-center align-middle">
             {statusAdmin === true
               ?
               <button className="btn__staus text-white"
                onClick = {statusValue === true ? changeStatusBlock : changeStatusUnlock}
                >
                 {statusValue === true ? 'unlock' : 'block'}
               </button>
               :
               ''
             }
             </td>
           </tr>

           <tr>
             <th className="text-center align-middle">Alex</th>
             <td className="text-center align-middle text-white">
               <div className="blocked">
                 Blocked
               </div>
             </td>
             <td className="text-center align-middle">May 03 2022</td>
             <td className="text-center align-middle">May 09 2022</td>
             <td className="text-center align-middle">
               <button className="btn__staus text-white">
                 unlock
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

export default PlayersItem;
