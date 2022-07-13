import React from 'react';
import {useEffect, useState} from 'react';
import Nav from '../components/Nav';
import '../styles/RatingSingle.css';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

const Rating = () => {
  let [result, setResult] = useState([])
  const [preloaderActive, setPreloaderActive] = useState(false);

  useEffect(() => {
    setPreloaderActive(() => setPreloaderActive(true))
    if(result != []) {
      setTimeout(() => {
        setPreloaderActive(() => setPreloaderActive(false))
        fetch('/data/RatingSingle', {
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
            <h1 className="mt-3 mb-4">Rating Single</h1>
            <Search
              result={result}
              />
              <table className="table">
                <thead>
                  <tr className="">
                    <th className="text-center align-middle" scope="col">Login</th>
                    <th className="text-center align-middle" scope="col">All World</th>
                    <th className="text-center align-middle" scope="col">Africa</th>
                    <th className="text-center align-middle" scope="col">Asia</th>
                    <th className="text-center align-middle" scope="col">Latin America</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map(elem => (
                  <tr>
                    <th className="text-center align-middle" scope="row">{elem.login}</th>
                    <td className="text-center align-middle">0</td>
                    <td className="text-center align-middle">0</td>
                    <td className="text-center align-middle">0</td>
                    <td className="text-center align-middle">0</td>
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

export default Rating;
