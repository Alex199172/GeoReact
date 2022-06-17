import React from 'react';
import {useState, useContext} from 'react';
import {MapContext} from '../context';
import '../styles/Game.css';
import Nav from '../components/Nav';
import Timer from '../components/Timer';
import Chat from '../components/Chat';
import Modal from '../components/Modal';
import ModalDescription from '../components/ModalDescription';
import Preloader from '../components/Preloader';


const Game = () => {
  let [randomCountry, setRandomCountry] = useState('')
  let [scoreCount, setScoreCount] = useState(0)
  let [contentModal, setContentModal] = useState('')
  let [flagId, setFlagId] = useState('')
  let [nameCountryValue, setNameCountryValue] = useState('')
  let [descriptionCountry, setDescriptionCountry] = useState('')
  const [modalDescriptionActive, setModalDescriptionActive] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [preloaderActive, setPreloaderActive] = useState(false)
  const [trueColorAnswer, setTrueColorAnswer] = useState(false)
  const [falseColorAnswer, setFalseColorAnswer] = useState(false)
  const [stateTimer, setStateTimer] = useState(false)
  const {mapWorldValue, setMapWorldValue} = useContext(MapContext);
  const {mapAfricaValue, setMapAfricaValue} = useContext(MapContext);
  const {mapAsiaValue, setMapAsiaValue} = useContext(MapContext);
  const {mapLatinAmericaValue, setMapLatinAmericaValue} = useContext(MapContext);
  let countries = []





  function changeStateTimer() {
    if(modalDescriptionActive || modalActive === true) {
      setStateTimer(() => setStateTimer(true))
    }
  }

  function hidenModal() {
    setModalActive(() => setModalActive(false))
  }

  function showModal() {
    setModalActive(() => setModalActive(true))
    getResult()
    changeStateTimer()
  }

  function hidenModalDescription() {
    setModalDescriptionActive(() => setModalDescriptionActive(false))
  }

  function showModalDescription() {
    setModalDescriptionActive(() => setModalDescriptionActive(true))
  }

  function choiceDescription() {
    setDescriptionCountry(() => {
      descriptionCountry = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.`
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
      console.log(scoreCount)
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
  }

  function getFlags(event) {
    setFlagId(() => {
      flagId = event.target.getAttribute('countryid').toLowerCase()
      return flagId
      console.log(event)
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
           })
         })
  }
console.log(mapAfricaValue)

  return (
    <div>
      <Nav />
      <Timer
        showModal={showModal}
        hidenModal={hidenModal}
        changeRandomCountry={changeRandomCountry}
        setRandomCountry={setRandomCountry}
        stateTimer={stateTimer}
        changeStateTimer={changeStateTimer}
        />
      <Chat />
      <div className="position-absolute top-50 start-50 text-light name__country">
        {randomCountry}
      </div>
      <div className="position-absolute top-50 start-0 translate-middle-y score fs-2 ps-3 pe-4">
        {scoreCount}
      </div>
      <svg version="1.1" viewBox="500 0 950 650" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100vh" xmlSpace="preserve">
            <g>
                <path cs="100,100" d="M0.5,0.5 L1919.5,0.5 L1919.5,586.5 L0.5,586.5 Z" fill="#505050" stroke="#000000" fillOpacity="1" strokeWidth="1" strokeOpacity="1" className="amcharts-bg"></path>
            </g>
            <g>
                <g transform="translate(505.3871808293184,207.24503371416955) scale(1)">
                    <g transform="translate(0,0) scale(0.9017769606464239)">
                    {mapWorldValue == true ? getMapWorld : ''}
                    {mapAfricaValue == true ? getMapAfrica : ''}
                    {mapAsiaValue == true ? getMapAsia : ''}
                    {mapLatinAmericaValue == true ? getMapLatinAmerica : ''}
                      {countries.map(country => (
                        <path cs="100,100"
                            className={`amcharts-map-area ${trueColorAnswer === true ? 'true' : ''} ${falseColorAnswer === true ? 'false' : ''} `}
                            onClick={getMapAfrica}
                            d={country.path}
                            fill="#818181"
                            transform="translate(0,-230)"
                            stroke="#505050" role="menuitem"
                            fillOpacity="1"
                            strokeWidth="1.1089216553982113"
                            strokeOpacity="1"
                            arial={country.label}
                            countryid={country.countryId}>
                        </path>
                      ))}
                    </g>
                </g>
            </g>
        </svg>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        children={contentModal}
        />
      <ModalDescription
        active={modalDescriptionActive}
        setActive={setModalDescriptionActive}
        flag={flagId}
        nameCountry={nameCountryValue}
        descriptionCountry={descriptionCountry}
        />
      <Preloader
        active={preloaderActive}
        setActive={setPreloaderActive}
      />
    </div>
  );
};

export default Game;
