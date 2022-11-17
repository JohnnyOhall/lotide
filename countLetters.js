const assertEqual = (actual, expected) => { 
  return actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = input => {
  const obj = {}; // Object to collect character data
  let format = input.split(' ').join('').toLowerCase(); // Remove space & make lowercase

  for (const key of format) { // Add characters as key from Format to obj
    if (obj[key]) {
      obj[key] += 1; // If key found in obj, add 1 to existing value
    } else {
      obj[key] = 1; // If key not found in obj, add new key with value 1
    }
  }

  return obj; // return final string
};

// TEST CASES //
assertEqual(countLetters("helLo There").e, 3);
assertEqual(countLetters("mississippi").i, 4);
assertEqual(countLetters('LHL').l, 2);