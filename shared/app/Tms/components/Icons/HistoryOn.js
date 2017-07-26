/* eslint max-len: ["error", 800]*/
import PropTypes from 'prop-types';
import React from 'react';

/**
 * HistoryOn icon
 *
 * @return {jsx}
 */
const HistoryOn = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 66.000000 61.000000"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Historique</title>
    <desc id="desc">Page historique</desc>
    <path
      className={pathClass}
      d="M25.6 1.7c-5.9 2-14.6 9.7-17 15.1-1.7 3.8-2 4-5 3.1C1.9 19.4.4 19 .3 19 0 19 6 32.3 6.5 32.9c.2.2 3.2-1.7 6.6-4.2 6-4.5 6.1-4.6 3.5-5.3-3.3-.8-3.3-2.1-.1-6.4C26.6 3.3 47.1 4.2 55.7 18.7c2.4 4 2.8 5.9 2.8 11.9 0 6.1-.4 7.7-3 12-1.9 3-4.9 6-7.9 7.9-4.2 2.6-5.9 3-11.7 3-6.7 0-6.8 0-7.3 2.9-.8 4 .7 4.8 8.5 4.3 11.5-.7 20.9-6.9 26-17.3 3.4-7 3.4-18.8 0-25.8C56.2 3.7 39.9-3.2 25.6 1.7z"
    />
    <path d="M29 30.6v11.6l2.3-1.4c1.2-.8 5.2-3.4 9-5.7 3.7-2.4 6.7-4.4 6.7-4.6 0-.3-12.8-8.6-16.7-10.9-1-.6-1.3 1.9-1.3 11z" />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
HistoryOn.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default HistoryOn;
