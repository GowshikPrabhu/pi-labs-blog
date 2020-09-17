import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Get in touch</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGlobe} className='footer-icons' />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className='footer-icons' />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} className='footer-icons' />
          </li>
        </ul>
      </div>
      <div className='footer-name'>Plus Infinity Labs</div>
    </div>
  );
};

export default Footer;
