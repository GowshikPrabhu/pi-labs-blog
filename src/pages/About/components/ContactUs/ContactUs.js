import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='contactus'>
      <div className='contact-body'>
        <div className='contact-body-item left'>
          <div className='contact-title'>
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className='contact-contact'>
            CONTACT INFO : +62 81 314 928 595
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
