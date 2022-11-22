const findKeyByValue = (obj, value) =>{
  for (const val in obj) {
    if (value === obj[val]) {
      return val;
    }
  }
};

module.exports = findKeyByValue;