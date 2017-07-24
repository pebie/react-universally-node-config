import PropTypes from 'prop-types';
import React from 'react';

/**
 * Close icon
 *
 * @return {jsx}
 */
const Close = ({ svgClass, pathClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={svgClass}
    tabIndex="0"
    role="img"
    aria-labelledby="title desc"
  >
    <title id="title">
      {'Fermer'}
    </title>
    <desc id="desc">
      {"Ferme l'élément"}
    </desc>
    <path
      className={pathClass}
      d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 * @type {string} pathClass
 */
Close.propTypes = {
  svgClass: PropTypes.string,
  pathClass: PropTypes.string,
};

Close.defaultProps = {
  svgClass: '',
  pathClass: '',
};

export default Close;
