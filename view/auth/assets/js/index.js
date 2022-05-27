

    // Отправка данных на авторизацию

let formAuth = document.querySelector('.form__auth'),
    btnReg = document.querySelector('.btn__registration')

 formAuth.addEventListener('submit', (e) => {
   e.preventDefault();
   alert('Данные отправлены')

let login = document.querySelector('.auth__login').value,
    email = document.querySelector('.auth__email').value,
    password = document.querySelector('.auth__password').value

let data = {
    login,
    email,
    password
   }

   fetch("http://localhost:3000/auth/registration", {
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

      login = document.querySelector('.auth__login').value = '',
      email = document.querySelector('.auth__email').value = '',
      password = document.querySelector('.auth__password').value = ''
 })
