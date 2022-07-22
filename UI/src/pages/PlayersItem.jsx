import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/PlayersItem.css';
import Nav from '../components/Nav';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

const PlayersItem = () => {
  const [statusValue, setStatusValue] = useState(false);
  const [statusAdmin, setStatusAdmin] = useState(true);
  const [preloaderActive, setPreloaderActive] = useState(false);
  let [dateUpdate, setDateUpdate] = useState('');
  let [result, setResult] = useState([])

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
  setStatusAdmin(() => setStatusAdmin(true))
}

function changeStatus() {
  if(statusValue === true) {
    changeStatusBlock()
    getData()
  }else {
    changeStatusUnlock()
  }
}

function getData() {
  let data = {
         login : localStorage.getItem('login'),
       }

fetch('/data/PlayersItemBD', {
         method: "POST",
         body:JSON.stringify(data),
         headers: {
        'Content-Type': 'application/json'
        },
    }).then(rs => {
      rs.json().then(rs => {
        console.log('result', rs)
      })
    })
  }


useEffect(() => {
  setPreloaderActive(() => setPreloaderActive(true))
  if(result !== []) {
    setTimeout(() => {
      setPreloaderActive(() => setPreloaderActive(false))
      fetch('/data/PlayersItem', {
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
    }, 1300);
  }
},[]);


  return (
    <div>
      <Nav />
      <div className="rg__fon d-flex justify-content-center align-items-start pt-5">
         <div className="rg__form mt-5">
         <h1 className="mt-3 mb-4">Players Item</h1>
           <Search
            // result={result}
            />
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
            {result.map((elem, idx) => (
           <tr key={elem.idx}>
             <th className="text-center align-middle">{elem.login}</th>
             <td className="text-center align-middle text-white">
               <div className={statusValue === true ? 'blocked' : 'activeStatus'}>
                 {statusValue === true ? 'Blocked' : 'Active'}
               </div>
             </td>
             <td className="text-center align-middle">{(elem.created_at).slice(0,-14)}</td>
             <td className="text-center align-middle"></td>
             <td className="text-center align-middle">
             {(localStorage.getItem('role_id') === '1')
               ?
               <button className="btn__staus text-white"
                onClick = {changeStatus}
                >
                 {statusValue === true ? 'unlock' : 'block'}
               </button>
               :
               ''
             }
             </td>
           </tr>
             ))}
         </tbody>
       </table>
         </div>
       </div>
       <Preloader
         active={preloaderActive}
         setActive={setPreloaderActive}
       />
    </div>
  );
};

export default PlayersItem;
