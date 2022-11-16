const assertArraysEqual = (arr1, arr2) => {
  for (let index in arr1) { //
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }

  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

const middle = input => {
  let output = [];

  if (!Array.isArray(input) || input.length < 3) {
    return output;
  }

  let middleNum = input.length;

  if (middleNum % 2 !== 0) {
    middleNum /= 2;
    middleNum = Math.floor(middleNum);
    output.push(input[middleNum]);
    return output;
  } else if (middleNum % 2 === 0) {
    middleNum /= 2;
    output.push(input[middleNum - 1]);
    output.push(input[middleNum]);
    return output;
  }
};

// TEST CASES //
let testEven = [1,2,3,4,88,99,7,8,9,10];
let testOdd = [1,2,3,4,5,6,7];
let testShort = [1,2];
let testBlank = [];
let testArrString = ["hello","lighthouse","labs","yeah"];
let testNull = null;

console.log(middle(testEven));
console.log(middle(testOdd));
console.log(middle(testShort));
console.log(middle(testBlank));
console.log(middle(testNull));
console.log(middle(testArrString));
assertArraysEqual(testEven,[1,2,3,4,88,99,7,8,9,10]);
assertArraysEqual(testArrString,["hello","lighthouse","labs","yeah"]);