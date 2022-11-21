const assert = require('chai').assert;
const map = require('../map');

//TEST ARRAY//
const words = ["ground", "control", "to", "major", "tom"];

describe('#map', () => {
  it('When function: word => word[0] is argument, first letter of each index is returned:[ "g", "c", "t", "m", "t" ]', () => {
    assert.deepEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ])
  });
  it('When function: word => word + "!", is argument, first letter of each index returned has ! added to end', () => {
    assert.equal(map(words, word => word + "!")[1],'control!')
  });
  it('When function: word => word = word.length, is argument, each index replaced with string length', () => {
    assert.equal(map(words, word => word = word.length)[4], 3);
  });
});