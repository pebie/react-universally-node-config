/* eslint max-len: 0 */
import PropTypes from 'prop-types';
import React from 'react';

/**
 * MoodDislike icon
 *
 * @return {jsx}
 */
const MoodDislike = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Mood</title>
    <desc id="desc">Dislike</desc>
    <path
      className={pathClass}
      d="M25.892,0.156 C11.678,0.156 0.156,11.679 0.156,25.892 C0.156,40.106 11.678,51.628 25.892,51.628 C40.106,51.628 51.628,40.106 51.628,25.892 C51.628,11.679 40.106,0.156 25.892,0.156 ZM11.177,20.977 C11.177,18.543 13.151,16.569 15.586,16.569 C18.021,16.569 19.994,18.543 19.994,20.977 C19.994,23.412 18.021,25.386 15.586,25.386 C13.151,25.386 11.177,23.412 11.177,20.977 ZM37.830,40.298 C36.877,40.850 35.658,40.524 35.106,39.570 C33.207,36.290 29.677,34.253 25.893,34.253 C22.109,34.253 18.578,36.290 16.679,39.571 C16.311,40.211 15.639,40.568 14.951,40.568 C14.612,40.568 14.268,40.481 13.955,40.298 C13.000,39.748 12.674,38.528 13.227,37.574 C15.836,33.064 20.688,30.263 25.893,30.263 C31.096,30.264 35.948,33.064 38.557,37.573 C39.110,38.526 38.784,39.746 37.830,40.298 ZM36.198,25.386 C33.764,25.386 31.790,23.412 31.790,20.977 C31.790,18.543 33.764,16.569 36.198,16.569 C38.633,16.569 40.607,18.543 40.607,20.977 C40.607,23.412 38.633,25.386 36.198,25.386 Z"
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
MoodDislike.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

export default MoodDislike;
