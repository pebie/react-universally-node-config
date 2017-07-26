import PropTypes from 'prop-types';
import React from 'react';

/**
 * Play
 *
 * @param {string} svgClass
 * @param {string} pathClass
 */
const Play = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 85 85"
    className={svgClass}
    aria-labelledby="title"
    tabIndex="0"
    role="img"
  >
    <title id="title">Lecture</title>
    <desc id="desc">Lancer la lecture du contenu</desc>
    <path className={pathClass} d="M73.5,45l-57,36.4V8.7L73.5,45z" />
  </svg>);

Play.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default Play;
