import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import Card from './../Card/Card';
import styles from './ContentRowTemplate.scss';
import { isARemovableContent } from '../../helpers/contents';

/**
 * ContentRowTemplateItem
 *
 * Component used in <ContentRowTemplate /> to render its children
 *
 * @param {object} content      data from TMS to render component
 * @param {number} ratio        ratio used for image sizes
 * @param {func}   getPosterRef allow to get ref of Poster component outside of Card component
 * @param {string} contentType  type of content
 * @param {string} token token
 * @param {number} strateNumber The index of the strate in the array
 * @param {func}   onClickCrossButton function called when cross button is clicked
 */

const ContentRowTemplateItem = ({
  content,
  ratio,
  getPosterRef,
  token,
  onClickCrossButton,
  strateNumber,
  contentType,
}) => {
  const title = get(content, 'title', undefined);
  const subtitle = get(content, 'subtitle', undefined);
  const image = get(content, 'URLImage', undefined);
  const logoChannel = get(content, 'URLLogoChannel', undefined);
  const startTime = get(content, 'startTime', undefined);
  const endTime = get(content, 'endTime', undefined);
  const imageSpecificities = get(content, 'imageSpecificities', undefined);
  const onGoing = startTime ? { startTime, endTime } : undefined;
  return (
    <div className={styles.contentRowItem}>
      <Card
        image={image}
        logoChannel={logoChannel}
        ratio={ratio}
        title={title}
        subtitle={subtitle}
        onGoing={onGoing}
        getPosterRef={getPosterRef}
        imageSpecificities={imageSpecificities}
        contentType={contentType}
        token={token}
        onClickCrossButton={onClickCrossButton}
        contentID={content.contentID}
        strateNumber={strateNumber}
        isRemovableItem={isARemovableContent({ perso: contentType })}
      />
    </div>
  );
};

ContentRowTemplateItem.propTypes = {
  content: PropTypes.shape({
    onClick: PropTypes.shape({
      displayName: PropTypes.string,
    }),
    onGoing: PropTypes.shape({
      startTime: PropTypes.number,
      endTime: PropTypes.number,
    }),
    subtitle: PropTypes.string,
    URLImage: PropTypes.string,
    logoChannel: PropTypes.string,
  }),
  ratio: PropTypes.number.isRequired,
  getPosterRef: PropTypes.func,
  token: PropTypes.string,
  onClickCrossButton: PropTypes.func,
  strateNumber: PropTypes.number,
  contentType: PropTypes.string,
};

ContentRowTemplateItem.defaultProps = {
  content: {},
  token: '',
  onClickCrossButton: () => {},
  listType: '',
  strateNumber: 0,
  getPosterRef: () => {},
  contentType: '',
};

export default ContentRowTemplateItem;
