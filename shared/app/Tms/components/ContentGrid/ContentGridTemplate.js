import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { areNextPropsDifferent } from '../../helpers/props';
import ErrorMessage from './../ErrorMessage/ErrorMessage';
import ContentGridTemplateItem from './ContentGridTemplateItem';
import { ALL_SUPPORTED_RATIOS } from './../../constants/ratios';
import styles from './ContentGridTemplate.scss';

/**
 * ContentGridTemplate
 *
 * used when rendering a Page with a template of ContentGrid
 *
 * NOTE: see also LiveGridTemplate component
 *
 * @param {number} ratio ratio used for image sizes
 * @param {array} contents array of content to display
 * @param {string} pagingUrl url to fetch next contents given by TMS
 * @param {func} onPaging function to fetch next contents during pagination
 * @param {number} nbPlaceholderItems number of placeholders to display
 * @param {string} token token
 * @param {number} strateNumber index of the strate in the array
 */

export default class ContentGridTemplate extends Component {
  static propTypes = {
    ratio: PropTypes.oneOf(ALL_SUPPORTED_RATIOS),
    contents: PropTypes.arrayOf(PropTypes.object).isRequired,
    onPaging: PropTypes.func,
    pagingUrl: PropTypes.string.isRequired,
    nbPlaceholderItems: PropTypes.number.isRequired,
    token: PropTypes.string,
    strateNumber: PropTypes.number,
  };

  static defaultProps = {
    ratio: 169,
    contents: [...Array(10)],
    onPaging: () => {},
    pagingUrl: '',
    nbPlaceholderItems: 10,
    token: '',
    strateNumber: 0,
  };

  shouldComponentUpdate(nextProps) {
    return areNextPropsDifferent(this.props, nextProps);
  }

  renderGridItems() {
    const {
      contents,
      ratio,
      pagingUrl,
      onPaging,
      nbPlaceholderItems,
      token,
      strateNumber,
    } = this.props;

    const waypointIndex = pagingUrl ? contents.length - 1 : undefined;
    const clonedContents = pagingUrl ? contents.concat([...Array(nbPlaceholderItems)]) : contents;

    return clonedContents.map((content, index) =>
      (<li className={styles.contentGrid__gridItem} key={content.id} data-ratio={ratio}>
        <ContentGridTemplateItem
          content={content}
          ratio={ratio}
          contentType={content.type}
          token={token}
          strateNumber={strateNumber}
        />
        {index === waypointIndex && <Waypoint onEnter={onPaging} />}
      </li>),
    );
  }

  renderGrid() {
    return (
      <ul className={styles.contentGrid__grid}>
        {this.renderGridItems()}
      </ul>
    );
  }

  render() {
    const { contents } = this.props;

    const errorMessage = (
      <div className={styles.contentGrid__error}>
        <ErrorMessage>
          {"Aucun contenu n'est disponible pour l'instant."}
        </ErrorMessage>
      </div>
    );

    return (
      <div className={styles.contentGrid}>
        <div className={styles.contentGrid__gridContainer}>
          {contents[0] ? this.renderGrid() : errorMessage}
        </div>
      </div>
    );
  }
}
