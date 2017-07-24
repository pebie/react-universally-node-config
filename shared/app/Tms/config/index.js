/* eslint-disable global-require */
import get from 'lodash/get';
/**
 * Get the value of a key inside node config object
 * @param  {string} key
 * @return {any}
 */
export default (key) => {
  if (typeof window !== 'undefined') {
    /* eslint-disable no-underscore-dangle */
    return get(window.__TMS_CONFIG__, key);
  }
  const config = require('config');
  const path = require('path');
  const ourConfigDir = path.resolve(__dirname);
  const tmsConfig = config.util.loadFileConfigs(ourConfigDir);
  config.util.setModuleDefaults('TmsConfig', tmsConfig);
  return tmsConfig.get(key);
};

/**
 * Get all configuration object using node config module
 * @return {class} Config
 */
export const getConfig = () => {
  if (typeof window !== 'undefined') {
    /* eslint-disable no-underscore-dangle */
    return window.__TMS_CONFIG__;
  }
  const config = require('config');
  const path = require('path');
  const ourConfigDir = path.resolve(__dirname);
  const tmsConfig = config.util.loadFileConfigs(ourConfigDir);
  config.util.setModuleDefaults('TmsConfig', tmsConfig);
  return tmsConfig;
};
