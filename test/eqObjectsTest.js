const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe('#eqObjects', () => {
  it('Return true if first object { a: "1", b: "2" } and second { b: "2", a: "1" } match', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba))
  });
  it('Return true if first object { a: "1", b: "2" } and second { a: "1", b: "2", c: "3" } match', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc))
  });
  it('Return true if first object { a: "1", b: "2" } and second { a: "1", b: "2", c: "3" } match (nested Arrays)', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc))
  });
});

// // TEST CASES //
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2),false); // => false