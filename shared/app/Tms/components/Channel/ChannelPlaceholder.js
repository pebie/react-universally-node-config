import React from 'react';
import classnames from 'classnames';
import styles from './Channel.scss';

/**
 * ChannelPlaceholder
 *
 * used to display a placeholder when Channel doesn't have content yet
 *
 * @param {number} ratio ratio used for size
 */
const ChannelPlaceholder = () =>
  <div className={classnames(styles.channel, styles['channel--loading'])} />;

export default ChannelPlaceholder;
