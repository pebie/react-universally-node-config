import PropTypes from 'prop-types';
import React from 'react';

/**
 * check icon
 *
 * @return {jsx}
 */
const Check = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Check</title>
    <desc id="desc">Validé</desc>
    <path className={pathClass} d={'M17.86 28.1L10 20.78l2.84-3 4.82 4.49L27 12l3 2.84z'} />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
Check.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

Check.defaultProps = {
  svgClass: '',
  pathClass: '',
};

export default Check;
