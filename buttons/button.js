import React from 'react';
import PropTypes from 'prop-types';
import classBuilder from '../helpers/class_builder';

const Button = ({ children, type, onClick, size, disabled, className, transform }) => {
  const classes = classBuilder('btn', `btn-${type}`, size, className, transform);
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>);
};

Button.defaultProps = {
  type: 'outline',
  disabled: false,
  children: 'Click Me!',
  className: '',
  transform: 'init-caps'
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['solid', 'outline', 'gray', 'link']),
  transform: PropTypes.oneOf(['init-caps', 'lower-case', 'upper-case', 'no-transform']),
  size: PropTypes.oneOf(['btn-lg', 'btn-sm']),
  disabled: PropTypes.bool
};

export default Button;
