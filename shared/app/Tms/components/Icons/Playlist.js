import PropTypes from 'prop-types';
import React from 'react';

/**
 * Playlist icon
 *
 * @return {jsx}
 */
const Playlist = ({ svgClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 38 30"
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Playlist</title>
    <desc id="desc">Ajoutez ce contenu à votre playlist</desc>
    <g>
      <polygon points="33,10.6 23.4,10.6 23.4,1 14.6,1 14.6,
        10.6 5,10.6 5,19.4 14.6,19.4 14.6,
        29 23.4,29 23.4,19.4 33,19.4"
      />
    </g>
  </svg>);

/**
 * PropTypes
 *
 * @type {string} svgClass
 */
Playlist.propTypes = {
  svgClass: PropTypes.string,
};

export default Playlist;
