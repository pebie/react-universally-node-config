import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './Label.scss';

/**
 * Label
 *
 * used to display an insert in poster in one of the corners
 *
 * @param {string} title text to display
 */
const Label = ({ content, color, size }) =>
  (<div className={classnames(styles.label, styles[`label--${color}`], styles[`label--${size}`])}>
    {content}
  </div>);

Label.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['raspberry']),
  size: PropTypes.oneOf(['small', 'medium']),
};

Label.defaultProps = {
  color: 'raspberry',
  size: 'small',
};

export default Label;
