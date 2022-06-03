import React from 'react';
import {useState} from 'react';
import '../styles/Auth.css';

const Auth = () => {
  const [loginValue, setLoginValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  function getData() {
    let data = {
           login : loginValue,
           email : emailValue,
           password : passwordValue
         }

 fetch('http://localhost:5000/auth/registration', {
           method: "POST",
           body:JSON.stringify(data),
           headers: {
          'Content-Type': 'application/json'
          },
      }).then(rs => {
        rs.json().then(rs => {
          console.log('result', rs)
          window.location.href = '/game'
        })
      })
  }

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
                        value={loginValue}
                        onChange={event => setLoginValue(event.target.value)}
                         />
                  </div>
                  <div>
                    <label for="rg__name" className="form-label"></label>
                    <input
                        type="email"
                        className="form-control auth__email"
                        placeholder="email"
                        required
                        value={emailValue}
                        onChange={event => setEmailValue(event.target.value)}
                        />
                  </div>
                  <div>
                    <label for="rg__name" className="form-label"></label>
                    <input
                        type="password"
                        className="form-control auth__password"
                        placeholder="password"
                        required
                        value={passwordValue}
                        onChange={event => setPasswordValue(event.target.value)}
                        />
                  </div>
                  <div className="mt-4">
                   <div>
                    </div>
                    <div>
                      <button
                          type="submit"
                          className="btn__auth btn__registration mt-1"
                          onClick = {getData}
                          >
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
