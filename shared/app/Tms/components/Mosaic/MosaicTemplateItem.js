import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import Linker from './../Linker/Linker';
import RatioHandler from './../RatioHandler/RatioHandler';
import Channel from './../Channel/Channel';
import ChannelPlaceholder from './../Channel/ChannelPlaceholder';

/**
 * MosaicTemplateItem
 *
 * Component used in <MosaicTemplate /> to render its children
 *
 * @param {object} content data from TMS to render component
 * @param {number} ratio   ratio used for image sizes
 */
const MosaicTemplateItem = ({ content, ratio }) => {
  const name = get(content, 'onClick.displayName', undefined);
  const logoUrl = get(content, 'URLImage', undefined);

  if (content) {
    return (
      <Linker data={content} title={name}>
        <RatioHandler ratio={ratio}>
          <Channel name={name} logoUrl={logoUrl} />
        </RatioHandler>
      </Linker>
    );
  }

  return (
    <RatioHandler ratio={ratio}>
      <ChannelPlaceholder />
    </RatioHandler>
  );
};

MosaicTemplateItem.propTypes = {
  content: PropTypes.shape({
    onClick: PropTypes.shape({
      displayName: PropTypes.string,
    }),
    URLImage: PropTypes.string,
  }),
  ratio: PropTypes.number.isRequired,
};

MosaicTemplateItem.defaultProps = {
  content: [],
};

export default MosaicTemplateItem;
