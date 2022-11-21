const eqArrays = require('../../_eqArrays');
const assertEqual = require('../../_assertEqual');

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));