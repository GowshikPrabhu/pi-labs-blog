import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [navMenu, setNavMenu] = React.useState('topnav');

  const toggleMenu = () => {
    if (navMenu === '') {
      setNavMenu('toggled');
    } else {
      setNavMenu('');
    }
  };

  return (
    <div>
      <div className={`top-menu ${navMenu}`}>
        <div className='top-menu-lead'>
          <img src='/logo512.png' alt='logo' width={100} height={50} />
          <h3>plus infinity labs</h3>
        </div>

        <div className='right'>
          <div className='top-menu-item'>About</div>
          <div className='top-menu-item'>Contact</div>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className='top-menu-icon'
          onClick={toggleMenu}
        />
        <div className='clear-fix' />
      </div>
    </div>
  );
};

export default Header;
