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

module.exports = without;