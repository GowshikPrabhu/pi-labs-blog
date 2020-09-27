import React from 'react';
import PropTypes from 'prop-types';

/**
 * Show the full posts with like and comment section
 * @param {Object} blog Blog object
 */
const ReadBlog = ({ blog }) => {
  return (
    <div>
      <div>
        <p>Full blog view</p>
      </div>
    </div>
  );
};

ReadBlog.propTypes = {
  /** Blog object */
  blog: PropTypes.object
};

export default ReadBlog;
