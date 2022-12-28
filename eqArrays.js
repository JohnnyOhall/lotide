/*
confirms if input arr1 and input arr2 are equal to eachother
*/

// const eqArrays = (arr1, arr2) => {
//   for (let index in arr1) { //Check each index of arr1
//     if (arr1[index] !== arr2[index] || arr1.length !== arr2.length) {
//       return false; //if index's do not mach in both arrays, false value returned
//     }
//   }

//   return true; // else true value if loop completes without a falsey
// };
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    console.log('not array')
    return false;
  } 

  const end = array1.length;

  const checkArrs = (array1, array2, start, end) => {
    let current = start;

    if (current > end) {
      return true;
    }

    if (array1[current] !== array2[current]) {
      return false;
    }
    
    current++
    return checkArrs(array1, array2, current, end)
  }

  value = checkArrs(array1, array2, 0, end);
  return value;
}

module.exports = eqArrays;

