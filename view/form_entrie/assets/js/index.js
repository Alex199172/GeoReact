
     // Аунтификация

let btnEntrie = document.querySelector('.btn__entrie'),
    formEntrie = document.querySelector('.form__entrie')



     // Отправка данных для входа

  formEntrie.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('nkrngvk')

 let login = document.querySelector('.entrie__login').value,
     password = document.querySelector('.entrie__password').value

    let data = {
      login,
      password
    }

    fetch('http://localhost:3000/auth/login', {
  			      method: "POST",
   			      body:JSON.stringify(data),
   			      headers: {
   			     'Content-Type': 'application/json'
   			     },
   			 }).then(rs => {
   			   rs.json().then(rs => {
   			     console.log('result', rs)
             localStorage.setItem('token', rs.token)
             localStorage.setItem('id', rs.id)
             localStorage.setItem('login', rs.login)
             location.href = '/game/'
   			   })
   			 })

         login = document.querySelector('.entrie__login').value = '',
         password = document.querySelector('.entrie__password').value = ''

  })





// // Если ширина экрана > 900
//
// if (window.innerWidth > 900) {
//     for(let addDiv=0; addDiv<7; addDiv++) {
//       let div = document.createElement('div');
//       console.log(addDiv)
//
//       div.classList.add('game-field_cell')
//                game.appendChild(div)
//     }
//
//      const checked = () => {
//      const fields =  document.querySelectorAll('.game-field_cell')
//      const winPositions = [
//          [0, 1, 2, 3],
//          [4, 5, 6, 7],
//          [8, 9, 10, 11],
//          [12, 13, 14, 15],
//          [0, 4, 8, 12],
//          [1, 5, 9, 13],
//          [2, 6, 10, 14],
//          [3, 7, 11, 15],
//          [0, 5, 10, 15],
//          [3, 6, 9, 12]
//      ];
//
//      for (let idx = 0; idx < winPositions.length; idx++) {
//         if (
//             fields[winPositions[idx][0]].innerHTML == cross &&
//             fields[winPositions[idx][1]].innerHTML == cross &&
//             fields[winPositions[idx][2]].innerHTML == cross &&
//             fields[winPositions[idx][3]].innerHTML == cross
//         ) {
//             setTimeout(() => {
//             fields[winPositions[idx][0]].classList.add('active')
//             fields[winPositions[idx][1]].classList.add('active')
//             fields[winPositions[idx][2]].classList.add('active')
//             fields[winPositions[idx][3]].classList.add('active')
//
//             res.innerText = "Выиграли крестики"
//             let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
//               keyboard: false
//             })
//              myModal.show();
//            }, 1300);
//
//         }
//         else if (
//            fields[winPositions[idx][0]].innerHTML == circle &&
//            fields[winPositions[idx][1]].innerHTML == circle &&
//            fields[winPositions[idx][2]].innerHTML == circle &&
//            fields[winPositions[idx][3]].innerHTML == circle
//        ) {
//            setTimeout(() => {
//             fields[winPositions[idx][0]].classList.add('active')
//             fields[winPositions[idx][1]].classList.add('active')
//             fields[winPositions[idx][2]].classList.add('active')
//             fields[winPositions[idx][3]].classList.add('active')
//
//             res.innerText = "Выиграли нолики"
//             let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
//               keyboard: false
//             })
//              myModal.show();
//            }, 1500);
//
//        }
//        else if(move.length == 16) {
//            result = "Ничья"
//              myModal.show();
//        }
//      }
//  }
// }
//
// // Если ширина экрана > 1200
//
// if (window.innerWidth > 1200) {
//   for(let addDiv=0; addDiv<9; addDiv++) {
//     let div = document.createElement('div');
//     console.log(addDiv)
//
//     div.classList.add('game-field_cell')
//              game.appendChild(div)
//   }
//
//      const checked = () => {
//      const fields =  document.querySelectorAll('.game-field_cell')
//      const winPositions = [
//          [0, 1, 2, 3, 4],
//          [5, 6, 7, 8, 9],
//          [10, 11, 12, 13, 14],
//          [15, 16, 17, 18, 19],
//          [20, 21, 22, 23, 24],
//          [0, 5, 10, 15, 20],
//          [1, 6, 11, 16, 21],
//          [2, 7, 12, 17, 22],
//          [3, 8, 13, 18, 23],
//          [4, 9, 14, 19, 24],
//          [0, 6, 12, 18, 24],
//          [4, 8, 12, 16, 20]
//      ];
//
//      for (let idx = 0; idx < winPositions.length; idx++) {
//         if (
//             fields[winPositions[idx][0]].innerHTML == cross &&
//             fields[winPositions[idx][1]].innerHTML == cross &&
//             fields[winPositions[idx][2]].innerHTML == cross &&
//             fields[winPositions[idx][3]].innerHTML == cross &&
//             fields[winPositions[idx][4]].innerHTML == cross
//         ) {
//             setTimeout(() => {
//             fields[winPositions[idx][0]].classList.add('active')
//             fields[winPositions[idx][1]].classList.add('active')
//             fields[winPositions[idx][2]].classList.add('active')
//             fields[winPositions[idx][3]].classList.add('active')
//             fields[winPositions[idx][4]].classList.add('active')
//
//             res.innerText = "Выиграли крестики"
//             let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
//               keyboard: false
//             })
//              myModal.show();
//            }, 1300);
//
//         }
//         else if (
//            fields[winPositions[idx][0]].innerHTML == circle &&
//            fields[winPositions[idx][1]].innerHTML == circle &&
//            fields[winPositions[idx][2]].innerHTML == circle &&
//            fields[winPositions[idx][3]].innerHTML == circle &&
//            fields[winPositions[idx][4]].innerHTML == circle
//        ) {
//            setTimeout(() => {
//             fields[winPositions[idx][0]].classList.add('active')
//             fields[winPositions[idx][1]].classList.add('active')
//             fields[winPositions[idx][2]].classList.add('active')
//             fields[winPositions[idx][3]].classList.add('active')
//             fields[winPositions[idx][4]].classList.add('active')
//
//             res.innerText = "Выиграли нолики"
//             let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
//               keyboard: false
//             })
//              myModal.show();
//            }, 1300);
//
//        }
//        else if(move.length == 25) {
//            result = "Ничья"
//            let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
//              keyboard: false
//            })
//             myModal.show();
//        }
//      }
//  }
// }
