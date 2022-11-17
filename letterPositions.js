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

const letterPositions = sentence => {
  const results = {};
  let position = 0;
  sentence.toLowerCase(); // Remove space & make lowercase

  for (const key of sentence) { // Add characters as key from Format to obj
    if (key === " ") {
      position++;
    } else if (results[key]){
      results[key].push(position);
      position++
    } else {
      results[key] = [position]; // If key not found in obj, add new key with value 1
      position++
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);