import PropTypes from 'prop-types';
import React from 'react';

/**
 * Download icon
 *
 * @return {jsx}
 */
const Download = ({ svgClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 45"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Télécharger</title>
    <desc id="desc">Téléchargement du contenu</desc>
    <path
      d={
        'M40.250,45.000 L1.750,45.000 C0.784,45.000 0.000,44.007 0.000,43.012 C0.000,42.018 0.784,41.025 1.750,41.025 L20.606,41.025 L1.750,23.025 L14.000,23.025 L14.000,1.800 C14.000,0.806 14.783,-0.000 15.750,-0.000 L26.250,-0.000 C27.217,-0.000 28.000,0.806 28.000,1.800 L28.000,23.025 L40.250,23.025 L21.392,41.025 L40.250,41.025 C41.216,41.025 42.000,42.018 42.000,43.012 C42.000,44.007 41.216,45.000 40.250,45.000 Z'
      } // eslint-disable-line
    />
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 */
Download.propTypes = {
  svgClass: PropTypes.string,
};

export default Download;
