const assertEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log(`✅✅✅  Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertEqual;

