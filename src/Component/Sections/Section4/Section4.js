import React, { Component } from 'react';
import Classes from './Section4.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { Element } from 'react-scroll';
import axios from '../../../hoc/Axios';
class Section4 extends Component {

  state = {
    Name: '',
    Email: '',
    Comment: '',
    showSuccess: false,
    showFailure: false,
    loader: false
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
    const submitFeedback = event => {
      event.preventDefault();
      if (this.state.Name!==''&&this.state.Email!==''&&this.state.Comment!==''){
        const oldState = { ...this.state };
        oldState.loader = !oldState.loader;
        this.setState(oldState);
        
        axios
          .post('/feedback.json', {
            Name: this.state.Name,
            Email: this.state.Email,
            Comment: this.state.Comment,
            Date: new Date()
          })
          .then(response => {
            if (response.status >= 200 && response.status <= 300) {
              const oldState = { ...this.state };
              oldState.showSuccess = !oldState.showSuccess;
              oldState.loader = !oldState.loader;
              this.setState(oldState);
            } else if (response.status >= 400) {
              const oldState = { ...this.state };
              oldState.showFailure = !oldState.showFailure;
              oldState.loader = !oldState.loader;
              this.setState(oldState);
            }
          });
      }
      else{
        alert("Please fill all the Fields");
      }
    };

    const addName = event => {
      const oldState = { ...this.state };
      oldState.Name = event.target.value;
      this.setState(oldState);
    };
    const addEmail = event => {
      const oldState = { ...this.state };
      oldState.Email = event.target.value;
      this.setState(oldState);
    };
    const addComment = event => {
      const oldState = { ...this.state };
      oldState.Comment = event.target.value;
      this.setState(oldState);
    };
    return (
      <Element id='Feedback' name='Feedback'>
        <div style={{background:'white',padding:'10px'}} className={Classes.Sponsors}>
        <br/>
          <h1 >Sponsors :</h1>
          <br/>
          <div className='row'>
            
               <img src='/assets/csnet/Sponsor1.jpeg' />
               <img src='/assets/csnet/Sponsor2.jpeg' />
               <img src='/assets/csnet/Sponsor3.jpeg' />
               <img src='/assets/csnet/Sponsor4.jpg' width="90px" height="60px"/>
               <img src='/assets/csnet/Sponsor5.jpg' />
               <img src='/assets/csnet/Sponsor6.jpeg' />
               <img src='/assets/csnet/Sponsor7.jpeg' />
          </div>
          <br/>
          </div>
        <section className={Classes.Section4}>
          

          <div className='container-fluid'>
            <div className='row'>
              <div className={Classes.Footer}>
                <ScrollAnimation animateIn='slideInLeft' animateOnce={true}>
                  <h1>Feedback Form :</h1>

                  <br />
                  <br />
                </ScrollAnimation>
                <ScrollAnimation animateIn='slideInLeft' animateOnce={true}>
                  <form>
                    <input
                      type='text'
                      placeholder='Name'
                      onChange={addName}
                      required
                    ></input>
                    <input
                      type='Email'
                      placeholder='Email'
                      onChange={addEmail}
                      required
                    ></input>
                    <textarea
                      type='text'
                      placeholder='Comment'
                      style={{ width: '100%' }}
                      onChange={addComment}
                      required
                    ></textarea>
                    <button
                      type='Submit'
                      onClick={submitFeedback}
                      disabled={
                        this.state.showSuccess || this.state.showFailure
                          ? true
                          : false
                      }
                    >
                      Submit
                    </button>
                    <br />
                    <br />
                    {this.state.loader ? Loading : null}
                    <span
                      style={{ color: 'green' }}
                      className={
                        this.state.showSuccess & !this.state.loader
                          ? Classes.show
                          : Classes.hidden
                      }
                    >
                      <i className='fas fa-check-circle'></i> Successfully
                      Submitted !
                    </span>
                    <span
                      style={{ color: 'red' }}
                      className={
                        this.state.showFailure ? Classes.show : Classes.hidden
                      }
                    >
                      Something went wrong!
                    </span>
                  </form>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
        
      </Element>
    );
  }
}
export default Section4;
