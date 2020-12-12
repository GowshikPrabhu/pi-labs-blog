import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

const Highlight = (props) => {
  useEffect(() => {
    const updateCodeSyntaxHighlighting = () => {
      document.querySelectorAll('pre code').forEach((block) => {
        // let values = block.innerHTML;
        // block.textContent = values;
        hljs.highlightBlock(block);
      });
    };
    updateCodeSyntaxHighlighting();
  }, [props]);
  return (
    <div
      className='html-content'
      dangerouslySetInnerHTML={{ __html: props.parsedText }}
    />
  );
};

export default Highlight;
