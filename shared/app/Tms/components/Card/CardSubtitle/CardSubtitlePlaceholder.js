import React from 'react';
import classnames from 'classnames';
import styles from './CardSubtitle.scss';

const css = classnames(styles.cardSubtitle, styles['cardSubtitle--loader']);

/**
 * SubTitlePlaceholder
 *
 * used to render a placeholder when Subtitle has no content
 */
const CardSubtitlePlaceholder = () =>
  (<div>
    <div className={css} />
    <div className={css} />
  </div>);

export default CardSubtitlePlaceholder;
