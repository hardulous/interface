import React from 'react';
import Classes from './About.module.css';

const About = () => {
  return (
    <>
      <div className={Classes.Middle}>
        <span className={Classes.BigFont}>INTERFACE 20</span>

        <span className={Classes.Info}>
          - Annual Techno-Cultural Fest of Bhaskaracharya College Of Applied Sciences
          -
        </span>
        <br />
        <br />
        <span className={Classes.Info2}></span>
      </div>
    </>
  );
};

export default About;
