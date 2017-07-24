import PropTypes from 'prop-types';
import React from 'react';
import styles from './CardSummary.scss';

const CardSummary = ({ summary }) =>
  (<p className={styles.cardSummary}>
    {summary}
  </p>);

CardSummary.propTypes = {
  summary: PropTypes.string,
};

CardSummary.defaultProps = {
  summary: '',
};

export default CardSummary;
