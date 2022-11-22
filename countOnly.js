/*
countOnly(allItems, itemsToCount)`: returns object with count of argument (itemsToCount) found in argument array (allItems).
Example:
Function: countOnly(["John", "Jim", "Ava", "Ava"], {"John": true, "Ava": true, "Jim": true});
Returns: {John: 1, Ava: 2}
*/

const countOnly = function(allItems, itemsToCount) {
  const results = {}; //placeholder for counted objects

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1; // adds to counter if item is found in results object
      } else {
        results[item] = 1; // adds to results object and assigns value 1
      }
    }
  }

  return results;
};

module.exports = countOnly;