const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#count', () => {
  it('confirm "hello there" has 3 e characters', () =>{
    assert.equal(countLetters("hello there").e, 3);
  });
  it('confirm "mississippi" has 4 i characters', () =>{
    assert.equal(countLetters("mississippi").i, 4);
  });
  it('confirm "LHL" has 2 lowercase l characters', () =>{
    assert.equal(countLetters("LHL").l, 2);
  });
  it('confirm "LHL" has returns object { l: 2, h: 1 }', () =>{
    assert.deepEqual(countLetters("LHL"), { l: 2, h: 1 });
  });

});