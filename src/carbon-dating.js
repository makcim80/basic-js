const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  if (!(typeof str === 'string')) {
    return false
  }
  if (isNaN(+str)) {
    return false
  }
  // if ((!(str === '0')) || (+str <= 0) || (+str > 15)) {
  //   return false
  // }
  // let str1 = str;
  // let regexp = /\d/g;
  // if (!(typeof str1.match(regexp) === 'number')) {
  //   return false
  // }
  if (+str <= 0) {
    return false
  }
  if (+str > 15) {
    return false
  }
  return Math.ceil( Math.log(15 / +str) * 5730 / 0.693 )
}

module.exports = {
  dateSample
};
