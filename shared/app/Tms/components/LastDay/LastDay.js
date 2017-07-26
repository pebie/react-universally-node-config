import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './LastDay.scss';
import Label from '../Label/Label';

const LastDay = ({ position, text }) =>
  text &&
  <div className={classnames(styles.labelWrapper, styles[`labelWrapper--${position}`])}>
    <Label content={text} />
  </div>;

LastDay.propTypes = {
  position: PropTypes.string,
  text: PropTypes.string,
  offset: PropTypes.shape({
    right: PropTypes.string,
    left: PropTypes.string,
  }),
};

LastDay.defaultProps = {
  position: '',
  text: null,
};

export default LastDay;
