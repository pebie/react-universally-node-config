import PropTypes from 'prop-types';
import React from 'react';
import has from 'lodash/has';
import Poster from './../Poster/Poster';

/**
 * CoverImage
 *
 * This component is in charge of displaying a cover image.
 * It can be clickable if linkerData is passed.
 * It can display element on itself.

 * @type {string} image       url of image over
 * @type {object} onClickData onClick object of TMS
 * @type {bool}   dark        wether we are in a dark context (used for styling)
 * @type {node}   children    facultative node
 */
const CoverImage = ({ image, onClickData, dark, children }) => {
  if (!image) return null;

  const component = (
    <Poster image={image} dark={dark}>
      {children}
    </Poster>
  );

  if (onClickData) {
    if (
      onClickData.onClick &&
      has(onClickData.onClick, 'path') &&
      has(onClickData.onClick, 'URLPage')
    ) {
      return (
        <div role="button" tabIndex={0} onClick={() => {}}>
          {component}
        </div>
      );
    }
    if (has(onClickData, 'path') && has(onClickData, 'URLPage')) {
      return (
        <div role="button" tabIndex={0} onClick={() => {}}>
          {component}
        </div>
      );
    }
  }

  return component;
};

CoverImage.propTypes = {
  image: PropTypes.string,
  onClickData: PropTypes.shape({
    path: PropTypes.string,
    URLPage: PropTypes.string,
  }),
  dark: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

CoverImage.defaultProps = {
  dark: false,
  image: '',
  onClickData: {},
  children: null,
};

export default CoverImage;
