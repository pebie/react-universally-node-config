import PropTypes from 'prop-types';
import React from 'react';

/**
 * Restart icon
 *
 * @return {jsx}
 */
const Restart = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Restart</title>
    <desc id="desc">Relancer la lecture du contenu au début</desc>
    <path
      className={pathClass}
      d={
        'M82.7 34L50.5 60.8V37c0-.8-.6-1.4-1.4-1.4h-8.5c-.7 ' +
        '0-1.4.6-1.4 1.4v54c0 .8.7 1.5 1.4 1.5h8.5c.8 0 1.4-.7 1.4-1.5V67.1L82.7 ' +
        '94c1.7 1.7 4.5 1.7 6.2 0V34c-1.7-1.7-4.5-1.7-6.2 0z'
      }
    />
    <path
      className={pathClass}
      d={
        'M64 0C28.8 0 0 28.8 0 64c0 35.3 28.8 64 64 64 35.3 0 64-28.7 64-64 0-35.2-28.7-64-64-64zm0 ' +
        '8.9c30.5 0 55.1 24.6 55.1 55.1S94.5 119.1 64 119.1 8.9 94.5 8.9 64 33.5 8.9 64 8.9z'
      }
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
Restart.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default Restart;
