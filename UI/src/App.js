import React from 'react';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MapContext} from './context';
import Auth from './pages/Auth';
import Entry from './pages/Entry';
import ChoiceContinent from './pages/ChoiceContinent';
import MenuChoice from './pages/MenuChoice';
import Game from './pages/Game';
import Traning from './pages/Traning';
import PlayersHistory from './pages/PlayersHistory';
import PlayersItem from './pages/PlayersItem';
import RatingSingle from './pages/RatingSingle';
import RatingMultiplayer from './pages/RatingMultiplayer';
import PlayersOnline from './pages/PlayersOnline';
import Error from './pages/Error';


function App() {
  const [mapWorldValue, setMapWorldValue] = useState(false);
  const [mapAfricaValue, setMapAfricaValue] = useState(false);
  const [mapAsiaValue, setMapAsiaValue] = useState(false);
  const [mapLatinAmericaValue, setMapLatinAmericaValue] = useState(false);
  return (
    <div className="App">
      <MapContext.Provider value = {{
        mapWorldValue,
        setMapWorldValue,
        mapAfricaValue,
        setMapAfricaValue,
        mapAsiaValue,
        setMapAsiaValue,
        mapLatinAmericaValue,
        setMapLatinAmericaValue
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/registration" element={<Auth />} />
            <Route path="/continents" element={<ChoiceContinent />} />
            <Route path="/menu" element={<MenuChoice />} />
            <Route path="/game" element={<Game />} />
            <Route path="/traning" element={<Traning />} />
            <Route path="/history" element={<PlayersHistory />} />
            <Route path="/item" element={<PlayersItem />} />
            <Route path="/rating-single" element={<RatingSingle />} />
            <Route path="/rating-multiplayer" element={<RatingMultiplayer />} />
            <Route path="/online" element={<PlayersOnline />} />
            <Route path="*" element={<Error />} />
            </Routes>
            </BrowserRouter>
      </MapContext.Provider>
    </div>
  );
}

export default App;
