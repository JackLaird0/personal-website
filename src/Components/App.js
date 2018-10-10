import React, { Component } from 'react';
import './App.css';
import NavBar from '../Containers/NavBar/NavBar';
import NavBarBorder from '../Containers/NavBarBorder/NavBarBorder';
import Home from '../Containers/Home/Home';
import Portfolio from '../Containers/Portfolio/Portfolio';
import Contact from '../Containers/Contact/Contact';
import Resume from '../Containers/Resume/Resume';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route path='/' component={NavBarBorder} />
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/resume' component={Resume} />
      </div>
    );
  }
}

export default App;
