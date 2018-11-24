import React, { Component } from 'react';
import axios from 'axios'
import qs from 'qs'
import './Contact.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CheckIcon from '@material-ui/icons/Check';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  buttonSuccess: {
    backgroundColor: green[300],
    '&:hover': {
      backgroundColor: green[300],
    },
  },
  buttonProgress: {
    color: green[500],
  },
});

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state =
    {
      form: {
        senderName: '',
        senderEmail: '',
        emailBody: ''
      },
      successfullySubmittedForm: false
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
              value={this.state.form.senderName}
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
              value={this.state.form.senderEmail}
              onChange={this.handleInput}
            />

            <br />
            <br />

            <textarea
              name="emailBody"
              rows="20"
              value={this.state.form.emailBody}
              onChange={this.handleInput}
            />

            <br />
            <br />

            {this.getSubmitButton()}

          </form>

        </header>
      </div>
    );
  }

  getSubmitButton() {
    const { classes } = this.props;

    var button = null;

    const size = "large"

    if (this.state.successfullySubmittedForm){
      button = (
        <Button variant="contained" type="submit" className={classes.buttonSuccess} size={size}>
          Message Sent&nbsp;
          <CheckIcon />
        </Button>
      )
    } else {
      button = (
        <Button variant="contained" color="primary" type="submit" disabled={!this.formHasContent()} size={size}>
          Send&nbsp;
          <MailOutlineIcon />
        </Button>
      )
  }

  return button;
  }

  handleInput(event){
    // console.log(event);
    // console.log(event.target);
    //console.log({inputName: event.target.name, inputValue: event.target.value});

    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      },
      successfullySubmittedForm: false
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const form = this.state.form;

    console.log(JSON.stringify(form));

    if (this.formHasContent()) {

      console.log("Posting contact form");

      const url = process.env.REACT_APP_ApiBase + "postcontactform";
      console.log("Post URL: " + url);

      await axios.post(
        url,
        qs.stringify(form),
        {headers: {'content-type': 'application/x-www-form-urlencoded' }}
      );

      console.log("Posting contact form done");

      this.setState({
        form: {
          senderName: '',
          senderEmail: '',
          emailBody: ''
        },
        successfullySubmittedForm: true
      });
    }
  }

  formHasContent() {
    const form = this.state.form;

    for (const entry in form) {
      const value = form[entry];
      //console.log(entry + ": " + value);

      if (value !== '')
        return true;
    }

    return false;
  }
}

export default withStyles(styles)(Contact);
