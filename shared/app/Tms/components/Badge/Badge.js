import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './Badge.scss';

/**
 * Rendering Badge
 */
const Badge = ({ size, theme, active, disable, customClass, children }) =>
  (<div
    className={classNames(styles.badge, styles[`badge--${size}`], styles[`badge--${theme}`], {
      [styles['badge--active']]: active,
      [styles['badge--disabled']]: disable,
      [customClass]: customClass,
    })}
  >
    {children}
  </div>);

Badge.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  theme: PropTypes.string,
  active: PropTypes.bool,
  disable: PropTypes.bool,
  customClass: PropTypes.string,
};

Badge.defaultProps = {
  children: null,
  size: '',
  theme: '',
  active: false,
  disable: false,
  customClass: '',
};

export default Badge;
