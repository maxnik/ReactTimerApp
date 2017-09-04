import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="h1 navbar-brand mb-0">React Timer App</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/timer" className="nav-link">Timer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/countdown" className="nav-link">Countdown</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Nav;