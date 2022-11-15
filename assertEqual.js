const assertEqual = (actual, expected) => {
  actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CASES //
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("John", "John");
assertEqual(1, 1);
assertEqual(1, 1.1);