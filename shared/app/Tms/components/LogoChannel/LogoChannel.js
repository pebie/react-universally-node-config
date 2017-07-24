import PropTypes from 'prop-types';
import React from 'react';
import styles from './LogoChannel.scss';
/**
 * LogoChannel
 *
 * Component to display channel logo over media contents
 *
 * @param {string} logo url of the logo to dislay
 */
const LogoChannel = ({ logo }) =>
  (<div>
    <img alt="logo chaîne" className={styles.logoChannel__image} src={logo} role="presentation" />
  </div>);

LogoChannel.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default LogoChannel;
