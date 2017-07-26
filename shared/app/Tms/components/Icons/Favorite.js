import PropTypes from 'prop-types';
import React from 'react';

/**
 * Favorite icon
 *
 * @return {jsx}
 */
const Favorite = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 55"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Favoris</title>
    <desc id="desc">Off</desc>
    <path
      className={pathClass}
      d={
        'M19.512,46.667 L19.651,35.618 C19.668,34.253 19.025,32.968 17.931,32.180 L9.074,25.800 L19.433,22.520 C20.712,22.115 21.714,21.094 22.112,19.791 L25.332,9.239 L31.595,18.261 C32.358,19.360 33.598,20.013 34.918,20.013 L34.970,20.013 L45.817,19.872 L39.330,28.727 C38.528,29.821 38.306,31.247 38.737,32.539 L42.220,43.003 L31.948,39.455 C31.521,39.308 31.079,39.235 30.641,39.235 C29.775,39.235 28.918,39.517 28.205,40.059 L19.512,46.667 M23.893,-0.015 L18.224,18.560 L-0.011,24.334 L15.580,35.565 L15.336,55.015 L30.640,43.382 L48.724,49.628 L42.592,31.207 L54.013,15.618 L34.918,15.866 L23.893,-0.015'
      } // eslint-disable-line
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
Favorite.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default Favorite;
