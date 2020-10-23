import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';

/** Component to show blockquote */
const BlockQuote = (props) => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: themeMode === 'light' ? '#F3F3F3' : '#333333',
        padding: '20px 25px',
        fontStyle: 'italic',
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
        borderLeft: '8px solid #00cccc',
        width: 'fit-content',
        margin: '25px auto'
      }}
    >
      {props.children.map(({ props }) => (
        <blockquote>{props.children[0]}</blockquote>
      ))}
    </div>
  );
};

export default BlockQuote;
