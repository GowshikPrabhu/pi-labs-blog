import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../context/ThemeContext';

const PreFormattedBox = ({ content }) => {
  const [body, setBody] = useState('');
  const { themeMode } = useContext(ThemeContext);

  useEffect(() => {
    let c = content.substring(2, content.length - 2);
    setBody(c);
  }, [content]);
  return (
    <pre
      style={{
        backgroundColor: themeMode === 'light' ? '#F5F5F5' : '#101214',
        borderRadius: '4px',
        border:
          themeMode === 'light' ? '1px solid #d3dce6' : '1px solid #08090a',
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
