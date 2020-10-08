import React from 'react';
import PropTypes from 'prop-types';

/** Custom render the image */
const ImageRenderer = ({ alt, src, width, height }) => {
  return (
    <div style={{ width: width, height: height, margin: '0 auto' }}>
      <img src={src} alt={alt} width={'100%'} height={'100%'} />
    </div>
  );
};

ImageRenderer.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

ImageRenderer.defaultProps = {
  width: '70%',
  height: '20%'
};

export default ImageRenderer;
