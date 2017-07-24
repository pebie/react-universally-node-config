import React from 'react';
import classnames from 'classnames';
import styles from './CardTitle.scss';

const css = classnames(styles.title, styles['title--loader']);

/**
 * CardTitlePlaceholder
 *
 * used to display a placeholder when Title has no content
 */

/* eslint-disable jsx-a11y/heading-has-content*/
const CardTitlePlaceholder = () => <h4 className={css} />;

export default CardTitlePlaceholder;
