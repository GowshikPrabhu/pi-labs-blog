import React, { useContext } from 'react';
import './TeamDetails.css';
import { ThemeContext } from '../../../../context/ThemeContext';

const TeamDetails = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div className='team-details'>
      <p className={`content-title ${themeMode}`}>Our Team</p>
      <div className='team-pics'>
        <div className={`avatar-area ${themeMode}`}>
          <img src='https://via.placeholder.com/150' alt='team 1' />
          <p>Shri Saran Raj N</p>
        </div>
        <div className={`avatar-area ${themeMode}`}>
          <img src='https://via.placeholder.com/150' alt='team 1' />
          <p>Gowshik Prabhu</p>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
