const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrHeight = arr.filter(e => e !== -1).sort((a,b) => a - b);
  let count = 0;
  return arr.reduce((acc, curr) => {
    if (curr !== -1) {
      acc.push(arrHeight[count]);
      count++;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
  // return arrResult;
}

module.exports = {
  sortByHeight
};
