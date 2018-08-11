import React from 'react';
import PropTypes from 'prop-types';
import classBuilder from '../helpers/class_builder';

const defaultBtnClasses = ['btn'];
const IconButton = ({ children, iconName, align, outline, onClick, disabled, className }) => {
  return (
    <button
    className={classBuilder(defaultBtnClasses, (outline ? 'btn-default' : 'icon-button'), align, className)}
    onClick={onClick}
    disabled={disabled}
  >
  <span className={`fa fa-${iconName}`} />
    {children}
  </button>
  )
};

IconButton.defaultProps = {
  iconName: 'home',
  disabled: false,
  className: '',
  children: '',
  align: '',
  outline: false
};

IconButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconName: PropTypes.string,
  align: PropTypes.oneOf(['', 'right', 'left']),
  outline: PropTypes.bool,
  disabled: PropTypes.bool
};

export default IconButton;
