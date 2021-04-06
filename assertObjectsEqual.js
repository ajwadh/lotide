const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(arr1, arr2) {
  const inspect = require('util').inspect;

  if (eqObjects(arr1, arr2) == true) {
    console.log(`✅✅✅  Assertion passed: ${inspect(arr1)} === ${inspect(arr2)}`);
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
  }
};

module.exports = assertObjectEqual;
