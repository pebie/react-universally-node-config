import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import classnames from 'classnames';
import { areNextPropsDifferent } from '../../helpers/props';
import * as ScrollerHelpers from '../../helpers/scroller';
import { canUseRAF } from '../../helpers/window';
import styles from './Carousel.scss';

let touchScrollLeft = null;

/**
 * Carousel
 *
 * Displays some items horizontally
 * with possibiliy to scroll inside on touch devices or with arrows
 *
 * @param {number} cols number of columns
 * @param {bool} displayNav wether display both nav buttons
 * @param {element} prevButton React component for previous nav
 * @param {element} nextButton React component for next navPosition
 * @param {bool} lazyLoad if true, children which are not in viewport
 * will be loaded on first scrolling
 * @param {node} children element to render horizontally
 * @param {function} onScrolledOnce function trigger once on first scroll
 */
export default class Carousel extends Component {
  static propTypes = {
    cols: PropTypes.number.isRequired,
    displayNav: PropTypes.bool.isRequired,
    displayDots: PropTypes.bool.isRequired,
    prevButton: PropTypes.element,
    nextButton: PropTypes.element,
    lazyLoad: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onScrolledOnce: PropTypes.func,
  };

  static defaultProps = {
    cols: 1,
    lazyLoad: false,
    displayNav: true,
    displayDots: false,
    prevButton: null,
    nextButton: null,
    onScrolledOnce: () => {},
  };

  constructor(props) {
    super(props);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    Carousel.handleTouchStart = Carousel.handleTouchStart.bind(this);

    // Initialize parameters of carousel
    const nbItems = Carousel.getNbItems(this.props.children);
    const totalPages = Carousel.getTotalPages(nbItems, this.props.cols);

    this.state = {
      totalPages,
      page: 0,
      scrolledOnce: false,
      displayPrevNav: false,
      displayNextNav: totalPages > 1,
      topValue: 0,
      animate: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    // If number of columns change, re-calculate the paging
    if (this.props.cols !== nextProps.cols) {
      this.updateTotalPages(nextProps.children, nextProps.cols);
    }
  }

  /*
  * Block useless render due to onScrollChange() massive triggering
  */
  shouldComponentUpdate(nextProps) {
    return areNextPropsDifferent(this.props, nextProps);
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
    const page = this.getPage(this.scroller.scrollLeft, this.scroller.offsetWidth);

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

  static getNbItems(items) {
    return Children.count(items);
  }

  static getTotalPages(nbItems, nbItemsPerPage) {
    return Math.ceil(nbItems / nbItemsPerPage);
  }

  static getPage(scroll, width) {
    return Math.ceil(scroll / width);
  }

  getActiveDot() {
    const { page, totalPages } = this.state;
    let activeDot = 0;

    if (page === 0) {
      activeDot = 0;
    } else if (page === 1 || page < totalPages - 1) {
      activeDot = 1;
    } else {
      activeDot = 2;
    }

    return activeDot;
  }

  isLowerBoundScrolling() {
    return this.scroller.scrollLeft !== 0;
  }

  isHigherBoundScrolling() {
    const { scrollWidth, scrollLeft, clientWidth } = this.scroller;

    return clientWidth + scrollLeft < scrollWidth;
  }

  updateTotalPages(items, nbItemsPerPage) {
    const nbItems = Carousel.getNbItems(items);
    const totalPages = Carousel.getTotalPages(nbItems, nbItemsPerPage);

    this.setState({ totalPages, displayNextNav: totalPages > 1 });
  }

  handleChangePage(page) {
    const offset = this.scroller.offsetWidth * page;

    if (canUseRAF()) {
      window.requestAnimationFrame(() => {
        ScrollerHelpers.animateScroll(this.scroller, offset, 200);
      });
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
    const { cols, lazyLoad } = this.props;
    const { scrolledOnce } = this.state;

    if (!lazyLoad || scrolledOnce) {
      return true;
    }

    return index <= cols;
  }

  goNext = () => {
    const page = this.state.page + 1;
    this.handleChangePage(page);
  };

  goPrev = () => {
    const page = this.state.page - 1;
    this.handleChangePage(page);
  };

  static handleTouchStart(event) {
    touchScrollLeft = event.touches[0].clientX;
  }

  handleTouchMove(event) {
    if (!touchScrollLeft) {
      return;
    }

    const touchScrollRight = event.touches[0].clientX;
    const touchScrollDiff = touchScrollLeft - touchScrollRight;

    if (Math.abs(touchScrollDiff)) {
      if (touchScrollDiff > 0) {
        this.goNext();
      } else {
        this.goPrev();
      }
    }
    /* reset values */
    touchScrollLeft = null;
  }

  renderItemsList() {
    const { children, cols } = this.props;

    return React.Children.map(children, (child, index) => {
      if (!this.itemCanBeRendered(index)) {
        return null;
      }

      return (
        <li className={styles.carousel__item} key={index} style={{ width: `${100 / cols}%` }}>
          {child}
        </li>
      );
    });
  }

  renderDots() {
    const { children } = this.props;
    const maxDots = 3;
    const activeDot = this.getActiveDot();

    return React.Children.map(children, (child, index) => {
      if (!this.itemCanBeRendered(index) || children.length < 2) {
        return null;
      }

      while (index < maxDots) {
        return (
          <li
            key={index}
            className={classnames(styles.carousel__dotsItem, {
              [styles['carousel__dotsItem--active']]: index === activeDot,
            })}
          >
            {index}
          </li>
        );
      }

      return false;
    });
  }

  render() {
    const { displayNav, displayDots } = this.props;
    let prevButtonClassName;
    let nextButtonClassName;

    if (displayNav) {
      prevButtonClassName = Carousel.getButtonClassName(
        'carousel__prevButton',
        this.state.displayPrevNav,
      );
      nextButtonClassName = Carousel.getButtonClassName(
        'carousel__nextButton',
        this.state.displayNextNav,
      );
    }

    return (
      <div className={styles.carousel}>
        {displayNav &&
          <div role="button" tabIndex={0} className={prevButtonClassName} onClick={this.goPrev}>
            {this.props.prevButton}
          </div>}
        <ul
          ref={(c) => {
            this.scroller = c;
          }}
          className={styles.carousel__track}
          onScroll={this.onScrollChange}
          onTouchStart={event => this.handleTouchStart(event)}
          onTouchMove={event => this.handleTouchMove(event)}
        >
          {this.renderItemsList()}
        </ul>
        {displayNav &&
          <div className={nextButtonClassName} onClick={this.goNext} role="button" tabIndex={0}>
            {this.props.nextButton}
          </div>}
        {displayDots &&
          <ol className={styles.carousel__dots}>
            {this.renderDots()}
          </ol>}
      </div>
    );
  }
}
