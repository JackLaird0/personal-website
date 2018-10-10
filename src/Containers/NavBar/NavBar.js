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
        
        </div>
        <NavLink to='/'> 
          <div className="nav-bar-link-container link-home">
            HOME 
          </div>
        </NavLink>
        <NavLink to='/portfolio'> 
          <div className="nav-bar-link-container">
          PORTFOLIO 
          </div>
        </NavLink>
        <NavLink to='/about'> 
          <div className="nav-bar-link-container">
          ABOUT 
          </div>
        </NavLink>
        <NavLink to='/resume'> 
          <div className="nav-bar-link-container">
          RESUME 
          </div>
        </NavLink>
        <NavLink to='/contact'> 
          <div className="nav-bar-link-container">
          CONTACT 
          </div>
        </NavLink>
      </div>
    )
  }
}

export default NavBar;