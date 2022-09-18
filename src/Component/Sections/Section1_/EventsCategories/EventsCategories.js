import React from 'react';
import Classes from './EventsCategories.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const EventCategories = props => {
  const EventsInfo = [
    { name: 'Games', bg: 'DSC_7.JPG' },
    { name: 'Competitions', bg: 'DSC_1.JPG' },
    { name: 'Quizes', bg: 'DSC_2.JPG' },
    { name: 'Sports', bg: 'DSC_3.JPG' },
    { name: 'Fun Games', bg: 'DSC_4.JPG' },
    { name: 'Fun Games', bg: 'DSC_5.JPG' }
  ];
  return (
    <div style={{ textAlign: 'center' }} className='row'>
      {EventsInfo.map(Element => {
        return (
          <div
            className={Classes.EventCategories + ' col-3 col-md-2'}
            key={Element.bg}
            style={{ padding: '0px' }}
            onClick={() => {
              props.changeState(Element.bg);
            }}
          >
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
              <img
                src={'/assets/csnet/' + Element.bg}
                alt={Element.bg + ' image'}
              />
            </ScrollAnimation>
          </div>
        );
      })}
    </div>
  );
};
export default EventCategories;
