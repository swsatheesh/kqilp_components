import React from 'react';
import PropTypes from 'prop-types';
import ImageComponent from '../image_component/image_component';

const ImageLabel = ({ src, children, altText, imgClass, labelClass, className }) => (
  <div className={`${className}`}>
    <ImageComponent
      className={`img-responsive ${imgClass}`}
      src={src}
      alt={altText}
    />
    { children ? <label className={`image-label ${labelClass}`} htmlFor={altText}>{children}</label> : null }
  </div>
);

ImageLabel.defaultProps = {
  altText: '',
  imgClass: '',
  labelClass: '',
  className: ''
};

ImageLabel.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
  altText: PropTypes.string,
  imgClass: PropTypes.string,
  labelClass: PropTypes.string,
  className: PropTypes.string
};

export default ImageLabel;
