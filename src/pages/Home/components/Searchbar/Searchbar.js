import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Searchbar.css';

/**
 * Search bar
 * @param {String} value Search value
 * @param {Function} onSearchChange Input change handler
 * @param {Function} onSearchSubmit Handle sublmit
 */
const Searchbar = ({ value, onSearchChange, onSearchSubmit }) => {
  return (
    <div>
      <label>Search</label>
      <br />
      <div className='search-bar'>
        <input
          type='text'
          name='search'
          value={value}
          maxLength={100}
          className='search-input'
          placeholder='Enter any search keyword'
          onChange={(text) => onSearchChange(text)}
          onSubmit={onSearchSubmit}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className='search-icon'
          onClick={onSearchSubmit}
        />
      </div>
    </div>
  );
};

Searchbar.propTypes = {
  /** Search value */
  value: PropTypes.string,
  /** Function to handle search input change */
  onSearchChange: PropTypes.func,
  /** Function to handle submit */
  onSearchSubmit: PropTypes.func
};

Searchbar.defaultProps = {
  value: '',
  onSearchChange: () => {},
  onSearchSubmit: () => {}
};

export default Searchbar;