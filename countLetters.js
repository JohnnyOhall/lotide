const assertEqual = (actual, expected) => {
  return actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = input => {
  const obj = {};
  let output = "";
  let format = input.split(' ').join('').toLowerCase();

  for (const key of format) {
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }

  for (const index in obj) {
    if (output === "") {
      output = `${index}: ${obj[index]}`;
    } else {
      output += `, ${index}: ${obj[index]}`;
    }
    
  }

  return output;
};
assertEqual(countLetters("helLo There"), 'h: 2, e: 3, l: 2, o: 1, t: 1, r: 1');
assertEqual(countLetters("mississippi"), 'm: 1, i: 4, s: 4, p: 2');
assertEqual(countLetters('LHL'), 'l: 2, h: 1');