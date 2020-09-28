import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

/**
 * Show the full posts with like and comment section
 * @param {Object} blog Blog object
 */
const ReadBlog = ({ blog }) => {
  const [markDownBlog, setMarkDownBlog] = React.useState('');

  React.useEffect(() => {
    fetch(example)
      .then((response) => response.text())
      .then((text) => setMarkDownBlog(text));
  });

  return (
    <div>
      <div>
        <p>Full blog view</p>
        <ReactMarkdown
          source={markDownBlog}
          escapeHtml={false}
          skipHtml={false}
        />
      </div>
    </div>
  );
};

ReadBlog.propTypes = {
  /** Blog object */
  blog: PropTypes.object
};

export default ReadBlog;
