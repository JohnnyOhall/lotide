const assert = require('chai').assert;
const countOnly = require('../countOnly');

// TEST VARIABLES //
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly, firstNames: ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];', () => {
  it('Return 1 for how many occurances of "Jason" in the firstNames Array', () => {
    assert.equal(result["Jason"], 1);
  });
  it('Return undefined for how many occurances of "Karima" in the firstNames Array', () => {
    assert.equal(result["Karima"], undefined);
  });
  it('Return undefined for how many occurances of "Agouhanna" in the firstNames Array (set to false)', () => {
    assert.equal(result["Agouhanna"], undefined);
  });
  it('Return 2 for how many occurances of "Fang" in the firstNames Array', () => {
    assert.equal(result["Fang"], 2);
  });
});