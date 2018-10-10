import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink to='/resume'> RESUME </NavLink>
        <NavLink to='/contact'> CONTACT </NavLink>
      </div>
    )
  }
}

export default Home;