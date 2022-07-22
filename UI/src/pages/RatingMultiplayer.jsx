import React from 'react';
import Nav from '../components/Nav';
import '../styles/RatingMultiplayer.css';
import {useState, useEffect} from 'react';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

const Rating = () => {
  let [result, setResult] = useState([])
  const [preloaderActive, setPreloaderActive] = useState(false);

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
            <h1 className="mt-3 mb-4">Rating Multiplayer</h1>
            <Search
              // result={result}
              />
              <table className="table">
                <thead>
                  <tr className="">
                    <th className="text-center align-middle" scope="col">Login</th>
                    <th className="text-center align-middle" scope="col">All Games</th>
                    <th className="text-center align-middle" scope="col">Win</th>
                    <th className="text-center align-middle" scope="col">Loss</th>
                    <th className="text-center align-middle" scope="col">Win Rate</th>
                  </tr>
                </thead>
                <tbody>
                    {result.map(elem => (
                    <tr>
                      <th className="text-center align-middle" scope="row">{elem.login}</th>
                      <td className="text-center align-middle">50</td>
                      <td className="text-center align-middle">25</td>
                      <td className="text-center align-middle">25</td>
                      <td className="text-center align-middle">25%</td>
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
