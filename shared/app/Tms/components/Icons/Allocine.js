import PropTypes from 'prop-types';
import React from 'react';

/**
 * Allocine icon
 *
 * @return {jsx}
 */
const Allocine = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.8 21.2"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Allociné</title>
    <desc id="desc">Note Allociné</desc>
    <path
      className={pathClass}
      d={
        'M12.6 0L8.4 1c.3 1.2-.4 2.4-1.6 2.7C5.6 4 4.4 3.2 4.2 2L0 3.1l4.2 ' +
        '18.2 4.2-1c-.3-1.3.4-2.5 1.6-2.8 1.2-.3 2.3.5 2.6 1.6l4.2-1L12.6 0zm-1.8 ' +
        '7.8c-.4.5-.6.5-1 .5s-1.5-.9-1.5-.9c-1.2 2-2 5.2-2 5.2.3.3 1 0 1.8.2s.6 ' +
        '1.9.3 2.9C8.1 16.8 7 18 6.2 18.1c-.8.1-1.6-.8-2-1.8-.4-1-.4-2.5 0-4.6.4-2.1 ' +
        '2.4-5.8 3.2-7.2.8-1.4 2.4-1.8 3.5-1.8 1.2.1 1.4.7 1.4 1.5.1 1-1.1 3.1-1.5 3.6z'
      }
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
Allocine.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default Allocine;
