# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ajwadh/lotide`

**Require it:**

`const _ = require('@ajwadh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: compare two arrays and prints out a message telling us if they match or not.
* `assertEqual(arr1, arr2)`: compare two values primitive values and prints out a message telling us if they match or not.
* `assertObjectsEqual(arr1, arr2)`: Takes in two objects and prints out whether they are equal or not.
* `countLetters(sentence)`: Takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: It is given an array and an object. It will then return an object containing counts of everything that the input object listed.
* `eqArrays(arr1, arr2)`: Takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: Takes in two objects and returns true or false, based on a perfect match.
* `findKey(objects, callback)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findByKeyValue(genreObject, movie)`: Searches for a key on an object where its value matches a given value and returns it.
* `head(array)`: Returns the first item in the array.
* `letterPositions(sentence)`: Returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: Return a new array based on the results of the callback function.
* `middle(array)`: Takes in an array and returns the middle-most element(s) of the given array.
* `tail(array)`: Returns everything except for the first item (head) of the provided array.
* `takeUntil(array, callback)`: Returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without(source, itemsToRemove)`: Returns a subset of a given array, removing unwanted elements.

