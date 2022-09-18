import React, { Component } from 'react';
import Classes from './Admin.module.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
export class Admin extends Component {
  render() {
    return (
      <section className={Classes.Admin}>
        {localStorage.getItem('Username') ? <Dashboard /> : <Login />}
      </section>
    );
  }
}

export default Admin;
