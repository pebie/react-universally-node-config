import isEqual from 'lodash/isEqual'; // TODO remove disable rule

/**
 * areNextPropsDifferent
 *
 * try to compare props in the most efficient way in a shouldComponentUpdate
 * @param  {object} props     the current props of your component
 * @param  {object} nextProps the props your component will receive
 * @return {bool}   true if they are different, false if they aren't
 */
/* eslint-disable import/prefer-default-export */
export const areNextPropsDifferent = (props, nextProps) => {
  const handleLater = [];
  const keys = Object.keys(props);
  let currentKey;
  let propsVal;
  let nextPropsVal;
  let i;

  if (keys.length !== Object.keys(nextProps).length) return true;

  for (i = 0; i < keys.length; i += 1) {
    currentKey = keys[i];
    propsVal = props[currentKey];
    nextPropsVal = nextProps[currentKey];
    if (typeof propsVal !== 'object') {
      if (propsVal !== nextPropsVal) return true;
    } else {
      handleLater.push(currentKey);
    }
  }

  for (i = 0; i < handleLater.length; i += 1) {
    currentKey = handleLater[i];
    propsVal = props[currentKey];
    nextPropsVal = nextProps[currentKey];
    if (!isEqual(propsVal, nextPropsVal)) return true;
  }

  return false;
};
