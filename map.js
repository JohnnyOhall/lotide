const eqArrays = (arr1, arr2) => {
  for (let index in arr1){ // 
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length){
      return false
    }
  }
  return true
}

const assertArraysEqual = (arr1, arr2) => {
    return eqArrays(arr1,arr2) ?
      console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) :
      console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  };

const words = ["ground", "control", "to", "major", "tom"];

/*const results1 = words.map(word => word[0]);*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + '!');
const results3 = map(words, word => word = word.length);


assertArraysEqual(results1,words);
assertArraysEqual(results2,words);
assertArraysEqual(results3,words);