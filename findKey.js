const assertEqual = require('./assertEqual');

const findKey = function(objects, callback) {
  for (key in objects) {
    if (callback(objects[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// result = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);

// console.log(result);


