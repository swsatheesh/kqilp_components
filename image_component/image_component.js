import React from 'react';
import PropTypes from 'prop-types';
import defImg from './default.png';

const ImageComponent = (props) => {
  const { src, alt, ...other } = props;

  return (
    <img
      {...other}
      src={src}
      alt={alt}
      role={alt ? null : 'presentation'}
    />
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
ImageComponent.defaultProps = {
  src: defImg,
  alt: ''
};

export default ImageComponent;
