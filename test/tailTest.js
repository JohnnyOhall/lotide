const assert = require('chai').assert;
const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];

// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(tail(words));

describe("#tail", () => {
  it("Returns [ 'Lighthouse', 'Labs'] out of words array ['Yo Yo', 'Lighthouse', 'Labs']", () =>{
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), [ "Lighthouse", "Labs" ]); 
  });
  it("Confirm original array was not modified and contains 3 elements still.", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.lengthOf(words, 3)
  })
  it("blank array will return 'error!' msg", () => {
    const words = [];
    assert.equal(tail(words), 'error!')
  })
});