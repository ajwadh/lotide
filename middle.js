const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  middleArray = [];
  if (array.length % 2 == 0) {
    mid = array.length / 2;
    middleArray.push(array[mid])
    middleArray.push(array[mid - 1])
    return middleArray;
  } else {
    mid = (array.length - 1) / 2;
    middleArray.push(array[mid])
    return middleArray;
  }
};

module.exports = middle;