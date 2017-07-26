/* eslint max-len: 0 */
import PropTypes from 'prop-types';
import React from 'react';

/**
 * MoodNeutral icon
 *
 * @return {jsx}
 */
const MoodNeutral = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Mood</title>
    <desc id="desc">Neutral</desc>
    <path
      className={pathClass}
      d="M25.969,0.156 C11.713,0.156 0.156,11.713 0.156,25.969 C0.156,40.225 11.713,51.781 25.969,51.781 C40.225,51.781 51.781,40.225 51.781,25.969 C51.781,11.713 40.225,0.156 25.969,0.156 ZM11.210,21.039 C11.210,18.597 13.190,16.617 15.632,16.617 C18.074,16.617 20.053,18.597 20.053,21.039 C20.053,23.481 18.074,25.461 15.632,25.461 C13.190,25.461 11.210,23.481 11.210,21.039 ZM36.141,38.367 C35.036,38.696 32.111,39.443 25.969,39.443 C19.826,39.443 16.902,38.696 15.796,38.367 C14.467,37.972 13.625,36.517 13.950,35.170 C14.272,33.824 15.605,33.107 16.970,33.314 C18.918,33.609 23.712,33.856 25.969,33.856 C28.225,33.856 33.019,33.609 34.967,33.314 C36.332,33.107 37.666,33.824 37.988,35.170 C38.313,36.517 37.471,37.972 36.141,38.367 ZM36.306,25.461 C33.864,25.461 31.884,23.481 31.884,21.039 C31.884,18.597 33.864,16.617 36.306,16.617 C38.748,16.617 40.727,18.597 40.727,21.039 C40.727,23.481 38.748,25.461 36.306,25.461 Z"
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
MoodNeutral.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default MoodNeutral;
