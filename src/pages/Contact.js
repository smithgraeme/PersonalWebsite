import React, { Component } from 'react';
import axios from 'axios'
import qs from 'qs'
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      senderName: '',
      senderEmail: '',
      emailBody: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            <strong className="title">Email Me</strong>
          </p>

          <form onSubmit={this.handleSubmit} method="post" className="contactForm" autoComplete="off">

            <strong>Who are you?</strong>

            <br />

            <input
              type="text"
              name="senderName"
              autoComplete="false"
              className="smallTextBox"
              value={this.state.senderName}
              onChange={this.handleInput}
            />

            <br />
            <br />

            <strong>{`What's your email?`}</strong><br />
            <div className="smallText">(Note: probably not used for spam. Just kidding. Definitely not used for spam.)</div>

            <input
              type="email"
              name="senderEmail"
              className="smallTextBox"
              value={this.state.senderEmail}
              onChange={this.handleInput}
            />

            <br />
            <br />

            <textarea
              name="emailBody"
              rows="20"
              value={this.state.emailBody}
              onChange={this.handleInput}
            />

            <br />

            <input type="submit" value="Send" />

          </form>

        </header>
      </div>
    );
  }

  handleInput(event){
    // console.log(event);
    // console.log(event.target);
    //console.log({inputName: event.target.name, inputValue: event.target.value});

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    console.log(JSON.stringify(this.state));

    console.log("Posting contact form");

    const url = process.env.REACT_APP_ApiBase + "postcontactform";
    console.log("Post URL: " + url);

    await axios.post(
      url,
      qs.stringify(this.state),
      {headers: {'content-type': 'application/x-www-form-urlencoded' }}
    );

    console.log("Posting contact form done");

    this.setState({
      senderName: '',
      senderEmail: '',
      emailBody: ''
    });

    //TODO: display something to visually indicate submission was successful
  }
}

export default Contact;
