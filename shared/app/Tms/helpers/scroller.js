/**
 * This function allows to ease scrollLeft in JS
 * IDEA: find a better function to have a smooth effect in transition
 * @param {node}   elm  HTML element to scroll
 * @param {number} to   value of final scrollLeft
 * @param {number} time duration of animation
*/
/* eslint-disable import/prefer-default-export */
export const animateScroll = (elm, to, time) => {
  const elt = elm;
  const start = new Date().getTime();
  const timer = setInterval(() => {
    const step = Math.min(1, (new Date().getTime() - start) / time);
    elt.scrollLeft += step * (to - elm.scrollLeft);
    if (step === 1) {
      clearInterval(timer);
    }
  }, 10);
};
