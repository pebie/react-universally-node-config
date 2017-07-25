import PropTypes from 'prop-types';
import React from 'react';

/**
 * CarouselArrow
 *
 * @param {string} svgClass
 * @param {string} pathClass
 */
const CarouselArrow = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 27.1 49.9"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Chevron</title>
    <desc id="desc">Plus de contenus</desc>
    <path className={pathClass} d="M4.2 24.9L27.1 2.1 24.9 0 0 24.9v.1l25 24.9 2.1-2.1z" />
  </svg>);

CarouselArrow.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

CarouselArrow.defaultProps = {
  svgClass: '',
  pathClass: '',
};

export default CarouselArrow;
