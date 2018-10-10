import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="nav-bar">
        <div className= "profile-name-info">
          <p className="name">JACK LAIRD</p>
          <p className="title">software developer</p>
        </div>
        <div className="nav-link-container">
          <NavLink exact to='/' className="nav-bar-link-container link-home" activeClassName="link-home-active"> 
            <div>
              HOME 
            </div>
          </NavLink>
          <NavLink to='/portfolio' className="nav-bar-link-container link-portfolio" activeClassName="link-portfolio-active"> 
            <div>
              PORTFOLIO 
            </div>
          </NavLink>
          <NavLink to='/about' className="nav-bar-link-container link-about" activeClassName="link-about-active"> 
            <div>
            ABOUT 
            </div>
          </NavLink>
          <NavLink to='/resume' className="nav-bar-link-container link-resume" activeClassName="link-resume-active"> 
            <div>
            RESUME 
            </div>
          </NavLink>
          <NavLink to='/contact' className="nav-bar-link-container link-contact" activeClassName="link-contact-active"> 
            <div>
            CONTACT 
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default NavBar;