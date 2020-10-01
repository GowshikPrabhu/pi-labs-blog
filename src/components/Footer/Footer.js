import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

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
          <span>Home</span>•<span>Blogs</span>•<span>About</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
