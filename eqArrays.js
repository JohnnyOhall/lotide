const eqArrays = (arr1, arr2) => {
  for (let index in arr1){ 
    if (arr1[index] !== arr2[index] || arr1.length !== arr2.length){
      return false
    }
  }

  return true
}

module.exports = eqArrays