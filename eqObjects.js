const eqArrays = (arr1, arr2) => {
  for (let index in arr1){ // 
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length){
      return false
    }
  }

  return true
}

const assertEqual = (actual, expected) => {
  return actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false
  } 

  for (const key in object1){
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
      if (eqArrays(object1[key], object2[key]) === false) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
      return false
    }
  } 
  
  return true
}
    



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false