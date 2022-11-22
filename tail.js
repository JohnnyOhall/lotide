/*
Function take array argument (arr) and returns new array with index 0 removed.
*/

const tail = arr => {
  return Array.isArray(arr) && arr.length > 0 ?
    arr.slice(1) : //if arr is an array and greater than 0 length, return with index 0 removed
    `error!`; // if false return error msg: 'error!'
};
 
module.exports = tail;

