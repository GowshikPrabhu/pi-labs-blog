import React from 'react';
import './TeamDetails.css';

const TeamDetails = () => {
  return (
    <div className='team-details'>
      <p className='content-title'>Our Team</p>
      <div className='team-pics'>
        <div className='avatar-area'>
          <img src='https://via.placeholder.com/150' alt='team 1' />
          <p>Shri Saran Raj N</p>
        </div>
        <div className='avatar-area'>
          <img src='https://via.placeholder.com/150' alt='team 1' />
          <p>Gowshik Prabhu</p>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
