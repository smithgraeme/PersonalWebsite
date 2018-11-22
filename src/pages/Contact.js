import React, { Component } from 'react';
import './Contact.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            <strong className="title">Send me an email</strong>
          </p>

          <form action="https://api.graemesmith.info/postcontactform" method="post" className="contactForm">

            <strong>Who are you?</strong>
            <br />
            <input type="text" name="senderName" autoComplete="false" className="smallTextBox"/>
            <br />
            <br />

            <strong>What's your email?</strong><br />
            <div className="smallText">(Note: probably not used for spam. Just kidding. Definitely not used for spam.)</div>
            {/* <br /> */}
            <input type="text" name="senderEmail" className="smallTextBox"/>
            <br />
            <br />

            <textarea name="emailBody" rows="20" />

            <br />

            <input type="submit" value="Send" />
          </form>

        </header>
      </div>
    );
  }
}

export default App;
