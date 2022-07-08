import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/Traning.css';
import Nav from '../components/Nav';
import ModalDescription from '../components/ModalDescription';
import Preloader from '../components/Preloader';



const Traning = () => {
  const [modalDescriptionActive, setModalDescriptionActive] = useState(false)
  const [preloaderActive, setPreloaderActive] = useState(false)
  const [countries, setCountries] = useState([]);
  let [flagId, setFlagId] = useState('')
  let [nameCountryValue, setNameCountryValue] = useState('')
  let [descriptionCountry, setDescriptionCountry] = useState('')

  useEffect(() => {
    setPreloaderActive(() => setPreloaderActive(true))
    if(countries != []) {
      setTimeout(() => {
        getMapWorld()
        setPreloaderActive(() => setPreloaderActive(false))
      }, 1300);
    }
  },[]);

  function choiceCountry(event) {
    setNameCountryValue(() => {
      nameCountryValue = event.target.getAttribute('arial')
      return nameCountryValue
      console.log(event.target.getAttribute('arial'))
    })
    getFlags(event)
    choiceDescription()
    showModalDescription()
  }

  function getFlags(event) {
    setFlagId(() => {
      flagId = event.target.getAttribute('countryid').toLowerCase()
      return flagId
      console.log(event)
    })
  }

  function choiceDescription() {
    setDescriptionCountry(() => {
      descriptionCountry = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.`
      return descriptionCountry
    })
  }

  function hidenModalDescription() {
    setModalDescriptionActive(() => setModalDescriptionActive(false))
  }

  function showModalDescription() {
    setModalDescriptionActive(() => setModalDescriptionActive(true))
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

  return (
    <div>
      <Nav />
      <div className="wrap">
      <svg version="1.1" viewBox="500 0 950 650" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100vh" xmlSpace="preserve">
            <g>
                <path cs="100,100" d="M0.5,0.5 L1919.5,0.5 L1919.5,586.5 L0.5,586.5 Z" fill="#505050" fillOpacity="1" strokeWidth="1" strokeOpacity="1" className="amcharts-bg"></path>
            </g>
            <g>
                <g transform="translate(505.3871808293184,207.24503371416955) scale(1)">
                    <g transform="translate(0,0) scale(0.9017769606464239)">
                      {countries.map(country => (
                        <path cs="100,100"
                            className="amcharts-map-area"
                            onClick={choiceCountry}
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
      </div>
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

export default Traning;
