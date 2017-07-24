import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import isWithinRange from 'date-fns/is_within_range';
import styles from './TimerStatus.scss';

/**
 * Convert TMS timestamp into javascript timestamp (in milliseconds)
 * Verify if current time is between startTime and endTime
 *
 * @param  {number} startTime server timestamp (start time)
 * @param  {number} endTime server timestamp (end time)
 * @return {object} converted javascript timestamps and a flag:
 * true if current time is between startTime and endTime)
 */
const getTime = (startTime, endTime) => {
  const start = startTime * 1000;
  const end = endTime * 1000;
  const now = new Date().getTime();
  return {
    start,
    end,
    now,
    isValid: isWithinRange(now, start, end),
  };
};

/**
 * @param  {number} startTime server timestamp (start time)
 * @param  {number} endTime   server timestamp (end time)
 * @return {string}           the percentage of completion due to the start and end times
 */
const getWidth = (startTime, endTime) => {
  const time = getTime(startTime, endTime);
  if (time.isValid) {
    let percentage = 100 * ((time.now - time.start) / (time.end - time.start));
    percentage = `${parseInt(Math.round(percentage), 10).toString()}%`;
    return percentage;
  }
  return '0%';
};

const shouldDisplay = (startTime, endTime) =>
  getTime(startTime, endTime).isValid ? 'block' : 'none';

/**
 * TimerStatus
 *
 * used to display an ongoing timer on contents for live programs
 *
 * @param {number} startTime server timestamp (start time)
 * @param {number} endTime   server timestamp (end time)
 */
const TimerStatus = ({ startTime, endTime }) =>
  (<div className={styles.timerStatus} style={{ display: shouldDisplay(startTime, endTime) }}>
    <span
      className={classNames(styles.timerStatus__line, styles['timerStatus__line--background'])}
    />
    <span className={styles.timerStatus__line} style={{ width: getWidth(startTime, endTime) }} />
  </div>);

TimerStatus.propTypes = {
  startTime: PropTypes.number.isRequired,
  endTime: PropTypes.number.isRequired,
};

export default TimerStatus;
