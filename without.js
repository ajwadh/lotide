const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = function(source, itemsToRemove) {

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {
      source.splice(i, 1)
    }
  }
  return source;
};


module.exports = without;