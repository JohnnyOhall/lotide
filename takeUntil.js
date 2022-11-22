/*
Function takes array arguement (array) and a function
callback arguement (callback), and will return each item
in array until function returns false condition.
*/

const takeUntil = (array, callback) => {
  const output = []; //placeholder empty return array

  for (const x of array) { //loop through each array index
    if (!callback(x)) { //check if callback function returns true
      output.push(x); // push array index item to output array
    } else {
      return output; //end function once false condition returned from callback
    }
  }
};

module.exports = takeUntil;