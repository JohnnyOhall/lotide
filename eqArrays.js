const assertEqual = (actual, expected) => {
  return actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  for (let index in arr1){ // 
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length){
      return false
    }
  }

  return true
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));