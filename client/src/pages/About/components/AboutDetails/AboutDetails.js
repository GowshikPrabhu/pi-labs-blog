import React from 'react';
import PropTypes from 'prop-types';
import './AboutDetails.css';

/**
 * About us page contents
 * @param {String} title Title of content
 * @param {String} description Description of content
 */
const AboutDetails = ({ title, description }) => {
  return (
    <div>
      <p className='content-title'>{title}</p>
      <p className='content-description'>{description}</p>
    </div>
  );
};

AboutDetails.propTypes = {
  /** Title of content */
  title: PropTypes.string.isRequired,
  /** Description of content */
  description: PropTypes.string.isRequired
};

export default AboutDetails;
