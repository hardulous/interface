import React from 'react';
import Classes from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
    <div className={Classes.Middle}>
      <div style={{ color: 'orange',fontSize:'27px' }} className='tex-muted'>
        FOLLOW US ON
      </div>
      <br />
      <span style={{ cursor: 'pointer' }}>
        <a href='https://m.facebook.com/profile.php?id=218915401580470&ref=content_filter'>
          <i className={`fab fa-2x fa-facebook ${Classes.icon}`}></i>
        </a>
      </span>
      <span style={{ cursor: 'pointer' }}>
        <a href='https://instagram.com/cs.net.bcas?igshid=bjuuvj186gm8'>
          <i className={`fab fa-2x fa-instagram ${Classes.icon}`}></i>
        </a>
      </span>
      <span style={{ cursor: 'pointer' }}>
        <a href='mailto:interface2k20@gmail.com'>
          <i className={`fas fa-2x fa-envelope ${Classes.icon}`}></i>
        </a>
      </span>
    </div>
  );
};

export default SocialMedia;
