const flatten = (input) => {
  output = [];

  check(input);

  return output;
}

const check = input => {
  input.forEach(x => {
    Array.isArray(x) ? check(x) : output.push(x);
  })
}

module.exports = flatten;