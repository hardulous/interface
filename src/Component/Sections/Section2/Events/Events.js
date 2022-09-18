import React from 'react';
import Classes from './Events.module.css';
import Event from './Event/Event';
const Section2 = props => {
  const EventsList = [
    {
      name: 'Fun Games',
      Events: [
        { name: 'Beg Borrow Steal', image: 'begBorrowSteal.jpg' }
        
      ]
    },
    {
      name: 'Games',
      Events: [
        { name: "Crown's Pitch", image: 'chess.jpeg' }, 
        { name: 'BGMI', image: 'Pubg.jpg' }
      ]
    },
    {
      name: 'Competitions',
      Events: [
        { name: 'Codewar', image: 'CodeWar_2.jpg' },
        { name: 'Typing', image:'Typing.jpg'},
        { name: 'Mr and Miss INTERFACE', image: 'INTERFACE.jpg' }
      ]
    },
    {
      name: 'Quizes',
      Events: [
        { name: 'Marvel Quiz', image: 'MarvelQuiz.jpg' }
      ]
    },
    {
      name: 'Sports',
      Events: [
        { name: 'Basketball 3V3', image: 'BasketBall.jpg' }
      ]
    }
  ];

  return (
    <div className={'slow col-12 col-md-2 ' + Classes.maxWid}>
      {EventsList.map(Element => {
        if (props.name === Element.name) {
          return Element.Events.map((subElement, index) => {
            return (
              <Event
                Dialog={props.Dialog}
                key={subElement.name}
                image={subElement.image}
                category={Element.name}
                name={subElement.name}
              />
            );
          });
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Section2;
