// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue'); 
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  letterPositions: letterPositions
};