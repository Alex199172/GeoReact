import React from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/Entry.css';

const Entry = () => {
  const [loginValue, setLoginValue] = useState('')
  const [passwordlValue, setPasswordValue] = useState('')
  const navigate = useNavigate()


 function getData(event) {
   event.preventDefault()
   let data = {
          login : loginValue,
          password : passwordlValue
        }

        fetch('/auth/login', {
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
                   localStorage.setItem('token', rs.token)
                   localStorage.setItem('id', rs.id)
                   localStorage.setItem('login', rs.login)
                   localStorage.setItem('role_id', rs.role_id)
               })
             })
         }


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
                  <label htmlFor="rg__name" className="form-label"></label>
                  <input
                    type="text"
                    className="form-control entrie__login"
                    placeholder="login"
                    required
                    value = {loginValue}
                    onChange = {event => setLoginValue(event.target.value)}
                     />
                </div>
                <div>
                  <label htmlFor="rg__name" className="form-label"></label>
                  <input
                    type="password"
                    className="form-control entrie__password"
                    placeholder="password"
                    required
                    value = {passwordlValue}
                    onChange = {event => setPasswordValue(event.target.value)}
                    />
                </div>
                <div className="mt-4">
                 <div>
                    <button
                      type="submit"
                      className="btn__auth btn__entrie"
                      onClick = {getData}
                      >
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
