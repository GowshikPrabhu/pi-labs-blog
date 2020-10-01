import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navMenu, setNavMenu] = React.useState('topnav');
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => {
    if (navMenu === '') {
      setNavMenu('toggled');
    } else {
      setNavMenu('');
    }
  };
  const onChangeSearch = (e) => setSearchValue(e.target.value);

  const toggleTheme = () => {
    if (theme == 'light') {
      setTheme('dark');
    } else if (theme == 'dark') {
      setTheme('light');
    }
  };

  return (
    <nav>
      <div className='nav-inner'>
        <div className='nav-left'>
          <img src='/logo512.png' alt='logo' />
          <p>plus infinity labs</p>
          <ul>
            <li>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/blogs' className='nav-link'>
                Blogs
              </Link>
            </li>
            <li>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className='nav-right'>
          <div class='search-container'>
            <input
              type='text'
              placeholder='search'
              value={searchValue}
              onChange={onChangeSearch}
              className='search-input'
              name='search-bar'
              onSubmit={() => console.log(searchValue)}
            />
          </div>
          {theme == 'light' ? (
            <FontAwesomeIcon
              icon={faMoon}
              className='nav-theme-toggle'
              onClick={toggleTheme}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              className='nav-theme-toggle'
              onClick={toggleTheme}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
