import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

/** Footer component */
const Footer = () => {
  return (
    <footer>
      <p className='footer-bname'>plus infinity labs</p>
      <div className='footer-right-col'>
        <div className='footer-right-icons'>
          <FontAwesomeIcon icon={faTwitter} className='footer-icon' />
          <FontAwesomeIcon icon={faYoutube} className='footer-icon' />
        </div>
        <div className='footer-right-links'>
          <span>
            <Link to='/' className='footer-link'>
              Home
            </Link>
          </span>
          •
          <span>
            <Link to='/blogs' className='footer-link'>
              Blogs
            </Link>
          </span>
          •
          <span>
            <Link to='/about' className='footer-link'>
              About
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
