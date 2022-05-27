import React from 'react';
import '../styles/PlayersItem.css';
import Nav from '../components/Nav';

const PlayersItem = () => {
  return (
    <div>
      <Nav />
      <div className="rg__fon d-flex justify-content-center align-items-start pt-5">
         <div className="rg__form">
           <h1 className="">Players item</h1>
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
               <div className="activeStatus">
                 Active
               </div>
             </td>
             <td className="text-center align-middle">May 03 2022</td>
             <td className="text-center align-middle">May 09 2022</td>
             <td className="text-center align-middle">
               <button className="btn__staus text-white">
                 block
               </button>
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
