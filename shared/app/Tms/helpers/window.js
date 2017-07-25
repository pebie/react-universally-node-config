/**
 * check wether DOM is available
 * @return {bool} true if windows is available
 */
export const canUseDOM = () =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Based on canUseDOM, also check for
 * event listener capabilities from the browser
 * @return {bool} true if we can bind event listeners to the window
 */

export const canUseEventListeners = () =>
  canUseDOM() && (window.addEventListener || window.attachEvent);

/**
 * Based on canUseDOM, also check for requestAnimationFrame
 * capabilities from the browser
 * @return {bool} true if requestAnimationFrame is available
 */
export const canUseRAF = () => canUseDOM() && window.requestAnimationFrame;

/**
* onNextFrame makes sure the DOM is rendered for
* DOM manipulation. Useful inside of componentDidMount
* @param {function} callback  Function to be called on next repainting
* @param {number}   delay     time before callback is called
*/
export const onNextFrame = (callback, delay = 0) => {
  if (canUseRAF()) {
    return setTimeout(() => window.requestAnimationFrame(callback), delay);
  }
  return setTimeout(callback, delay);
};
