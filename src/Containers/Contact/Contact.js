import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contact-page">
        <h1 className="contact-greeting">
          
        </h1>
        <div className="contact-border">
          <div className="contact-card">
            <p className="contact-name">
              Jack Laird
            </p>
            <p>Email: Jack.laird0@gmail.com</p>
            <p>Phone: 719-290-7764</p>
            <p></p>
          </div>
        </div>
       
      </div>
    )
  }
}

export default Contact;