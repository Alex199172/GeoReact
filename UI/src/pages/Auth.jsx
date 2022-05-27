import React from 'react';
// import {useState} from 'react';
import '../styles/Auth.css';

const Auth = () => {
  // const [valueLogin, setValueLogin] = useState('')
  return (
    <div>
       <div className="rg__fon d-flex justify-content-center align-items-center">
          <form className="form__auth">
            <div className="auth__form">
              <div className="text center">
                <h1 className="auth__title">
                  Sign Up
                </h1>
              </div>
                <div className="p-4 pt-2">
                  <div>
                    <label for="rg__name" className="form-label"></label>
                    <input
                        type="text"
                        className="form-control auth__login"
                        placeholder="login" required
                        // onChange={event => setValueLogin(event.target.value)}
                         />
                  </div>
                  <div>
                    <label for="rg__name" className="form-label"></label>
                    <input type="email" className="form-control auth__email" placeholder="email" required />
                  </div>
                  <div>
                    <label for="rg__name" className="form-label"></label>
                    <input type="password" className="form-control auth__password" placeholder="password" required />
                  </div>
                  <div className="mt-4">
                   <div>
                    </div>
                    <div>
                      <button type="submit" className="btn__auth btn__registration mt-1">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Auth;
