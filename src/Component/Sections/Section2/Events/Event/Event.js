import React from 'react';
import Classes from './Event.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
const Event = props => {
  let URL = '/assets/images/' + props.image;
  return (
    <ScrollAnimation animateIn='flipInX' animateOnce={true}>
      <div
        className={Classes.Event}
        onClick={() => {
          props.Dialog(props.name, URL);
        }}
        key={props.name}
      >
        <img src={URL} alt={props.name + ' image'}></img>
        <div className={Classes.Name}>{props.name}</div>
        <div className={Classes.Category}>{props.category}</div>
      </div>
    </ScrollAnimation>
  );
};

export default Event;
