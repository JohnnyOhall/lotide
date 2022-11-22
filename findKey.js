const findKey = (obj, action) =>{

  for (const key in obj) { //Loop through object keys
    if (action(obj[key])) { //check if function is true on each iteration
      return key; // return key of obj at current iteration if true
    }
  }
};

module.exports = findKey;


