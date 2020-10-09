import React from 'react';

/** Component to show blockquote */
const BlockQuote = (props) => {
  return (
    <div
      style={{
        backgroundColor: '#f3f3f3',
        padding: '10px',
        borderRadius: '10px',
        borderLeft: '10px solid #999999',
        width: 'fit-content',
        margin: '10px auto'
      }}
    >
      {props.children.map(({ props }) => (
        <blockquote>{props.children[0]}</blockquote>
      ))}
    </div>
  );
};

export default BlockQuote;
