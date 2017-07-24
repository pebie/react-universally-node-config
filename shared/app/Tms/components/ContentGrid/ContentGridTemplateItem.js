import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import Linker from './../Linker/Linker';
import Card from '../Card/Card';
import ActorPlaceholder from '../../assets/images/actorplaceholder.jpg';
import { isARemovableContent } from '../../helpers/contents';

/**
 * ContentGridTemplateItem
 *
 * Component used in <ContentGridTemplate /> to render its children
 *
 * @param {object} content data from TMS to render component
 * @param {number} ratio ratio used for image sizes
 * @param {func}   onClickCrossButton function called when cross button is clicked
 * @param {string} listType The type list of the Strate
 * @param {string} token token
 * @param {number} strateNumber The index of the strate in the array
 */
const ContentGridTemplateItem = ({
  content,
  ratio,
  onClickCrossButton,
  listType,
  token,
  strateNumber,
}) => {
  const title = get(content, 'onClick.displayName', undefined);
  const subtitle = get(content, 'subtitle', undefined);
  const URLImage = get(content, 'URLImage', undefined);
  const logoChannel = get(content, 'URLLogoChannel', undefined);
  const startTime = get(content, 'startTime', undefined);
  const endTime = get(content, 'endTime', undefined);
  const imageSpecificities = get(content, 'imageSpecificities', undefined);
  const onGoing = startTime ? { startTime, endTime } : undefined;

  // if personality, show the correct placeHolder (for search)
  const isPersonnality = get(content, 'type', null) === 'personality';
  const image = isPersonnality ? ActorPlaceholder : URLImage;

  return (
    <Linker data={content} title={title}>
      {
        <Card
          image={image}
          logoChannel={logoChannel}
          ratio={ratio}
          title={title}
          subtitle={subtitle}
          onGoing={onGoing}
          imageSpecificities={imageSpecificities}
          listType={listType}
          token={token}
          onClickCrossButton={onClickCrossButton}
          contentID={content.contentID}
          strateNumber={strateNumber}
          isRemovableItem={isARemovableContent({ perso: listType })}
        />
      }
    </Linker>
  );
};

ContentGridTemplateItem.propTypes = {
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
  }).isRequired,
  ratio: PropTypes.number.isRequired,
  token: PropTypes.string,
  onClickCrossButton: PropTypes.func,
  listType: PropTypes.string,
  strateNumber: PropTypes.number,
};

ContentGridTemplateItem.defaultProps = {
  token: '',
  onClickCrossButton: () => {},
  listType: '',
  strateNumber: 0,
};

export default ContentGridTemplateItem;
