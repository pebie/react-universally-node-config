import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
import isTomorrow from 'date-fns/is_tomorrow';
import setHours from 'date-fns/set_hours';
import setMinutes from 'date-fns/set_minutes';
import isWithinRange from 'date-fns/is_within_range';
import frLocale from 'date-fns/locale/fr';

/**
 * Return correct date of day from timestamp
 *
 * @param {Number} [timestamp]  broadcasting date for the content
 */
export const getDateDay = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const dateDay = format(date, 'dddd DD MMMM', { locale: frLocale });
  return dateDay;
};

/**
 * Return correct hour of day from timestamp
 *
 * @param {Number} [timestamp]  broadcasting date for the content
 */
export const getHourDay = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = format(date, 'HH');
  const minutes = format(date, 'mm');
  const hourDay = `${hours}h${minutes}`;
  return hourDay;
};

/**
 * Return correct date from timestamp
 *
 * @param {Number} [timestamp]  broadcasting date for the content
 * @return {String}
 */
export const dateFormat = (timestamp) => {
  let dateInfos;

  // Get content broadcast infos
  const broadcastDate = new Date(timestamp * 1000);
  const broadcastHours = format(broadcastDate, 'HH');
  const broadcastMinutes = format(broadcastDate, 'mm');
  const futureBroadcast = format(broadcastDate, 'dddd DD MMMM', { locale: frLocale });

  // if broadcast is today
  if (isToday(broadcastDate)) {
    dateInfos = `aujourd'hui à ${broadcastHours}h${broadcastMinutes}`;

    // if broadcast is tomorrow
  } else if (isTomorrow(broadcastDate)) {
    dateInfos = `demain à ${broadcastHours}h${broadcastMinutes}`;

    // all other cases
  } else {
    dateInfos = `le ${futureBroadcast} à ${broadcastHours}h${broadcastMinutes}`;
  }

  return dateInfos;
};

/**
 * isBetweenEroticRange
 *
 * method that check for actual time
 * and return true if charme must show a disclaimer
 *
 * @param  {Object}   [now]   new Date()
 * @return {Boolean}
 */
export const isBetweenEroticRange = (now) => {
  let before530 = new Date();
  let after2230 = new Date();

  before530 = setHours(setMinutes(before530, 30), 5);
  after2230 = setHours(setMinutes(after2230, 30), 22);

  return isWithinRange(now, before530, after2230);
};

/**
 * daysBetweenDates
 *
 * method that format correctly a timestamp
 * to be displayed as an end of availability date
 *
 * @param {number|Date}  [c] closest date
 * @param {number|Date}  [f] furthest date
 */
export const daysBetweenDates = (close, far) => {
  const c = new Date(typeof close === 'number' ? close * 1000 : close);
  const f = new Date(typeof far === 'number' ? far * 1000 : far);

  return Math.abs(Math.ceil((c - f) / (1000 * 3600 * 24)));
};
