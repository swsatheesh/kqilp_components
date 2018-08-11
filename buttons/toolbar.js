import React from 'react';
import PropTypes from 'prop-types';
import classBuilder from '../helpers/class_builder';

const Toolbar = ({ children, className }) => (
  <div className={classBuilder('btn-toolbar', className)}>{children}</div>
);

Toolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Toolbar;
