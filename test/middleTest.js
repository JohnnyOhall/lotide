const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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