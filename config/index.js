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
    return get(window.__CLIENT_CONFIG__, key);
  }
  if (require('config').has(key)) {
    return require('config').get(key);
  }
  return '';
};

/**
 * Get all configuration object using node config module
 * @return {class} Config
 */
export const getConfig = () => {
  if (typeof window !== 'undefined') {
    /* eslint-disable no-underscore-dangle */
    return window.__CLIENT_CONFIG__;
  }
  return require('config');
};
