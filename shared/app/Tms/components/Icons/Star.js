import PropTypes from 'prop-types';
import React from 'react';

/**
 * star icon
 *
 * @return {jsx}
 */
const Star = ({ svgClass, pathClass, color }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20.1 19.1"
    style={color ? { fill: `${color}` } : null}
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Star</title>
    <desc id="desc">Notation du contenu</desc>
    <path
      className={pathClass}
      d={'M10 0l2.5 7.6H20l-6 4.2 2.1 7.2-6.1-4.2-6.2 4.3L6 11.9 0 7.6h7.5L10 0z'}
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 * @type {string} color
 */
Star.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
  color: PropTypes.string,
};

export default Star;
