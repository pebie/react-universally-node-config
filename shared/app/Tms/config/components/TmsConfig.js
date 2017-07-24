import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import filterWithRules from '../../../../../shared/utils/objects/filterWithRules';
import { getConfig } from '../../config';

const values = getConfig();

// Filter the config down to the properties that are allowed to be included
// in the HTML response.
const clientConfig = filterWithRules(
  // These are the rules used to filter the config.
  values.clientConfigFilter,
  // The config values to filter.
  values,
);

const serializedClientConfig = serialize(clientConfig);

/**
 * A react component that generates a script tag that binds the allowed
 * values to the window so that config values can be read within the
 * browser.
 *
 * They get bound to window.__CLIENT_CONFIG__
 */
function TmsConfig({ nonce, children }) {
  return (
    <div>
      <script
        type="text/javascript"
        nonce={nonce}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `window.__TMS_CONFIG__=${serializedClientConfig}`,
        }}
      />
      {children}
    </div>
  );
}

TmsConfig.propTypes = {
  nonce: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TmsConfig.defaultProps = {
  children: null,
};

export default TmsConfig;
