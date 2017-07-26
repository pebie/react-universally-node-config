/* eslint max-len: 0 */
import PropTypes from 'prop-types';
import React from 'react';

const User = ({ width, height, svgClass }) =>
  (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 92 100"
    width={width}
    height={height}
    className={svgClass}
    aria-labelledby="title desc"
    tabIndex="0"
    role="img"
  >
    <title id="title">Utilisateur</title>
    <desc id="desc">Image de profile par défaut</desc>
    <path d="M61.272 58.243c-.08 3.067-6.88 5.543-15.278 5.543-8.4 0-15.198-2.476-15.278-5.543C15.038
      70.04 3.64 60.953 0 75.977 10.477 91.027 27.656 100 45.994 100c18.34 0 35.517-8.973
      45.994-24.023-3.64-15.023-15.038-5.936-30.716-17.734zm-35.915-19.57c2.138 5.957 5.84
      11.23 10.718 15.262 2.825 2.327 6.34 3.652 10 3.768 3.64-.1 7.144-1.41 9.958-3.724
      4.922-4.048 8.654-9.35 10.8-15.35 2.1-1.47 3.4-3.836
      3.518-6.4.68-3.65.04-6.83-1.4-7.354-.04-1.2-.16-2.4-.32-3.58-.6-10.32-3.835-14.93-8.595-16.986-4.026-2.982-8.95-4.5-13.958-4.295-4.965-.192-9.852
      1.286-13.878 4.2-5.24 2.15-8.72 7.283-8.88 19.457l-.12 1.152c-1.56.3-2.24 3.6-1.56 7.41.064
      2.64 1.466 5.064 3.72 6.436z"
    />
  </svg>);

User.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  svgClass: PropTypes.string,
};

export default User;
