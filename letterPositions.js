const letterPositions = sentence => {
  const results = {};
  let position = 0;
  sentence.toLowerCase(); // Remove space & make lowercase

  for (const key of sentence) { // Add characters as key from Format to obj
    if (key === " ") {
      position++;
    } else if (results[key]){
      results[key].push(position);
      position++
    } else {
      results[key] = [position]; // If key not found in obj, add new key with value 1
      position++
    }
  }
  return results;
};

module.exports = letterPositions;