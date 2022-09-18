import React from 'react';
import About from './About/About';
import SocialLinks from './SocialMedia/SocialMedia';
import Classes from './Section1.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { Element } from 'react-scroll';
const Section1 = props => {
  return (
    <>
      <Element id='Top' name='Top'>
        <section className={Classes.Section1}>
          <About />
          <div className={Classes.Middle}></div>
          <SocialLinks />

          

          <div className={Classes.BottomDivPosition}>
            <ScrollAnimation
              animateIn='bounce'
              initiallyVisible={true}
              offset={0}
            >
              <a href='#Overview' style={{ cursor: 'pointer' }}>
                <div className={Classes.BottomDiv}></div>
              </a>
            </ScrollAnimation>
          </div>

        </section>
      </Element>
    </>
  );
};

export default Section1;
