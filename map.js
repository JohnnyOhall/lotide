/*
callback function argument (callback) modifies and
returns each index from input array arguement (array).
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) { //loop over each item in index
    results.push(callback(item)); //push callback function modifed index to result
  }
  return results;
};

module.exports = map;