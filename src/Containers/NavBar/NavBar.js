import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div className="nav-bar">
        <div className= "profile-name-info">
          <p className="name">Jack Laird</p>
        </div>
        <div className="nav-link-container">
          <NavLink to='/'> 
            <div className="nav-bar-link-container link-home">
              HOME 
            </div>
          </NavLink>
          <NavLink to='/portfolio'> 
            <div className="nav-bar-link-container link-portfolio">
            PORTFOLIO 
            </div>
          </NavLink>
          <NavLink to='/about'> 
            <div className="nav-bar-link-container link-about">
            ABOUT 
            </div>
          </NavLink>
          <NavLink to='/resume'> 
            <div className="nav-bar-link-container link-resume">
            RESUME 
            </div>
          </NavLink>
          <NavLink to='/contact'> 
            <div className="nav-bar-link-container link-contact">
            CONTACT 
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default NavBar;