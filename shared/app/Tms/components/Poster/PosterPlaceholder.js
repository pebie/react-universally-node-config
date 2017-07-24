import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './Poster.scss';

/**
 * PosterPlaceholder
 *
 * used to render a placeholder when Poster has no content
 *
 * @param {bool} dark
 */
const PosterPlaceholder = ({ dark = false }) =>
  (<div
    className={classnames(styles.poster, styles['poster--loader'], {
      [styles['poster--dark']]: dark,
    })}
  />);

PosterPlaceholder.propTypes = {
  dark: PropTypes.bool,
};

PosterPlaceholder.defaultProps = {
  dark: false,
};

export default PosterPlaceholder;
