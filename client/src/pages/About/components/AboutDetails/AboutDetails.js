import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './AboutDetails.css';
import { ThemeContext } from '../../../../context/ThemeContext';

/**
 * About us page contents
 * @param {String} title Title of content
 * @param {String} description Description of content
 */
const AboutDetails = ({ title, description }) => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div>
      <h2 className={`content-title ${themeMode}`}>{title}</h2>
      <p className={`content-description ${themeMode}`}>{description}</p>
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
