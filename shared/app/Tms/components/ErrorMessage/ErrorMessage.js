import PropTypes from 'prop-types';
import React from 'react';
import styles from './ErrorMessage.scss';

/**
 * Rendering ErrorMessage Template
 */
const ErrorMessage = ({ children, isAdult }) =>
  (<p className={isAdult ? styles.errorMessage__adult : styles.errorMessage__text}>
    {children}
  </p>);

/**
 * PropTypes Validation
 */
ErrorMessage.propTypes = {
  children: PropTypes.node,
  isAdult: PropTypes.bool,
};

ErrorMessage.defaultProps = {
  children: null,
  isAdult: false,
};

export default ErrorMessage;
