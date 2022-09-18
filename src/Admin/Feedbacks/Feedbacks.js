import React, { Component } from 'react';
import axios from '../../hoc/Axios';
import classes from './feedbacks.module.css';
export class Feedbacks extends Component {
  state = {
    data: {},
    loading: true
  };
  render() {
    axios.get('/feedback.json').then(Response => {
      this.setState({ data: Response.data, loading: false });
    });

    return (
      <section className={classes.Section} style={{ background: '#f4f5f5' }}>
        {this.state.loading ? (
          <div>
            <div className='spinner-border' role='status'>
              <span className='sr-only'></span>
            </div>
            &nbsp; Loading...
          </div>
        ) : null}
        {Object.values(this.state.data).map(Element => {
          return (
            <div
              className={classes.Feedback + ' animated flipInX'}
              key={Element.Email}
            >
              <div
                style={{
                  textAlign: 'left',
                  fontSize: '14px'
                }}
              >
                <div
                  style={{
                    color: 'orange',

                    fontSize: '15px'
                  }}
                >
                  {Element.Name}
                </div>
                <div className='text-muted' style={{ fontSize: '15px' }}>
                  on : {Element.Date.toString().slice(0, 10)} at:{' '}
                  {Element.Date.toString().slice(11, 19)} GMT
                </div>
                <div>{Element.Email}</div>

                <div>{Element.Comment}</div>
              </div>
            </div>
          );
        })}
        <br />
        <br />
      </section>
    );
  }
}

export default Feedbacks;
