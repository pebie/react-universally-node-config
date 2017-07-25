import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import classnames from 'classnames';
import { areNextPropsDifferent } from '../../helpers/props';
import * as ScrollerHelpers from './../../helpers/scroller';
import { canUseRAF, canUseDOM } from './../../helpers/window';
import styles from './HorizontalScroller.scss';

/**
 * HorizontalScroller
 *
 * Displays some items horizontally
 * with possibiliy to scroll inside (native or with navigation buttons)
 *
 * @param {boolean} displayNav wether display both nav buttons
 * @param {number} navPosition top CSS style to positionate nav buttons
 * @param {element} prevButton React component for previous nav
 * @param {element} nextButton React component for next navPosition
 * @param {function} onScrolledOnce React component for next navPosition
 * @param {boolean} lazyLoad if true, children which are not in viewport
 * will be loaded on first scrolling
 * @param {node} children element to render horizontally
 */
export default class HorizontalScroller extends Component {
  static propTypes = {
    displayNav: PropTypes.bool.isRequired,
    navPosition: PropTypes.number,
    prevButton: PropTypes.element,
    nextButton: PropTypes.element,
    onScrolledOnce: PropTypes.func,
    lazyLoad: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    lazyLoad: false,
    displayNav: true,
    navPosition: 0,
    prevButton: null,
    nextButton: null,
    onScrolledOnce: () => {},
  };

  state = {
    nbItemsPerPage: 0,
    totalPages: 0,
    page: 0,
    scrolledOnce: false,
    displayPrevNav: false,
    displayNextNav: false,
  };

  componentDidMount() {
    if (canUseDOM()) {
      window.addEventListener('resize', this.handleResize);

      // HACK force initialization of scroller parameters
      window.setTimeout(() => {
        this.handleResize();
      }, 0);
    }
  }

  /*
  * Block useless render due to onScrollChange() massive triggering
  */
  shouldComponentUpdate(nextProps, nextState) {
    return areNextPropsDifferent({ ...this.props, ...this.state }, { ...nextProps, ...nextState });
  }

  componentWillUnmount() {
    if (canUseDOM()) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  /*
  * This method is triggered each time the scroll of track change.
  * To increase performance, maybe add a debounce on it.
  */
  onScrollChange = () => {
    if (!this.state.scrolledOnce && this.props.onScrolledOnce) {
      this.props.onScrolledOnce();
    }

    const scrolledOnce = true;
    const page = HorizontalScroller.getPage(this.scroller.scrollLeft, this.scroller.offsetWidth);

    this.setState({
      page,
      scrolledOnce,
      displayPrevNav: this.isLowerBoundScrolling(),
      displayNextNav: this.isHigherBoundScrolling(),
    });
  };

  static getButtonClassName(className, display) {
    return classnames(styles[className], {
      [styles[`${className}--active`]]: display,
    });
  }

  getNbItemsPerPage() {
    const parentWidth = this.scroller.offsetWidth;
    const parentPadding = this.scroller.childNodes[0].offsetLeft * 2;
    const childWidth = this.scroller.childNodes[0].offsetWidth;

    return Math.round((parentWidth - parentPadding) / childWidth);
  }

  static getNbItems(items) {
    return Children.count(items);
  }

  static getTotalPages(nbItems, nbItemsPerPage) {
    return Math.ceil(nbItems / nbItemsPerPage);
  }

  static getPage(scroll, width) {
    return Math.ceil(scroll / width);
  }

  handleResize = () => {
    const nbItemsPerPage = this.getNbItemsPerPage() || this.state.nbItemsPerPage;

    if (nbItemsPerPage !== this.state.nbItemsPerPage) {
      const nbItems = HorizontalScroller.getNbItems(this.props.children);
      const totalPages = HorizontalScroller.getTotalPages(nbItems, nbItemsPerPage);

      this.setState({ nbItemsPerPage, totalPages, displayNextNav: totalPages > 1 });
    }
  };

  isLowerBoundScrolling() {
    return this.scroller.scrollLeft !== 0;
  }

  isHigherBoundScrolling() {
    const { scrollWidth, scrollLeft, clientWidth } = this.scroller;

    return clientWidth + scrollLeft < scrollWidth;
  }

  updateTotalPages(items, nbItemsPerPage) {
    const nbItems = HorizontalScroller.getNbItems(items);
    const totalPages = HorizontalScroller.getTotalPages(nbItems, nbItemsPerPage);

    this.setState({ totalPages, displayNextNav: totalPages > 1 });
  }

  handleChangePage(page) {
    // calculate the padding dynamically to substract this on width scroller track
    const padding = this.scroller.childNodes[0].offsetLeft * 2;
    const offset = (this.scroller.offsetWidth - padding) * page;

    if (canUseRAF()) {
      window.requestAnimationFrame(() => ScrollerHelpers.animateScroll(this.scroller, offset, 200));
    } else {
      this.scroller.scrollLeft = offset;
    }
  }

  /*
  * Returns true in only 3 cases :
  * 1) If user scrolled once
  * 2) If `lazyLoad` prop is false
  * 3) If item is visible on screen
  */
  itemCanBeRendered(index) {
    const { lazyLoad } = this.props;
    const { scrolledOnce, nbItemsPerPage } = this.state;

    if (!lazyLoad || scrolledOnce) {
      return true;
    }

    return index <= nbItemsPerPage;
  }

  goNext = () => {
    const page = this.state.page + 1;
    this.handleChangePage(page);
  };

  goPrev = () => {
    const page = this.state.page - 1;
    this.handleChangePage(page);
  };

  renderItemsList() {
    const { children } = this.props;

    return Children.map(children, (child, index) => {
      if (!this.itemCanBeRendered(index)) {
        return null;
      }

      return child;
    });
  }

  render() {
    const { displayNav } = this.props;
    let prevButtonClassName;
    let nextButtonClassName;
    let styleNav;

    if (displayNav) {
      prevButtonClassName = HorizontalScroller.getButtonClassName(
        'horizontalScroller__prevButton',
        this.state.displayPrevNav,
      );
      nextButtonClassName = HorizontalScroller.getButtonClassName(
        'horizontalScroller__nextButton',
        this.state.displayNextNav,
      );
      styleNav = {
        top: this.props.navPosition || 0,
      };
    }

    return (
      <div className={styles.horizontalScroller}>
        {displayNav &&
          <div
            className={prevButtonClassName}
            onClick={this.goPrev}
            style={styleNav}
            role="button"
            tabIndex={0}
          >
            {this.props.prevButton}
          </div>}
        <ul
          ref={(c) => {
            this.scroller = c;
          }}
          className={styles.horizontalScroller__track}
          onScroll={this.onScrollChange}
        >
          {this.renderItemsList()}
        </ul>
        {displayNav &&
          <div
            className={nextButtonClassName}
            onClick={this.goNext}
            style={styleNav}
            role="button"
            tabIndex={0}
          >
            {this.props.nextButton}
          </div>}
      </div>
    );
  }
}
