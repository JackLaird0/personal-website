import React, { Component } from 'react';
import resume from '../../assets/resume.png';
import './Resume.css';

class Resume extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="resume-container">
        <img src={resume} alt="Jack Laird Resume" className="resume-image" />
      </div>
    )
  }
}

export default Resume;