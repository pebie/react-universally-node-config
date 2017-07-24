import PropTypes from 'prop-types';
import React from 'react';
import { branch } from '../../helpers/utils';
import PieTimer from '../PieTimer/PieTimer';
import Check from '../Icons/Check';
import styles from './ProgressTimer.scss';

/**
 * ProgressTimer Component
 *
 * This component is in charge of displaying
 * the progression of viewing of the user
 *
 * @param {bool}   isInHistory   if the content is in the history list and therefore,
 * if it has been seen
 * @param {number} userProgress  % of progression (88 represents 7/8 of seen content)
 */
const ProgressTimer = ({ isInHistory, userProgress }) =>
  branch(
    isInHistory || userProgress >= 88,
    <div className={styles.progressTimer__check}>
      <Check svgClass={styles.progressTimer__icon} />
    </div>,
    <PieTimer userProgress={userProgress} />,
  );

ProgressTimer.propTypes = {
  isInHistory: PropTypes.bool.isRequired,
  userProgress: PropTypes.number.isRequired,
};

export default ProgressTimer;
