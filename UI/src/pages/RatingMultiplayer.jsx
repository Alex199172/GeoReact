import React from 'react';
import Nav from '../components/Nav';
import '../styles/RatingMultiplayer.css';
import Search from '../components/Search';

const Rating = () => {

  return (
    <div>
      <Nav />
      <div className="rg__fon d-flex justify-content-center align-items-start pt-5">
          <div className="rg__form">
            <h1 className="mt-3 mb-4">Rating Multiplayer</h1>
            <Search />
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
                  <tr>
                    <th className="text-center align-middle" scope="row">Alex</th>
                    <td className="text-center align-middle">50</td>
                    <td className="text-center align-middle">25</td>
                    <td className="text-center align-middle">25</td>
                    <td className="text-center align-middle">25%</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
    </div>
  );
};

export default Rating;
