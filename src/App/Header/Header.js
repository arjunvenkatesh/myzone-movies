import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

class Nav extends Component {
  render() {
    return (
      <div className="header">
        <span className="header__title">
          Welcome to Movies DB
        </span>
        <div className="header__nav">
          <nav>
            <ul className="header__links">
              <NavLink activeClassName='active' to="/list">
                <li>List View</li>
              </NavLink>
              <NavLink activeClassName='active' to="/cards">
                <li>Card View</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;