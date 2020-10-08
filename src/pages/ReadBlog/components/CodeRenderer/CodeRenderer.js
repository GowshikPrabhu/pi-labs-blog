import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { atomOneDark, Code, CopyBlock } from 'react-code-blocks';

/**
 * Display the inline code
 * @param {String} language Language of code
 * @param {Array} children Contains the code
 */
export const InlineCode = ({ language, children }) => {
  return (
    <div
      style={{
        display: 'inline'
      }}
    >
      <Code
        text={children[0].props.children}
        language={language}
        theme={atomOneDark}
      />
    </div>
  );
};

InlineCode.propTypes = {
  /** Language of the code */
  language: PropTypes.string,
  /** Array containing string of code */
  children: PropTypes.array
};

InlineCode.defaultProps = {
  language: 'jsx'
};

/**
 * Display the block code
 * @param {String} language Language of code
 * @param {Array} children Contains the code
 */
export const BlockCode = (props) => {
  const [code, setCode] = useState(``);
  useState(() => {
    let c = props.code.substring(2, props.code.length - 2);
    setCode(c);
  });
  return (
    <div>
      <CopyBlock
        text={code}
        language={props.language}
        showLineNumbers={true}
        codeBlock
        theme={atomOneDark}
      />
    </div>
  );
};

BlockCode.propTypes = {
  /** Language of the code */
  language: PropTypes.string,
  /** Array containing string of code */
  children: PropTypes.array
};

BlockCode.defaultProps = {
  language: 'jsx'
};
