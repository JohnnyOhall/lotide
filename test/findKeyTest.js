const assert = require('chai').assert;
const findKey = require('../findKey');



describe('#findKey', () => {
  it('When Action function === 2, return of "Noma" is receieved', () => {
    let obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "Noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    
    assert.equal(findKey(obj,x => x.stars === 2), "Noma");
  });
});

