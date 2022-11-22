/*
function takes array arguement (source) and removed
all items listed in second array argument (remove)
and returns a new array with request indexs removed.
*/

const without = (source, remove) => {
  const output = []; // empty return array placeholder

  for (const x of source) {
    let removed = false; //Set removed value to false to start each loop

    for (const y of remove) {
      if (x === y) {
        removed = true; //if item at index matches remove, set remove value to true
      }
    }

    if (!removed) {
      output.push(x); //If removed value is false, push current index to return array
    }
  }

  return output; // Return output array with all removed items, removed.
};

module.exports = without;