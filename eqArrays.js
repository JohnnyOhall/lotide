/*
confirms if input arr1 and input arr2 are equal to eachother
*/

const eqArrays = (arr1, arr2) => {
  for (let index in arr1) { //Check each index of arr1
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length) {
      return false; //if index's do not mach in both arrays, false value returned
    }
  }

  return true; // else true value if loop completes without a falsey
};

module.exports = eqArrays;