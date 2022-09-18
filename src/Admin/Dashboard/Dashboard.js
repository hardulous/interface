import React, { Component } from 'react';
import Classes from './Dashboard.module.css';
import { NavLink, Route } from 'react-router-dom';
import updateEvent from '../updateEvent/updateEvent';
import Feedbacks from '../Feedbacks/Feedbacks';
import Registrations from '../Registrations/Registrations.js';
export class Dashboard extends Component {
  render() {
    return (
      <>
        <section className={Classes.Section}>
          <div className='row'>

            {/* this below is supposed to be commented  */}
            <div className='col-4 optionDiv animated flipInX'>
              <NavLink to='/admin/updateEvent'>
                <i className='fas fa-2x fa-pen-alt'></i>
                <br />
                <b>Update Event</b>
              </NavLink>
            </div>
            <div className='col-4 optionDiv animated flipInX'>
              <NavLink to='/admin/registrations'>
                <i className='fas fa-2x fa-users'></i> <br />
                <b>Registrations</b>
              </NavLink>
            </div>
            <div className='col-4 optionDiv animated flipInX'>
              <NavLink to='/admin/feedbacks'>
                <i className='fas fa-2x fa-comments'></i>
                <br />
                <b>Feedbacks.</b>
              </NavLink>
            </div>

            {/* that above is commented */}

            <div className='col-12'>
              <Route path='/admin/updateEvent' exact component={updateEvent} />
              <Route path='/admin/feedbacks' exact component={Feedbacks} />
              <Route
                path='/admin/registrations'
                exact
                component={Registrations}
              />
            </div>
          </div>

          {/* below is commented */}
          <button
            onClick={() => {
              localStorage.removeItem('Username');
              window.location = '/admin';
            }}
            style={{ background: 'black' }}
          >
            Logout
          </button>
          <br />
          <br />

          {/* above is commented */}

        </section>
      </>
    );
  }
}

export default Dashboard;
