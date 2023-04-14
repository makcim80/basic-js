const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const width = matrix[0].length;
  const height = matrix.length;
  let arrMinesweeper = [];
  for (let row = 0; row < height; row++) {
    arrMinesweeper[row] = [];
    for (let col = 0; col < width; col++) {
      arrMinesweeper[row][col] = 0;
    }
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j]) {
        if (i - 1 >= 0) {
          if (j - 1 >= 0) {
            arrMinesweeper[i - 1][j - 1]++;
          }
          arrMinesweeper[i - 1][j]++;
          if (j + 1 < width) {
            arrMinesweeper[i - 1][j + 1]++;
          }
        }
        if (j - 1 >= 0) {
          arrMinesweeper[i][j - 1]++;
        }
        if (j + 1 < width) {
          arrMinesweeper[i][j + 1]++;
        }
        if (i + 1 < height) {
          if (j - 1 >= 0) {
            arrMinesweeper[i + 1][j - 1]++;
          }
          arrMinesweeper[i + 1][j]++;
          if (j + 1 < width) {
            arrMinesweeper[i + 1][j + 1]++;
          }
        }
      }
    }
  }
  return arrMinesweeper;
}

module.exports = {
  minesweeper
};
