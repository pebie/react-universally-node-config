import { REMOVABLE_TYPES } from '../constants/contents';
/**
 * isARemovableContent
 *
 * Check if the strate is a removable one
 *
 * @param  {object} [strate] object with data about strate
 * @return {boolean}
 */
export const isARemovableContent = ({ perso }) => REMOVABLE_TYPES.indexOf(perso) > -1;

/**
 * isOnGoing
 *
 * Return boolean if we have onGoing param
 *
 * @param {object} [onGoing] infos about the progress of the media
 */

export const isOnGoing = onGoing => onGoing && onGoing.startTime && onGoing.endTime;

/**
 * setContentId
 * When mapping contents in react component we need to set a key for react-id.
 * Passing index to key is not conventional (see no-array-index eslint rules).
 * We need to bind index to a content field.
 * @param {array} contents array of contents
 */
export const setContentId = contents =>
  contents.map(
    (content, index) =>
      /* eslint-disable no-param-reassign */
      (content.id = index),
  );
