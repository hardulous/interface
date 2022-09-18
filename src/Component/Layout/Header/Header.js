import React, { Component } from 'react';
import Classes from './Header.module.css';

class Header extends Component {

  state = { toggle: false };
  render() {
    let toggleDropdown = () => {
      let value = this.state.toggle;
      this.setState({ toggle: !value });
    };

    let value = null;
    let div1 = null;
    let div2 = null;
    let div3 = null;
    if (this.state.toggle === true) {
      value = {
        display:'block',
        transform: 'translateX(0vh)',
        transition: 'all 0.3s ease'
      };
      div1 = {
        border: '1px solid white',
        transform: 'rotate(30deg)',
        transition: 'all 0.3s ease',
        width: '30px'
      };
      div2 = {
        border: '1px solid white',
        margin: '5px 0',
        width: '0px',
        visibility: 'hidden',
        transition: 'all 0.3s ease'
      };
      div3 = {
        border: '1px solid white',
        transform: 'rotate(-30deg)',
        transition: 'all 0.3s ease',
        width: '30px'
      };
    } else {
      
      div1 = {
        border: '1px solid white',
        width: '30px',
        transition: 'all 0.3s ease'
      };
      div2 = {
        border: '1px solid white',
        width: '30px',
        margin: '5px 0',
        transition: 'all 0.3s ease'
      };
      div3 = {
        width: '30px',
        border: '1px solid white',
        transition: 'all 0.3s ease'
      };
    }
    return (
      <header>
        <nav>
          <div className={Classes.mobileNav}>

            <div className={Classes.Logo}>I</div>
            <div
              className={Classes.Logo}
              style={{ border: 'none', marginLeft: '30px' }}
            >
              <span style={{ fontSize: '15px' }}>nterface 20</span>
            </div>

            <div className={Classes.MobileButton + ' ' + Classes.DesktopHidden}>
              <span onClick={toggleDropdown}>
                <div style={div1}></div>
                <div style={div2}></div>

                <div style={div3}></div>
              </span>
            </div>
          </div>
          <div className={Classes.Mobile} style={value}>
            <ul>
              <li>
                <a href='#Overview' onClick={toggleDropdown}>
                  Overview
                </a>
              </li>

              <li>
                <a href='#Events' onClick={toggleDropdown}>
                  {' '}
                  Events
                </a>
              </li>
              <li>
                <a href='#CSnet' onClick={toggleDropdown}>
                  {' '}
                  CS.Net
                </a>
              </li>
              <li>
                <a href='#Feedback' onClick={toggleDropdown}>
                  {' '}
                  Feedback
                </a>
              </li>
              <li>
                <a href='#Top' onClick={toggleDropdown}>
                  {' '}
                  Go to TOP
                </a>
              </li>
              <li>
                <a href='#' onClick={()=>{ window.location = '/admin';}}>
                  {' '}
                  Admin 
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
