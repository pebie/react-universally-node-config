import PropTypes from 'prop-types';
import React from 'react';
import styles from './Channel.scss';

/**
 * Channel
 *
 * Used to display a channel picture
 *
 * @param {string} logoUrl url of the channel logo
 * @param {string} name    name of the channel
 */
const Channel = ({ name, logoUrl }) =>
  (<div className={styles.channel}>
    <img className={styles.channel__logo} src={logoUrl} alt={name} />
  </div>);

Channel.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Channel;
