const countOnly = function(allItems, itemsToCount) {
  let counted = {};
  for (const name of allItems) { 
    if (itemsToCount[name] === true) {
      if (counted.hasOwnProperty(name)) {
        counted[name] +=1;
      } else {
        counted[name] = 1;
      }
    }
  }
  return counted;
};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);