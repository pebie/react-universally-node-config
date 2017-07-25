import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { areNextPropsDifferent } from '../../helpers/props';
import ContentRowTemplateItem from './ContentRowTemplateItem';
import ContentRowNav from './ContentRowNav/ContentRowNav';
import Carousel from '../Carousel/Carousel';
import CoverImage from '../CoverImage/CoverImage';
import HorizontalScroller from '../HorizontalScroller/HorizontalScroller';
import { ALL_SUPPORTED_RATIOS } from './../../constants/ratios';
import styles from './ContentRowTemplate.scss';

const MAX_ITEM_LAZY_LOAD = 7;

/**
 * ContentRowTemplate
 *
 * Displays contents in a scrollable row.
 * If `title` in `header` prop is, it renders also a header.
 *
 * @param {array}   [contents] List of contents
 * @param {number}  [ratio] The ratio
 * @param {bool}    [isMobile] Is mobile or not
 * @param {func}    [onClickCrossButton] function trigger when cross button is clicked
 * @param {string}  [token] token
 * @param {number}  [strateNumber] The index of the strate in the array
 */
export default class ContentRowTemplate extends Component {
  static propTypes = {
    ratio: PropTypes.oneOf(ALL_SUPPORTED_RATIOS),
    contents: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCrossButton: PropTypes.func,
    token: PropTypes.string,
    strateNumber: PropTypes.number,
  };

  static defaultProps = {
    header: {},
    ratio: 169,
    onClickCrossButton: () => {},
    token: '',
    strateNumber: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      navPositionnerRef: null,
      navRef: null,
      navPosition: 0,
      scrolledOnce: false,
    };
  }

  componentDidMount() {
    // If screen is resizing, re-calculate nav position
    window.addEventListener('resize', this.updateNavPosition);

    // HACK: allows to re-render after SSR
    window.setTimeout(() => {
      this.setNavPosition(this.state.navPositionnerRef, this.state.navRef);
    }, 0);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return areNextPropsDifferent({ ...this.props, ...this.state }, { ...nextProps, ...nextState });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.navPosition === 0 && nextState.navPositionnerRef && nextState.navRef) {
      this.setNavPosition(nextState.navPositionnerRef, nextState.navRef);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateNavPosition);
  }

  getNavPositionnerRef = (node) => {
    if (!this.state.navPositionnerRef) {
      this.setState({ navPositionnerRef: node });
    }
  };

  getNavRef = (node) => {
    if (!this.state.navRef) {
      this.setState({ navRef: node });
    }
  };

  setNavPosition(positionnerRef, navRef) {
    if (!positionnerRef) return;
    const navPosition =
      (positionnerRef.offsetHeight - navRef.offsetHeight) / 2 + positionnerRef.offsetTop;
    this.setState({ navPosition });
  }

  hasScrolled() {
    if (this.state.scrolledOnce) {
      return false;
    }

    this.setState({ scrolledOnce: true });
    return true;
  }

  /**
   * shouldSkipItem
   *
   * This method is used to handle lazy lazy-loading
   * even though HorizontalScroller should take care of it
   *
   * FIXME: This should be a "temporary" solution until we find something better
   */
  shouldSkipItem(index) {
    const { scrolledOnce } = this.state;
    return index > MAX_ITEM_LAZY_LOAD && !scrolledOnce;
  }

  updateNavPosition = () => {
    this.setNavPosition(this.state.navPositionnerRef, this.state.navRef);
  };

  renderContentRowChildrenDesktop(contents) {
    const { ratio, onClickCrossButton, token, strateNumber } = this.props;
    return contents.map((content, index) =>
      (<li className={styles.contentRow__item} key={content.id} data-ratio={ratio}>
        <ContentRowTemplateItem
          content={this.shouldSkipItem(index) ? undefined : content}
          ratio={ratio}
          getPosterRef={index === 0 ? this.getNavPositionnerRef : undefined}
          onClickCrossButton={onClickCrossButton}
          strateNumber={strateNumber}
          token={token}
          contentType={content.type}
        />
      </li>),
    );
  }

  renderContentRowChildrenMobile(contents) {
    return contents.map((content, index) =>
      (<div key={content.id} className={styles.contentRow__carouselItem166}>
        <CoverImage
          image={this.shouldSkipItem(index) ? undefined : content.URLImage}
          onClickData={content.onClick}
        />
      </div>),
    );
  }

  renderContentRowDesktop() {
    const { contents } = this.props;
    return (
      <div className={styles.contentRow__carouselContainer}>
        <HorizontalScroller
          onScrolledOnce={() => this.hasScrolled()}
          prevButton={<ContentRowNav type="prev" getRef={this.getNavRef} />}
          nextButton={<ContentRowNav type="next" getRef={this.getNavRef} />}
          navPosition={this.state.navPosition}
          /* TODO: find a solution to re-implement lazy-loading */
        >
          {this.renderContentRowChildrenDesktop(contents)}
        </HorizontalScroller>
      </div>
    );
  }

  renderContentRowMobile() {
    const { contents } = this.props;
    return (
      <Carousel onScrolledOnce={() => this.hasScrolled()} displayDots>
        {this.renderContentRowChildrenMobile(contents)}
      </Carousel>
    );
  }

  renderChildren() {
    const { ratio } = this.props;
    // @TODO: As of now, we render both desktop and mobile
    // components. Possible fix is to use MediaQueriesHandler
    // for a better optimisation on mobile first
    if (ratio !== 166) {
      return this.renderContentRowDesktop();
    }

    return (
      <div>
        <div className={styles.contentRow__carouselMobile}>
          {this.renderContentRowMobile()}
        </div>
        <div className={styles.contentRow__carouselDesktop}>
          {this.renderContentRowDesktop()}
        </div>
      </div>
    );
  }

  render() {
    const { contents } = this.props;

    // No rendering of component if there is no contents
    if (!contents || !contents.length) {
      return null;
    }

    return (
      <div className={styles.contentRow}>
        {this.renderChildren()}
      </div>
    );
  }
}
