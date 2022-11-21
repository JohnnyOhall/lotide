const assert = require('chai').assert
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('Returns array until stopping condition of value < 0, [1, 2, 5, 7, 2, -1, 2, 4, 5] becomes [1, 2, 5, 7, 2]', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it('Returns array until stopping condition of value === "," returns ["I\'ve", "been", "to", "Hollywood"]', () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data, x => x === ","), ["I've", "been", "to", "Hollywood"]);
  });
});