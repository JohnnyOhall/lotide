const eqArrays = (arr1, arr2) => { //Check if two arrays are the same
  for (let index in arr1) { //
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

// Function compares two objects to check if they are exactly the same
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // Confirms if objects both contain same amount of keys
    return false; // returns false if object key length !same
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //checks if true that both keys contain arrays
      if (!eqArrays(object1[key], object2[key])) { //uses helper function eqArrays to see if key arrays are the same
        return false; // return false if key arrays !same
      }
    } else if (object1[key] !== object2[key]) { //compares object keys primitives to see if the same
      return false; // return false if key primitives !same
    }
  }
  
  return true; // return true if no falsey statements above, objects are identical
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //prevents [Object Object] on return

  return eqObjects(actual,expected) ? //checks for true/false in helper function
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  

};


// TEST CASES //
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba)