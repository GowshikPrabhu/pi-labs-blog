import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PreFormattedBox = ({ content }) => {
  const [body, setBody] = useState('');
  useEffect(() => {
    let c = content.substring(2, content.length - 2);
    setBody(c);
  }, [content]);
  return (
    <pre
      style={{
        backgroundColor: '#F5F5F5',
        borderRadius: '4px',
        border: '1px solid #d3dce6',
        padding: '16px'
      }}
    >
      {body}
    </pre>
  );
};

PreFormattedBox.prototype = {
  /** Content to be displayed */
  content: PropTypes.string.isRequired
};

export default PreFormattedBox;
