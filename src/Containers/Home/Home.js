import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-content-container">
          <h1 className="introduction-title">HELLO, MY NAME IS JACK</h1>
          <p className="introduction">
          Our phones and computers have become reflections of our personalities, our iterests and our identities. I am a Software Developer with a passion for creating engaging user experiences that are thoughtfully designed. I thrive in environments where I can continue to grow and enhance my skills as a developer while building products that people love. Feel free to check out what I'm working on and shoot me a message on LinkedIn or twitter. I look forward to chatting with you soon! 
          </p>
          <div className="social-links">
            <a
              href="https://github.com/JackLaird0"
              className="resource-link"
              target="_blank"
            >
              <div className="github">GitHub</div>
            </a>
            <a
            href="https://twitter.com/Jack_Laird0"
            className="resource-link"
            target="_blank"
            >
              <div className="twitter">Twitter</div>
            </a>
            <a
            href="https://www.linkedin.com/in/jack-laird/"
            className="resource-link"
            target="_blank"
            >
              <div className="linkedin">LinkedIn</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;