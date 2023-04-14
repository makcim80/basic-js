const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let newArr = [];
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if ((i === 0 && arr[i] === '--discard-prev') || (i === 0 && arr[i] === '--double-prev')) {
      continue;
    }
    if ((i === (length - 1) && arr[i] === '--discard-next') || (i === (length - 1) && arr[i] === '--double-next')) {
      continue;
    }
    if (arr[i] === '--discard-next') {
      i++;
      continue;
    }
    if (arr[i] === '--discard-prev' && arr[i - 2] === '--discard-next') {
      continue;
    }
    if (arr[i] === '--discard-prev') {
      newArr.pop();
      continue;
    }
    if (arr[i] === '--double-next') {
      newArr.push(arr[i + 1])
      continue;
    }
    if (arr[i] === '--double-prev' && arr[i - 2] === '--discard-next') {
      continue;
    }
    if (arr[i] === '--double-prev') {
      newArr.push(arr[i - 1])
      continue;
    }
    if (arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

module.exports = {
  transform
};
