const assertArraysEqual = (arr1, arr2) => {
  for (let index in arr1){ // 
    if (arr1[index] !== arr2[index]){
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
    }
  }

  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
}

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false