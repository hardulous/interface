import React, { Component } from 'react';
import Classes from './Login.module.css';

export class Login extends Component {
  state = {
    gif: 'Closed',
    username: true,
    password: false,
    login: false
  };
  render() {

    // Here default username is Admin and default password is admin@qwerty

    const checkUsername = username => {
      if (username === 'Admin') {
        this.setState({ password: true });
      }
    };
    const checkPassword = pass => {
      if (pass === 'admin@qwerty') {
        this.setState({ login: true, gif: 'Open' });
        localStorage.setItem('Username', 'loggedIn');
        window.location = '/admin/updateEvent';
      }
    };
    return (
      <section className={Classes.loginSection}>
        <div class={Classes.Middle}>
          <div class='row'>
            <div
              className='col-md-12'
              style={{
                maxWidth: '500px',
                margin: '0 auto',
                background: '#fff',
                padding: '20px'
              }}
            >
              <img
                src={'/assets/images/lock' + this.state.gif + '.gif'}
                height='300px'
              />

              <h2>Enter Credentials</h2>
              <input
                type='text'
                placeholder='Enter Username'
                onChange={event => {
                  checkUsername(event.target.value);
                }}
              ></input>
              {this.state.password ? (
                <input
                  type='password'
                  placeholder='Enter Password'
                  onChange={event => {
                    checkPassword(event.target.value);
                  }}
                ></input>
              ) : null}
              {this.state.login ? (
                <span>Logging In.</span>
              ) : this.state.password ? (
                <span>Wrong Password</span>
              ) : null}

              <br />

              <span>
                Facing Any Problem? Contact{' '}
                <b>
                  <a href='tel:+9315933365' className='text-muted'>
                    Aman Bisht
                  </a>
                </b>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
