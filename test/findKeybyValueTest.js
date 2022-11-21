const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue')

// TEST Variables //
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue, \nbestTVShowsByGenre = {\nsci_fi: "The Expanse", \ncomedy: "Brooklyn Nine-Nine", \ndrama: "The Wire"', () => {
  it('Return "drama" when searching "The Wire"', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre,"The Wire"),"drama");
  });
  it('Return undefined when searching "That \'70s Show"', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre,"That '70s Show"),undefined);
  });
});

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);