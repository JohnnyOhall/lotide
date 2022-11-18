// HELPER FUNCTIONS //
const assertEqual = (actual, expected) => {
  return actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Implement findKey //
const findKey = (obj, action) =>{

  for (const key in obj) { //Loop through object keys
    if (action(obj[key])) { //check if function is true on each iteration
      return key; // return key of obj at current iteration if true
    }
  }
};

// TEST CASES //
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma"); // Expected result of Noma with star value 2


