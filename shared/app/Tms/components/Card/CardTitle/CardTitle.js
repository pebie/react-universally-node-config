import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './CardTitle.scss';

/**
 * CardTitle
 *
 * used to display text when Title has content
 *
 * @param {string} title text to display
 */
const CardTitle = ({ title, dark }) =>
  (<div className={classnames(styles.cardTitle, { [styles['cardTitle--dark']]: dark })}>
    <span>
      {title}
    </span>
  </div>);

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
};

CardTitle.defaultProps = {
  dark: false,
};

export default CardTitle;
