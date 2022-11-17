// const assertEqual = (actual, expected) => {
//   return actual === expected ?
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

// const countLetters = function(letters) {  // Letters = mississippi
//   const results = {}; // empty container to push results into

//   for (const count of letters){ //Loop through index of string (letters, L, E, T, T, E, R)
//     //console.log(count)
//     if (results[count]){ //if key (count) is found in results, add 1 to current value of key
//       results[count] += 1
//     } else {  // if key (count) is not found in results, create new key and give value of 1
//       results[count] = 1
//     }
//   }

//   return results; // return end result
// }

// assertEqual(countLetters("mississippi").s,4) //Checking if key s, has value 4


const letterPositions = sentence => {
  const results = {};
  let arr = sentence.toLowerCase().split('');

  for (let i = 0; i < arr.length; i++) {
    
    console.log(arr[i]); //<- returns letter
    console.log(i); //<- returns index

    if (results[arr[i]]) {
      results[arr[i]].push(i);
    } else {
      results[arr[i]] = [i];
    }

  }
  
  return results;

}

console.log(letterPositions("lighthouse in the house"));
