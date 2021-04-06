const letterPositions = function(sentence) {
  const results = {};
  for (i=0; i<sentence.length; i++) {
    if (results.hasOwnProperty(sentence[i])) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  return results;
};

module.exports = letterPositions; 

// test_string = "AAABCCDDDEEE"
// result = letterPositions(test_string);
// console.log(result);