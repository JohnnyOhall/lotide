const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle, based on array length: returns 2 item from middle of array if even or single item if odd", () => {
  it("Test if [ '88', '89' ] returned from testEven Array: [1,2,3,4,88,99,7,8,9,10]", () => {
    const testEven = [1,2,3,4,88,99,7,8,9,10];
    assert.deepEqual(middle(testEven), [88,99]);
  });
  it('Test returns 4 when given testOdd array: [1,2,3,4,5,6,7]', () => {
    const testOdd = [1,2,3,4,5,6,7];
    assert.strictEqual(middle(testOdd), 4);
  });
  it('Test returns [] array if array length is less than 3', () => {
    const testShort = [1,2];
    assert.deepEqual(middle(testShort), []);
  });
  it('Test returns [] array if array is blank: []', () => {
    const testBlank = [];
    assert.deepEqual(middle(testBlank), []);
  });
  it('Test returns [] array if array is null: null', () => {
    assert.deepEqual(middle(null), []);
  });
  it('Test returns [] array if array is undefined: [undefined]', () => {
    assert.deepEqual(middle([undefined]), []);
  });
  it('Test returns ["lighthouse", "labs"] array from array of strings: ["hello","lighthouse","labs","yeah"]', () => {
    const testArrString = ["hello","lighthouse","labs","yeah"];
    assert.deepEqual(middle(testArrString), ['lighthouse', 'labs']);
  });
});