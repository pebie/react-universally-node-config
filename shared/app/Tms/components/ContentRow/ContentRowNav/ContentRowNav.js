import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import CarouselArrow from '../../Icons/CarouselArrow';
import styles from './ContentRowNav.scss';

/**
 * ContentRowNav
 *
 * Render a particular button (previous or next) for `contentRow` template
 *
 * @param {string} type   describe if button type
 * @param {func}   getRef allow to get ref of component
 */
const ContentRowNav = ({ type, getRef }) =>
  (<button
    className={classnames(styles.contentRowNav, styles[`contentRowNav--${type}`])}
    ref={getRef}
  >
    <CarouselArrow />
  </button>);

ContentRowNav.propTypes = {
  type: PropTypes.oneOf(['prev', 'next']).isRequired,
  getRef: PropTypes.func,
};

ContentRowNav.defaultProps = {
  getRef: () => {},
};

export default ContentRowNav;
