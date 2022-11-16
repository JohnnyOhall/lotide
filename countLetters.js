const assertEqual = (actual, expected) => { 
  return actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = input => {
  const obj = {}; // Object to collect character data
  let output = ""; // Empty string return variable
  let format = input.split(' ').join('').toLowerCase(); // Remove space & make lowercase

  for (const key of format) { // Add characters as key from Format to obj
    if (obj[key]) {
      obj[key] += 1; // If key found in obj, add 1 to existing value
    } else {
      obj[key] = 1; // If key not found in obj, add new key with value 1
    }
  }

  for (const index in obj) { // Convert obj into string using loop
    if (output === "") {
      output = `${index}: ${obj[index]}`;
    } else {
      output += `, ${index}: ${obj[index]}`;
    }
    
  }

  return output; // return final string
};

// TEST CASES //
assertEqual(countLetters("helLo There"), 'h: 2, e: 3, l: 2, o: 1, t: 1, r: 1');
assertEqual(countLetters("mississippi"), 'm: 1, i: 4, s: 4, p: 2');
assertEqual(countLetters('LHL'), 'l: 2, h: 1');