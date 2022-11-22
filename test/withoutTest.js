const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('Return [2, 3] when value [1] entered into function, array: [1, 2, 3]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [ 2, 3 ]);
  });
  it('Return ["1", "2"] when value [1, 2, "3"] entered into function, array: ["1", "2", "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), [ "1", "2" ]);
  });
  it('Return ["cow", "dog"] when value ["moose", "pig"] entered into function, array: ["pig","moose", "cow", "dog"]', () => {
    assert.deepEqual(without(['pig','moose', 'cow', 'dog'], ['moose', 'pig']), [ 'cow', 'dog' ]);
  });
});