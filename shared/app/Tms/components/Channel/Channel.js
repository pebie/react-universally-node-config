import PropTypes from 'prop-types';
import React from 'react';
import styles from './Channel.scss';

/**
 * Channel
 *
 * Used to display a channel picture
 *
 * @param {string} logoUrl url of the channel logo
 * @param {string} name name of the channel
 * @param {func} onClick function to trigger when clicking on
 */
const Channel = ({ name, logoUrl, onClick }) =>
  (<div className={styles.channel} onClick={onClick} role="button" tabIndex={0}>
    <img className={styles.channel__logo} src={logoUrl} alt={name} />
  </div>);

Channel.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Channel.defaultProps = {
  onClick: () => {},
};

export default Channel;
