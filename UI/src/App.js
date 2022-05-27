import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from './pages/Auth';
import Entry from './pages/Entry';
import Game from './pages/Game';
import PlayersHistory from './pages/PlayersHistory';
import PlayersItem from './pages/PlayersItem';
import Rating from './pages/Rating';
import PlayersOnline from './pages/PlayersOnline';
import Error from './pages/Error';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/registration" element={<Auth />} />
          <Route path="/game" element={<Game />} />
          <Route path="/history" element={<PlayersHistory />} />
          <Route path="/item" element={<PlayersItem />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/online" element={<PlayersOnline />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
