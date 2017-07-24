import PropTypes from 'prop-types';
import React from 'react';
import styles from './Poster.scss';

/**
 * Poster
 *
 * used to display an image when Poster has content
 *
 * @param {node}   children components to render
 * @param {string} image uri of image to display
 */
const Poster = ({ children, image, dark = false }) =>
  (<div
    className={dark ? styles['poster--dark'] : styles.poster}
    style={{ backgroundImage: `url(${image})` }}
  >
    {children}
  </div>);

Poster.propTypes = {
  dark: PropTypes.bool,
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Poster.defaultProps = {
  dark: false,
  children: null,
};

export default Poster;
