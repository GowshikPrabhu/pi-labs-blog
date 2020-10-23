import React, { useContext } from 'react';
import './ContactUs.css';
import { ThemeContext } from '../../../../context/ThemeContext';

const ContactUs = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div className='contactus'>
      <p className={`content-title ${themeMode}`}>Get In Touch</p>
      <div className='contact-body'>
        <div className='contact-body-item left'>
          <div className='contact-title'>
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className='contact-contact'>
            CONTACT INFO : contact@plusinfinitylabs.com
          </div>
        </div>
        <div className='contact-body-item'>
          <div className='contact-form'>
            <div className='contact-form-group'>
              <input className='contact-form-control' placeholder='NAME' />
            </div>
            <div className='contact-form-group'>
              <input className='contact-form-control' placeholder='EMAIL' />
            </div>
            <div className='contact-form-group message'>
              <input className='contact-form-control' placeholder='MESSAGE' />
            </div>
            <div className='contact-form-group buttons'>
              <button className='contact-form-button'>CANCEL</button>
              <button className='contact-form-button'>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
