import React, { Component } from 'react';
import Classes from './Section1_.module.css';
import EventsCategories from './EventsCategories/EventsCategories';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { Element } from 'react-scroll';
class Section1_ extends Component {
  state = {
    filename: 'DSC_6.JPG'
  };
  render() {
    const changeState = filename => {
      this.setState({ filename: filename });
    };
    return (
      <>
        <Element id='Overview' name='Overview'>
          <section className={Classes.Section1_}>
            <center>
<br/>
            <h1 style={{color:'orange'}}>Overview.</h1>
            </center>
            <div className='row'>
              <div className='col-md-6' style={{ padding: '25px' }}>
                <ScrollAnimation animateOnce={true} animateIn='slideInLeft'>
                  <p>
                    Interface is the annual <b> Techno-Cultural Fest</b> of BCAS,
                    University of Delhi. This Event is organised by the Official
                    Computer Science Department Society i.e CS.net . <br />
                    .
                    <br />
                    <br />
                    <b>Date :</b> 7th & 8th April 2022
                    <br />
                    .<br />
                    <b>Events :</b> Mentioned below
                    <br />
                    .<br />
                    <b>Registrations : </b> Opened Now.
                    <br />
                    .<br />
                    <b>Address :</b> Bhaskaracharya College of Applied Sciences,{' '}
                    <br /> Sector 2,Dwarka<br/>
                    .<br />
                    <b>Location :</b><br/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9605831669023!2d77.06617501508187!3d28.60095928243042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b31d6b7e947%3A0x9236de49bb264e3b!2sBhaskaracharya%20College%20of%20Applied%20Sciences%2C%20Pocket%202%2C%20Sector%202%20Dwarka%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%20110075!5e0!3m2!1sen!2sin!4v1580306237577!5m2!1sen!2sin" width="300" height="250" frameborder="0" allowfullscreen=""></iframe>
                  </p>
                </ScrollAnimation>
              </div>

              <div
                className='col-md-6'
                style={{ textAlign: 'center', padding: '25px' }}
              >
                <ScrollAnimation animateOnce={true} animateIn='slideInRight'>
                  <img
                    src={'/assets/csnet/' + this.state.filename}
                    className={Classes.image}
                    alt={this.state.filename}
                  />
                  <br />
                  <span style={{fontSize:'20px'}}>Glimpse of Interface 2019</span>
                  <br />
                  <span style={{ color: 'orange' }}>
                    {' '}
                    
                  </span>
                </ScrollAnimation>
              </div>

            </div>
            <div
              className='row text-center'
              style={{ background: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url('/assets/images/Technology.jpg') no-repeat fixed", padding: '20px', color: 'white' }}
            >
              <div
                className='col-4'
                style={{ margin: '10px 0', fontSize: '14px' }}
              >
                <ScrollAnimation animateOnce={true} animateIn='slideInLeft'>
                  <h1>2</h1>
                  <span style={{color:'orange',fontSize:'15px',fontWeight:'bold'}}>Days Event</span>
                </ScrollAnimation>
              </div>
              <div
                className='col-4'
                style={{ margin: '10px 0', fontSize: '14px' }}
              >
                <ScrollAnimation animateOnce={true} animateIn='slideInLeft'>
                  <h1>500+</h1>
                  <span style={{color:'orange',fontSize:'15px',fontWeight:'bold'}}>
                    Participants.
                    </span>
                </ScrollAnimation>
              </div>
              <div
                className='col-4'
                style={{ margin: '10px 0', fontSize: '14px' }}
              >
                <ScrollAnimation animateOnce={true} animateIn='slideInLeft'>
                  <h1>12</h1>
                  <span style={{color:'orange',fontSize:'15px',fontWeight:'bold'}}>Events</span>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </Element>
      </>
    );
  }
}

export default Section1_;
