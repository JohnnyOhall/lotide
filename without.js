const assertArraysEqual = (arr1, arr2) => {
  for (let index in arr1){ // 
    if (arr1[index] !== arr2[index]){
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
    }
  }

  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
}


const without = (source, remove) => {
  output = source;

  for (let x = 0; x < remove.length; x++) {
    for (let y = 0; y < source.length; y++) {
      if (remove[x] === source[y]){
        output.splice(y,1)
      } 
    }
  }

  return output
}

const words = ["hello", "world", "lighthouse"];

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(words, ["lighthouse"]))