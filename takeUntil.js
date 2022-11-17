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

const takeUntil = (array, callback) => {
  const output = [];

  for (const x of array) {
    if (!callback(x)) {
      output.push(x);
    } else {
      return output;
    }
  }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(data1,results1)
assertArraysEqual(data2,results2)
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])