/* eslint max-len: 0 */
import PropTypes from 'prop-types';
import React from 'react';

/**
 * MoodLike icon
 *
 * @return {jsx}
 */
const MoodLike = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Mood</title>
    <desc id="desc">Like</desc>
    <path
      className={pathClass}
      d="M48.736,14.520 C46.434,9.105 42.094,4.764 36.678,2.462 C14.459,-6.981 -6.731,14.208 2.713,36.428 C5.014,41.843 9.355,46.184 14.770,48.485 C36.990,57.929 58.179,36.739 48.736,14.520 ZM35.863,16.302 C38.258,16.302 40.200,18.244 40.200,20.639 C40.200,23.034 38.258,24.976 35.863,24.976 C33.468,24.976 31.526,23.034 31.526,20.639 C31.526,18.244 33.468,16.302 35.863,16.302 ZM15.586,16.302 C17.981,16.302 19.922,18.244 19.922,20.639 C19.922,23.034 17.981,24.976 15.586,24.976 C13.190,24.976 11.249,23.034 11.249,20.639 C11.249,18.244 13.190,16.302 15.586,16.302 ZM25.719,42.588 C18.573,42.588 12.546,37.557 10.678,31.008 L40.758,31.008 C38.892,37.557 32.865,42.588 25.719,42.588 Z"
    />
  </svg>);
/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
MoodLike.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default MoodLike;
