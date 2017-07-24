import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './PieTimer.scss';

/**
 * PieTimer
 *
 * used to display the progress of user for viewing programs
 *
 * @param {number}    [userProgress] % of progression
 *
 * 13% = 1/8 of the circle (rounded of 12.5%)
 * 25% = 1/4 of the circle
 * 38% = 3/8 of the circle (rounded of 37.5%)
 * 50% = half of the circle
 * 63% = 5/8 of the circle (rounded of 62.5%)
 * 75% = 3/4 of the circle
 * 88% = 7/8 of the circle (rounded of 87.5%)
 */
const PieTimer = ({ userProgress }) =>
  (<div
    className={classnames(styles.pieTimer, {
      [styles['pieTimer--1']]: userProgress < 13,
      [styles['pieTimer--2']]: userProgress >= 13 && userProgress <= 25,
      [styles['pieTimer--3']]: userProgress > 25 && userProgress < 38,
      [styles['pieTimer--4']]: userProgress >= 38 && userProgress <= 50,
      [styles['pieTimer--5']]: userProgress > 50 && userProgress < 63,
      [styles['pieTimer--6']]: userProgress >= 63 && userProgress <= 75,
      [styles['pieTimer--7']]: userProgress > 75 && userProgress < 88,
    })}
    data-progress={userProgress}
  />);

PieTimer.propTypes = {
  userProgress: PropTypes.number,
};

PieTimer.defaultProps = {
  userProgress: 0,
};

export default PieTimer;
