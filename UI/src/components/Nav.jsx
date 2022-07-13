import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div>
      <div className="nav justify-content-between align-items-center position-absolute w-100">
        <div className="nav__logo ms-5">
          <img className="nav__logo_img" src="assets/img/world.png" alt="exit" />
        </div>
        <div className="nav__menu d-flex">
          <Link to="/menu-continents" className="nav__menu-link">
            <div className="nav__menu-item me-3 px-3">
              Menu
            </div>
          </Link>
          <Link to="/rating-single" className="nav__menu-link">
            <div className="nav__menu-item me-3 px-3">
              Rating Single
            </div>
          </Link>
          <Link to="/rating-multiplayer" className="nav__menu-link">
            <div className="nav__menu-item me-3 px-3">
              Rating Multiplayer
            </div>
          </Link>
          <Link to="/online" className="nav__menu-link">
            <div className="nav__menu-item me-3 px-3">
              Players online
            </div>
          </Link>
          {/*<Link to="/history" className="nav__menu-link">
            <div className="nav__menu-item me-3 px-3">
              Players history
            </div>
          </Link>*/}
          <Link to="/item" className="nav__menu-link">
            <div className="nav__menu-item me-3 px-3">
              Players item
            </div>
          </Link>
        </div>
          <Link to="/" className="nav__menu-link">
            <div className="nav__exit me-5">
              <img className="nav__img" src="assets/img/exit.png" alt="exit" />
            </div>
          </Link>
      </div>
    </div>
  );
};

export default Nav;
