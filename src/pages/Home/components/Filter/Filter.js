import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ tags, onSelect, selectedTags }) => {
  return (
    <div className='filter'>
      <div className='filter-box'>
        <div className='box-heading'>Tags</div>
        <div className='box-body'>
          {tags.map((tag) => (
            <label className='option-label'>
              <input
                type='checkbox'
                checked={() => selectedTags.includes(tag)}
                onClick={onSelect}
              />
              {tag}
            </label>
          ))}
        </div>
        <div className='box-action'>
          <button className='filter-actions clear-button' onClick={() => {}}>
            <FontAwesomeIcon icon={faTimes} className='action-icon' />
            Clear
          </button>
          <button className='filter-actions filter-button' onClick={() => {}}>
            <FontAwesomeIcon icon={faFilter} className='action-icon' />
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  /** Array of tags */
  tags: PropTypes.arrayOf(PropTypes.string)
};

Filter.defaultProps = {
  tags: ['All', 'React', 'React Native', 'Algorithm', 'Recursion']
};

export default Filter;
