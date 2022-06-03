import React from 'react';
import {useState} from 'react';
import '../styles/Search.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState()

  return (
    <div class="input-group mb-3 pe-3 px-3">
      <input
          type="text"
          class="form-control"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon2"
          value = {searchValue}
          onChange = {event => setSearchValue(event.target.value)}
          />
      <span class="input-group-text">
         <img className="loupe__img" src="assets/img/loupe.png" alt="loupe" />
      </span>
    </div>
  );
};

export default Search;
