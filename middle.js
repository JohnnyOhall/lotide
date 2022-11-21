const middle = input => {
  let output = [];

  if (!Array.isArray(input) || input.length < 3) {
    return output;
  }

  let middleNum = input.length;

  if (middleNum % 2 !== 0) {
    middleNum /= 2;
    middleNum = Math.floor(middleNum);
    output.push(input[middleNum]);
    return output;
  } else if (middleNum % 2 === 0) {
    middleNum /= 2;
    output.push(input[middleNum - 1]);
    output.push(input[middleNum]);
    return output;
  }
};

module.exports = middle