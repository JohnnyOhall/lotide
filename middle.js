/*
function will return middle value(s) when given array argument (input).
*/

const middle = input => {
  let output = [];

  if (!Array.isArray(input) || input.length < 3) {
    return output; //if array is less than 3 items, return empty [] array
  }

  let middleNum = input.length;

  if (middleNum % 2 !== 0) { //if array is odd
    middleNum /= 2;
    middleNum = Math.floor(middleNum);
    output.push(input[middleNum]); // return value of middle index
    return output;
  } else if (middleNum % 2 === 0) { //if array is even
    middleNum /= 2;
    output.push(input[middleNum - 1]);
    output.push(input[middleNum]); // return both middle index values as array
    return output;
  }
};

module.exports = middle;