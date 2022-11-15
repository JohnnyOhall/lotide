const assertEqual = (actual, expected) => {
  return actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};



const tail = arr => {
  return Array.isArray(arr) && arr.length > 0 ?
    arr.slice(1) :
    `error!`;
};
 
const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));


