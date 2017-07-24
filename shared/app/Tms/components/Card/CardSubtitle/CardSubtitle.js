import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './CardSubtitle.scss';

/**
 * CardSubtitle
 *
 * used to render text when Subtitle has content
 *
 * @param {string} subtitle text to display
 */
const CardSubtitle = ({ subtitle, dark = false }) =>
  (<div className={classnames(styles.cardSubtitle, { [styles['cardSubtitle--dark']]: dark })}>
    <span>
      {subtitle}
    </span>
  </div>);

CardSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  dark: PropTypes.bool,
};

CardSubtitle.defaultProps = {
  dark: false,
};

export default CardSubtitle;
