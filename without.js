const eqArrays = (arr1, arr2) => {
  for (let index in arr1) { //
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  return eqArrays(arr1,arr2) ?
    console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) :
    console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

// THIS DIDN'T WORK WITH MULTIPLE VALUES //

// const without = (source, remove) => {
//   let output = [...source];

//   for (let x = 0; x < remove.length; x++) {
//     for (let y = 0; y < source.length; y++) {
//       if (remove[x] === source[y]){
//         output.splice(y,1)
//       }
//     }
//   }

//   return output
// }

const without = (source, remove) => {
  const output = [];

  for (const x of source) {
    let removed = false;

    for (const y of remove) {
      if (x === y) {
        removed = true;
      }
    }

    if (!removed) {
      output.push(x);
    }
  }

  return output;
};

const words = ["hello", "world", "lighthouse"];

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without(['pig','moose', 'cow', 'dog'], ['moose', 'pig'])); // => ['dog', 'cow']