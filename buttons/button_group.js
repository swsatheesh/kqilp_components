import React from 'react';
import PropTypes from 'prop-types';
import classBuilder from '../helpers/class_builder';

const ButtonGroup = (props) => {
  const classes = classBuilder('btn-group', props.alignRight ? 'right' : '');
  return (
    <div className={classes} >
      {props.children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  alignRight: PropTypes.bool
};

export default ButtonGroup;
