import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Filter component to filter search by tags
 * @param {Object[]} tags Array of tag objects
 * @param {Function} onSelect Handle tag selection
 */
const Filter = ({ tags, onSelect, clearSelection, filterSelection }) => {
  return (
    <div className='filter'>
      <div className='filter-box'>
        <div className='box-heading'>Tags</div>
        <div className='box-body'>
          {tags.map((tag) => {
            return (
              <label key={tag.id} className='option-label'>
                <input
                  type='checkbox'
                  key={tag.id}
                  value={tag.value}
                  checked={tag.isChecked}
                  onChange={onSelect}
                />
                {tag.value}
              </label>
            );
          })}
        </div>
        <div className='box-action'>
          <button
            className='filter-actions clear-button'
            onClick={clearSelection}
          >
            <FontAwesomeIcon icon={faTimes} className='action-icon' />
            Clear
          </button>
          <button
            className='filter-actions filter-button'
            onClick={filterSelection}
          >
            <FontAwesomeIcon icon={faFilter} className='action-icon' />
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  /** Array of tags as object with id value and isChecked */
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Handle tag selection */
  onSelect: PropTypes.func.isRequired,
  /** Function to clear the selection field */
  clearSelection: PropTypes.func.isRequired,
  /** Function to handle filter */
  filterSelection: PropTypes.func.isRequired
};

Filter.defaultProps = {
  tags: [{ id: 0, value: 'All', isChecked: false }]
};

export default Filter;
