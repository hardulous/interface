import React, { Component } from 'react';
import Classes from './updateEvent.module.css';
import axios from '../../hoc/Axios';
export class updateEvent extends Component {
  state = {
    event: '',
    date: '',
    coordinators: '',
    venue: '',
    rules: '',
    prize: '',
    fees: '',
    loading: false,
    submitted: false
  };
  render() {
    let Loading = (
      <div>
        <div className='spinner-border' role='status'>
          <span className='sr-only'></span>
        </div>
        &nbsp; Loading...
      </div>
    );
    const updateData = () => {
      this.setState({ loading: true });
      if (this.state.event !== '') {
        axios.post('/Events.json', { ...this.state }).then(Response => {
          this.setState({ loading: false, submitted: true });
        });
      }
    };
    const getData = name => {
      this.setState({ loading: true });
      axios.get('/Events.json').then(Response => {
        Object.values(Response.data).map(Element => {
          if (Element.event === name) {
            this.setState({
              event: Element.event,
              date: Element.date,
              coordinators: Element.coordinators,
              venue: Element.venue,
              rules: Element.rules,
              prize: Element.prize,
              fees: Element.fees,
              loading: false
            });
          }
        });
      });
    };
    if (this.state.event !== '') {
      // axios.get('/Events.json').then(Response => {
      //   Object.values(Response.data).map(Element => {
      //     console.log(Element);
      //   });
      // });
    }
    return (
      <section className={Classes.Section}>
        {this.state.loading ? (
          Loading
        ) : (
          <div className={Classes.Middle}>
            Select your Event : &nbsp;
            <select
              onChange={event => {
                getData(event.target.value);
              }}
            >
              <option>Choose Event</option>
              <option value="Crown's Pitch">Crown's Pitch</option>
              <option value='BGMI'>BGMI</option>
              <option value='Codewar'>Codewar 3.0</option>
              <option value="Typing">Typing</option>
              <option value='Marvel Quiz'>Marvel Quiz</option>
              <option value='Basketball 3V3'>Basketball 3V3</option>
              <option value='Beg Borrow Steal'>Beg Borrow Steal</option>
              <option value='Mr and Miss INTERFACE'>Mr and Miss INTERFACE</option>
            </select>
            <input
              type='text'
              placeholder='Date of Event'
              value={this.state.date}
              onChange={event => {
                this.setState({ date: event.target.value });
              }}
            />
            <input
              type='text'
              placeholder='Coordinators'
              value={this.state.coordinators}
              onChange={event => {
                this.setState({ coordinators: event.target.value });
              }}
            />
            <input
              type='text'
              placeholder='Venue'
              value={this.state.venue}
              onChange={event => {
                this.setState({ venue: event.target.value });
              }}
            />
            <textarea
              placeholder='Rules'
              style={{ height: '100px', margin: '0 auto' }}
              value={this.state.rules}
              onChange={event => {
                this.setState({ rules: event.target.value });
              }}
            />
            <input
              type='text'
              placeholder='Prize Money'
              value={this.state.prize}
              onChange={event => {
                this.setState({ prize: event.target.value });
              }}
            />
            <input
              type='text'
              placeholder='Fees'
              value={this.state.fees}
              onChange={event => {
                this.setState({ fees: event.target.value });
              }}
            />
            <button onClick={updateData}>Update</button>
            <br />
            {this.state.submitted ? (
              <span style={{ color: 'green' }}>Updated Successfully.</span>
            ) : null}
          </div>
        )}
      </section>
    );
  }
}

export default updateEvent;
