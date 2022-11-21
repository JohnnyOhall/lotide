const assertEqual = require('./assertEqual');

const tail = arr => {
  return Array.isArray(arr) && arr.length > 0 ?
    arr.slice(1) :
    `error!`;
};
 
module.exports = tail

