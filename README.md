# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me (John O'Halloran) as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @johnnyohall/lotide`

**Require it:**

`const _ = require('@johnnyohall/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(input)`: returns object with each character as key and count of the character as value.
----Example----
Function: countLetters( "LHL" ), 
Returns: { l: 2, h: 1 } )

* `countOnly(allItems, itemsToCount)`: returns object with count of argument (itemsToCount) found in argument array (allItems). 
----Example----
Function: countOnly([ "John", "Jim", "Ava", "Ava" ], { "John": true, "Ava": true, "Jim": true }); 
Returns: { John: 1, Ava: 2 }

* `eqArrays(arr1, arr2)`: confirms if two array arguments (arr1, arr2) are indentical, will return true or false value.
----Example----
Function: eqArrays([ 1, 2, 3 ], [ 1, 2, 3 ])
Return: true

* `eqObjects(arr1, arr2)`: confirms if two object arguments (object1, object2) are indentical, will return true or false value.
----Example----
Function: eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" })
Return: true

* `findKey(obj, action)`: returns key for given value through function (action) parameter.
----Example---- 
Function: findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "Noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2)
Returns: "Noma"

* `findKeyByValue(obj, value)`: Given array argument (obj) and key value argument (value), function will return key assoicated with value.
----Example----
Function: findKeyByValue({ 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}, "The Wire")
return: "drama"

* `head(arr)`: returns first index in array or string.
----Example----
Function: head([ 1, 2, 3 ])
Returns: 1

* `letterPositions(sentence)`: string input (sentance) returns object array of each character and index location.
----Example----
Function: letterPositions("hello")
Returns: { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }

* `map(array, callback)`: callback function argument (callback) modifies and returns each index from input array arguement (array).
----Example----
Function: map([ "ground", "control", "to", "major", "tom" ], x => x + "!")
Returns: [ "ground!", "control!", "to!", "major!", "tom!" ]

* `middle(input)`: function will return middle value(s) when given array argument (input).
----Example----
Function: middle([ 1, 2, 3, 4, 5, 6, 7 ])
Returns: 4

* `tail(arr)`: Function take array argument (arr) and returns new array with index 0 removed.
----Example----
Function: tail([ "Yo Yo", "Lighthouse", "Labs" ])
Returns: [ "Lighthouse", "Labs" ]

* `takeUntil(array, callback)`: Function takes array arguement (array) and a function callback arguement (callback), and will return each item in array until function returns false condition.
----Example----
Function: takeUntil([ 1, 2, 5, 7, 2, -1, 2, 4, 5 ], x => x < 0)
Return: [ 1, 2, 5, 7, 2 ]

* `without(source, remove)`: function takes array arguement (source) and removed all items listed in second array argument (remove) and returns a new array with request indexs removed.
----Example----
Function: without([ 'pig','moose', 'cow', 'dog' ], [ 'moose', 'pig' ])
Return: [ 'cow', 'dog' ]