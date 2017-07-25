import PropTypes from 'prop-types';
import React from 'react';
import MosaicTemplateItem from './MosaicTemplateItem';
import styles from './MosaicTemplate.scss';

import { ALL_SUPPORTED_RATIOS } from '../../constants/ratios';

/**
 * MosaicTemplate
 *
 * used when rendering a Page with a template of Mosaic
 *
 * @param {array}  contents data to render children
 * @param {number} ratio ratio used for image sizes
 */
const MosaicTemplate = ({ contents, ratio }) => {
  const items = contents.map(content =>
    (<li className={styles.mosaic__gridItem} key={content.id} data-ratio={ratio}>
      <MosaicTemplateItem content={content} ratio={ratio} />
    </li>),
  );

  return (
    <div className={styles.mosaic}>
      <ul className={styles.mosaic__grid}>
        {items}
      </ul>
    </div>
  );
};

MosaicTemplate.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object).isRequired,
  ratio: PropTypes.oneOf(ALL_SUPPORTED_RATIOS).isRequired,
};

MosaicTemplate.defaultProps = {
  ratio: 43,
  contents: [...Array(10)],
};

export default MosaicTemplate;
