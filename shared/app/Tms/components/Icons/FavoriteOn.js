import PropTypes from 'prop-types';
import React from 'react';

/**
 * FavoriteOn icon
 *
 * @return {jsx}
 */
const FavoriteOn = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 55"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Favoris</title>
    <desc id="desc">On</desc>
    <path
      className={pathClass}
      d={
        'M23.893,-0.015 L18.224,18.560 L-0.011,24.334 L15.580,35.565 L15.336,55.015 L30.640,43.382 L48.724,49.628 L42.592,31.207 L54.013,15.618 L34.918,15.866 L23.893,-0.015'
      }
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
FavoriteOn.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default FavoriteOn;
