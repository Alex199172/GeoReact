let countries = document.querySelectorAll('.amcharts-map-area'),
    nameCountry = document.querySelector('.name__country'),
    score = document.querySelector('.score'),
    flag = document.querySelector('.flag'),
    description = document.querySelector('.description'),
    resultModal = document.querySelector('.result__modal'),
    seconds = document.querySelector('.seconds'),
    startTimer = document.querySelector('.start__btn'),
    timer = document.querySelector('.timer'),
    rnd,
    choiceCountry,
    x = 10,
    t = null,
    clickTry = false

countries.forEach(country => {
  country.onclick = function(e) {
  if(!clickTry) { return; }
  clickTry = false
  choiceCountry = e.target;
  winAnswer(e.target.ariaLabel)
  errorAnswer(e.target.ariaLabel);
 }
});

startTimer.addEventListener('click', newGame)


function newGame() {
  rnd = getNameCountry();
  clickTry = true
  nameCountry.innerHTML = rnd
  this.disabled = true
  getTimer()
}

let v = 0
function winAnswer(value) {
  if(rnd == value) {
    resetSetInterval()
    let trueAudio = new Audio('assets/audio/true.mp3');
    trueAudio.play();
    score.innerHTML = ++v;
    choiceCountry.classList.add('win');
    setTimeout(() => {
      modalDescription()
      clickTry = true
     }, 1000);
  }
}

function errorAnswer(value) {
   if(rnd != value) {
     resetSetInterval()
     let errorAudio = new Audio('assets/audio/error.mp3');
     errorAudio.play();
     choiceCountry.classList.add('error');
     setTimeout(() => {
       choiceCountry.classList.remove('error');
       modalScore()
       clickTry = true
     }, 1500);
  }
}

function modalScore() {
  let myModal = new bootstrap.Modal(document.getElementById('modalError'), {
    keyboard: false
  })
   myModal.show();
   resetSetInterval()
   countries.forEach( country => {
     country.classList.remove('win')
   });
   nameCountry.innerHTML = ''
   resultModal.innerText = `Your Score: ${v}`
   v = 0
}

function modalDescription() {
  let myModal = new bootstrap.Modal(document.getElementById('modalWin'), {
    keyboard: false
  })
   myModal.show();
   flag.innerText = `flag ${rnd}`
   description.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue eget augue ac congue. Vestibulum at maximus quam. Donec ullamcorper elit id quam condimentum pharetra. Aenean quis elit in mi suscipit consectetur. Suspendisse pharetra ante in ipsum molestie, eu hendrerit est varius. In vehicula blandit enim, sed sodales felis efficitur eu. Aliquam commodo leo quis neque pretium efficitur. Aliquam ligula nibh, egestas a porta iaculis, mattis sed est. Aenean lorem ligula, tincidunt eu turpis ac, dictum auctor lacus. Integer purus nisi, vulputate sit amet eleifend egestas, finibus sit amet turpis. Fusce consequat urna quis accumsan vehicula. Aliquam ac mi at ante facilisis feugiat vitae et nisl. Donec ullamcorper semper ex at pretium. Duis elementum, elit ac gravida tempor, sapien quam sagittis eros, eget semper felis augue sagittis odio. Fusce tempus dapibus risus et consectetur. Sed interdum massa ac eros consectetur iaculis."
};

  let myModalElWin = document.getElementById('modalWin')
  myModalElWin.addEventListener('hidden.bs.modal', function (event) {
    resetSetInterval()
    newGame()
  })

  let myModalElError = document.getElementById('modalError')
  myModalElError.addEventListener('hidden.bs.modal', function (event) {
    resetSetInterval()
    score.innerHTML = 0;
    seconds.innerHTML = 10;
  })


function getNameCountry() {
  let rand = Math.floor(Math.random()*countries.length);
  return countries[rand].ariaLabel;
}

function timeDown() {
  timer.style.backgroundColor = '#6f181b'
  timer.style.color = '#fff'
  let timeAudio = new Audio('assets/audio/time.mp3');
  timeAudio.play();
}

function getTimer() {
  if(t) {
    x = 10
    clearInterval(t)
    seconds.innerHTML = x;
  }
  t = setInterval(function() {
    x--
    if(x == 3) {
      timeDown()
     }
     if(x == 0) {

       clearInterval(t)
       startTimer.disabled = false
       modalScore()
      }
    seconds.innerHTML = '0' + x;
  }, 1000);
}

function resetSetInterval() {
  x = 10
  startTimer.disabled = false
  timer.style.backgroundColor = '#fff'
  timer.style.color = '#212529'
  clearInterval(t)
}


 // Реализация WebSocket

let chatForm = document.querySelector('.chat__form'),
    chatInput = document.querySelector('.chat__input'),
    chatBtn = document.querySelector('.chat__btn')

function dateChat() {
  let date = new Date();
  let timeMessage = String(date.getDate()).padStart(2, '0') + '.' +
  String(date.getMonth() + 1).padStart(2, '0') + '.' +
  date.getFullYear() + " " +
  new Date().toLocaleTimeString().slice(0,-3);
  return timeMessage;
}


const webSocket = new WebSocket('ws://localhost:8081');
webSocket.onmessage = async function(e) {
  //const data = e.data.text();
  const message = await new Response(e.data).text()
  console.log(message)
  chatForm.innerHTML +=
  '<p class="m-0 text-light fst-italic">'+'Alex'+'</p>' +
  '<div class="chat__message row rounded-3 bg-white mt-1 p-2 pb-0 mb-3 m-0 mx-2">' + message +
  '<p class="chat__date m-0 text-end pe-0 fst-italic">' + dateChat() + '</p>' + '</div>'
  chatForm.scrollTop = chatForm.scrollHeight;
};

chatBtn.addEventListener('click', () => {
  if(chatInput.value != '') {
    message = chatInput.value;
    webSocket.send(message);
    let sendMessageAudio = new Audio('assets/audio/sendMessage.mp3');
    sendMessageAudio.play();
    chatInput.value = '';
    console.log(chatInput)
  }
})
