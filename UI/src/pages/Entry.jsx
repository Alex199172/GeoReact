import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Entry.css';

const Entry = () => {
  return (
    <div>
     <div className="rg__fon d-flex justify-content-center align-items-center">
        <form className="form__entrie">
          <div className="entry__form">
            <div className="text center">
              <h1 className="entry__title">
                Log In
              </h1>
            </div>
              <div className="p-4 pt-2 pb-2">
                <div>
                  <label for="rg__name" className="form-label"></label>
                  <input type="text" className="form-control entrie__login" placeholder="login" required />
                </div>
                <div>
                  <label for="rg__name" className="form-label"></label>
                  <input type="password" className="form-control entrie__password" placeholder="password" required />
                </div>
                <div className="mt-4">
                 <div>
                    <button type="submit" className="btn__auth btn__entrie">
                      Sign In
                    </button>
                  </div>
                  <div className="text-end mt-3">
                    <Link to="/registration" className="nav__menu-link">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Entry;
