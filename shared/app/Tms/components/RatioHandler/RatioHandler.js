import PropTypes from 'prop-types';
import React from 'react';
import { ALL_SUPPORTED_RATIOS } from './../../constants/ratios';
import styles from './RatioHandler.scss';

const RatioHandler = ({ ratio, children }) =>
  (<div className={styles[`ratioHandler${ratio}`]}>
    {children}
  </div>);

RatioHandler.propTypes = {
  ratio: PropTypes.oneOf(ALL_SUPPORTED_RATIOS).isRequired,
  children: PropTypes.node.isRequired,
};

RatioHandler.defaultProps = {
  ratio: 169,
};

export default RatioHandler;
