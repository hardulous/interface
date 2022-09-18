import React from 'react';
import Events from './Events/Events';
import { Element } from 'react-scroll';
import Classes from './Section2.module.css';
const Section2 = props => {
  const EventsInfo = [
    
    { name: 'Fun Games', bg: 'white' },
    { name: 'Games', bg: 'white' },
    { name: 'Competitions', bg: 'white' },
    { name: 'Quizes', bg: 'white' },
    { name: 'Sports', bg: 'white' }
];

  return (
    <>
      <span
        className={Classes.anchor}
        id='map_4D85448A3D4C4180A02BD6FC387ABC45'
      ></span>
      <Element name='Events' id='Events'>
        <section style={{background: 'linear-gradient(120deg,orange 50%,#f4f6f6 50%)'}}>
          <center>
<br/>
          <h1 >Events.</h1>

          <h3>Note: For team events Also Add Team Name</h3>
                    
          <br/>
          </center>
          <div
            className='row'
            style={{ margin: '0px' }}
          >
            
            <div className='offset-md-1'></div>
            {EventsInfo.map(Element => {
              return (
                <Events
                  name={Element.name}
                  key={Element.name}
                  Dialog={props.Dialog}
                />
              );
            })}
          </div>

        </section>
      </Element>
    </>
  );
};

export default Section2;
