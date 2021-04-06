
const countLetters = function(sentence) {
  let counted = {};
  for (const letter of sentence) {
    if (counted.hasOwnProperty(letter)) {
        counted[letter] +=1;
      } else {
        counted[letter] = 1;
      }
    }
  return counted;
};

test_string = "AAABCCDDDEEE"
result = countLetters(test_string);
console.log(result);

module.exports = countLetters;