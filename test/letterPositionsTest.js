const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('Returns index 1 in array when "hello" string is used as arguement', () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});