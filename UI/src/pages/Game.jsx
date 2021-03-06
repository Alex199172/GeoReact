import React from 'react';
import {useState, useEffect} from 'react';
import {MapContext} from '../context';
import '../styles/Game.css';
import Nav from '../components/Nav';
import Timer from '../components/Timer';
import Modal from '../components/Modal';
import ModalDescription from '../components/ModalDescription';
import Preloader from '../components/Preloader';


const Game = () => {
  let [randomCountry, setRandomCountry] = useState('');
  let [scoreCount, setScoreCount] = useState(0);
  let [contentModal, setContentModal] = useState('');
  let [flagId, setFlagId] = useState('');
  let [nameCountryValue, setNameCountryValue] = useState('');
  let [descriptionCountry, setDescriptionCountry] = useState('');
  let [seconds, setSeconds] = useState(20);
  let [timer, setTimer] = useState({timer:null});
  let [countries, setCountries] = useState([]);
  let [bdMap, setBDMap] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [colorTimer, setColorTimer] = useState(false);
  const [modalDescriptionActive, setModalDescriptionActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(false);
  const [trueColorAnswer, setTrueColorAnswer] = useState(false);
  const [falseColorAnswer, setFalseColorAnswer] = useState(false);


  useEffect(() => {
    setPreloaderActive(() => setPreloaderActive(true))
    if(countries !== []) {
      setTimeout(() => {
        setPreloaderActive(() => setPreloaderActive(false))
      if(localStorage.getItem('mapWorldValue') === 'true') {
        getMapWorld()
      }
      if(localStorage.getItem('mapAfricaValue') === 'true') {
        getMapAfrica()
      }
      if(localStorage.getItem('mapAsiaValue') === 'true') {
        getMapAsia()
      }
      if(localStorage.getItem('mapLatinAmericaValue') === 'true') {
        getMapLatinAmerica()
      }
      }, 1300);
    }
  },[]);

  function startTimer() {


  changeRandomCountry()
  setDisabled(() => setDisabled(true))

  setTimer((prev) => {
    prev.timer = setInterval(() => {
      setSeconds(seconds = seconds-1);

      if(seconds === 5) {
        timerAudio()
        setColorTimer(() => setColorTimer(true))
      }
      if(seconds === 0) {
       setTimer((prev) => {
       prev.timer = clearInterval(prev.timer);
       return prev;
       })
       showModal()
      }
    }, 1000)
    return prev;
  })
}

  function timerAudio() {
    let timeAudio = new Audio('assets/audio/time.mp3');
    timeAudio.play();
  }

  function hidenModal() {
    setModalActive(() => setModalActive(false))
    setDisabled(() => setDisabled(false))
    setColorTimer(() => setColorTimer(false))
    setScoreCount(() => setScoreCount(scoreCount = 0))
    setSeconds(seconds = 20)
    setRandomCountry(() => setRandomCountry(randomCountry = ''))
  }

  function showModal() {
    setModalActive(() => setModalActive(true))
    setTimer((prev) => {
    prev.timer = clearInterval(prev.timer);
    return prev;
    })
    getResult()
    getData()
  }

  function getData() {
    if(localStorage.getItem('mapWorldValue') === 'true') {
      setBDMap(bdMap = 1)
    }
    if(localStorage.getItem('mapAfricaValue') === 'true') {
      setBDMap(bdMap = 2)
    }
    if(localStorage.getItem('mapAsiaValue') === 'true') {
      setBDMap(bdMap = 3)
    }
    if(localStorage.getItem('mapLatinAmericaValue') === 'true') {
      setBDMap(bdMap = 4)
    }
    console.log(bdMap)
    let data = {
           user_id : localStorage.getItem('id'),
           scoreCount : scoreCount,
           map : bdMap
         }
         console.log(data)
     fetch('/data/RatingSingleBD', {
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
  }

  function hidenModalDescription() {
    setModalDescriptionActive(() => setModalDescriptionActive(false))
    setColorTimer(() => setColorTimer(false))
    changeRandomCountry()
    setSeconds(seconds = 20);
    startTimer()
  }

  function showModalDescription(prev) {
    setModalDescriptionActive(() => setModalDescriptionActive(true))
    setTimer((prev) => {
    prev.timer = clearInterval(prev.timer);
    return prev;
    })
  }

  function choiceDescription() {
    setDescriptionCountry(() => {
      descriptionCountry = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.
      Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
      Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit.
      Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent.
      In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.`
      return descriptionCountry
    })
  }

  function changeRandomCountry() {
    setRandomCountry(() => {
      const random = Math.floor(Math.random()*countries.length);
      randomCountry = countries[random].label;
      return randomCountry;
    })
  }

  function getResult() {
    setContentModal(() => {
      contentModal = `Your result : ${scoreCount}`
      return contentModal
    })
  }

  function trueAnswerAudio() {
    let trueAudio = new Audio('assets/audio/true.mp3');
    trueAudio.play();
  }

  function falseAnswerAudio() {
    let errorAudio = new Audio('assets/audio/error.mp3');
    errorAudio.play();
  }

  function choiceCountry(event) {
     if(randomCountry === event.target.getAttribute('arial')) {
       trueAnswer()
       getFlags(event)
     }
     if(randomCountry !== event.target.getAttribute('arial')) {
       falseAnswer()
     }
     console.log(event.target.getAttribute('arial'))
     console.log(randomCountry)
  }

  function choiceNameCountry() {
    setNameCountryValue(() => {
      nameCountryValue = randomCountry
      return nameCountryValue
    })
    choiceDescription()
    showModalDescription()
  }

  function trueAnswer() {
    trueAnswerAudio()
    setTrueColorAnswer(() => setTrueColorAnswer(true))
    setTimeout(() => {
      showModalDescription()
      choiceNameCountry()
      setTrueColorAnswer(() => setTrueColorAnswer(false))
      incrementScoreCount()
     }, 1500);
  }

  function falseAnswer() {
    falseAnswerAudio()
    setFalseColorAnswer(() => setFalseColorAnswer(true))
    setTimeout(() => {
      showModal()
      setFalseColorAnswer(() => setFalseColorAnswer(false))
     }, 1500);
  }

  function incrementScoreCount() {
    setScoreCount(() => setScoreCount(scoreCount++))
    console.log(scoreCount++)
  }

  function getFlags(event) {
    setFlagId(() => {
      flagId = event.target.getAttribute('countryid').toLowerCase()
      return flagId
    })
  }

  function getMapWorld() {
    fetch('/map/mapWorld', {
              method: "Get",
              headers: {
             'Content-Type': 'application/json'
             },
         }).then(rs => {
           rs.json().then(rs => {
             console.log('result', rs)
             setCountries(rs)
           })

         })
  }

  function getMapAfrica() {
    fetch('/map/mapAfrica', {
              method: "Get",
              headers: {
             'Content-Type': 'application/json'
             },
         }).then(rs => {
           rs.json().then(rs => {
             console.log('result', rs)
             setCountries(rs)
           })
         })
  }

  function getMapAsia() {
    fetch('/map/mapAsia', {
              method: "Get",
              headers: {
             'Content-Type': 'application/json'
             },
         }).then(rs => {
           rs.json().then(rs => {
             console.log('result', rs)
             setCountries(rs)
           })
         })
  }

  function getMapLatinAmerica() {
    fetch('/map/mapLatinAmerica', {
              method: "Get",
              headers: {
             'Content-Type': 'application/json'
             },
         }).then(rs => {
           rs.json().then(rs => {
             console.log('result', rs)
             setCountries(rs)
           })
         })
  }


  return (
    <div>
      <Nav />
      <div className="wrap">
        <Timer
          startTimer={startTimer}
          seconds={seconds}
          disabled={disabled}
          colorTimer={colorTimer}
          />
        <div className="position-absolute top-50 start-50 text-light name__country">
          {randomCountry}
        </div>
        <div className="position-absolute top-50 start-0 translate-middle-y score fs-2 ps-3 pe-4">
          {scoreCount}
        </div>
        <svg version="1.1" viewBox="500 0 950 650" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100vh" xmlSpace="preserve">
              <g>
                  <path cs="100,100" d="M0.5,0.5 L1919.5,0.5 L1919.5,586.5 L0.5,586.5 Z" fill="#505050" fillOpacity="1" strokeWidth="1" strokeOpacity="1" className="amcharts-bg"></path>
              </g>
              <g>
                  <g transform="translate(505.3871808293184,207.24503371416955) scale(1)">
                  <g transform={
                                `${(localStorage.getItem('mapWorldValue') === 'true') ? `translate(-30.3871808293184,40.24503371416955) scale(0.9)` : ''}
                                 ${(localStorage.getItem('mapAfricaValue') === 'true') ? `translate(-480.3871808293184,-300.24503371416955) scale(1.8)` : ''}
                                 ${(localStorage.getItem('mapAsiaValue') === 'true') ? `translate(-480.3871808293184,80.24503371416955) scale(1.2)` : ''}
                                 ${(localStorage.getItem('mapLatinAmericaValue') === 'true') ? `translate(0.3871808293184,-400.24503371416955) scale(1.8)` : ''}
                                 `}
                  >
                        {countries.map(country => (
                          <path cs="100,100"
                              className={`amcharts-map-area ${trueColorAnswer === true ? 'true' : ''} ${falseColorAnswer === true ? 'false' : ''} `}
                              onClick={choiceCountry}
                              d={country.path}
                              fill="#818181"
                              transform="translate(0,-230)"
                              stroke="#505050" role="menuitem"
                              fillOpacity="1"
                              strokeWidth="1.1089216553982113"
                              strokeOpacity="1"
                              arial={country.label}
                              countryid={country.countryId}
                              key={country.countryId}
                              >
                          </path>
                        ))}
                      </g>
                  </g>
              </g>
          </svg>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        children={contentModal}
        hidenModal={hidenModal}
        />
      <ModalDescription
        active={modalDescriptionActive}
        setActive={setModalDescriptionActive}
        flag={flagId}
        nameCountry={nameCountryValue}
        descriptionCountry={descriptionCountry}
        hidenModalDescription={hidenModalDescription}
        />
      <Preloader
        active={preloaderActive}
        setActive={setPreloaderActive}
      />
    </div>
  );
};

export default Game;
