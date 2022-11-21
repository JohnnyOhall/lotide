const takeUntil = (array, callback) => {
  const output = [];

  for (const x of array) {
    if (!callback(x)) {
      output.push(x);
    } else {
      return output;
    }
  }
}

module.exports = takeUntil;