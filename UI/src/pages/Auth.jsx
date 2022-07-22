import React from 'react';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../styles/Auth.css';

const Auth = () => {
  const [loginValue, setLoginValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const navigate = useNavigate()

  function getData(event) {
    event.preventDefault()
    let data = {
           login : loginValue,
           email : emailValue,
           password : passwordValue
         }

 fetch('/auth/registration', {
           method: "POST",
           body:JSON.stringify(data),
           headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
          },
      }).then(rs => {
        if(rs.status === 200) {
          navigate('/menu-continents')
        }
        rs.json().then(rs => {
          console.log('result', rs)
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
                    <label htmlFor="rg__name" className="form-label"></label>
                    <input
                        type="text"
                        className="form-control auth__login"
                        placeholder="login" required
                        value={loginValue}
                        onChange={event => setLoginValue(event.target.value)}
                         />
                  </div>
                  <div>
                    <label htmlFor="rg__name" className="form-label"></label>
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
                    <label htmlFor="rg__name" className="form-label"></label>
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
