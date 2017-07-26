import PropTypes from 'prop-types';
import React from 'react';

/**
 * Arrow icon
 *
 * @return {jsx}
 */
const Arrow = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.85 32.69"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Chevron</title>
    <desc id="desc">Plus de contenus</desc>
    <path
      className={pathClass}
      d={
        'M17.41 15.28L2.56.44A1.5 1.5 0 0 0 .44 2.56l13.78 13.79L.44 30.13a1.5 1.5 0 0 0 2.12 2.12l14.82-14.82a1.51 1.51 0 0 0 .03-2.15z'
      }
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
Arrow.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default Arrow;
