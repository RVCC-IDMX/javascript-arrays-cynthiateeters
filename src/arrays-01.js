/* eslint-disable no-unused-vars */
/*
 * arrays-01.js
 * Language: javascript
 * Test: tests/arrays-01.test.js
 * Path: src/arrays-01.js
 *
 * Description: Basic array operations.
 *
 * Concepts:
 *  - Arrays are zero-indexed, mutable, and iterable.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * Returns the first element of an array.
 * @param {Array} arr - The array.
 * @returns {*} The first element.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#indexed_elements
 */
function getFirstValue(arr) {
  return arr[0];
}

/**
 * Returns an array composed of the four provided values.
 * @param {*} a - First element.
 * @param {*} b - Second element.
 * @param {*} c - Third element.
 * @param {*} d - Fourth element.
 * @returns {Array} An array with the four elements.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals
 */
function makeArray(a, b, c, d) {
  return [a, b, c, d];
}

/**
 * Creates a new array of the first five prime numbers.
 * @returns {Array<number>} [2, 3, 5, 7, 11]
 */
function createFirstFivePrimes() {
  return [2, 3, 5, 7, 11];
}

/**
 * Creates an array of sequential numbers from 0 up to size - 1.
 * @param {number} size - The size of the array.
 * @returns {Array<number>} The new array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */
function createSizedArray(size) {
  let result = [];
  for (let i = 0; i < size; i++) {
    result.push(i);
  }
  return result;
}

/**
 * Modifies an array by adding the number 1 at both the beginning and the end.
 * Works on a shallow copy.
 * @param {Array} arr - The original array.
 * @returns {Array} The modified array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 */
function modifyArrayByAdding(arr) {
  let copy = [...arr];
  copy.unshift(1);
  copy.push(1);
  return copy;
}

/**
 * Modifies an array by removing the first and last elements.
 * Works on a shallow copy.
 * @param {Array} arr - The array to modify.
 * @returns {Array} The modified array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 */
function modifyArrayByDeleting(arr) {
  let copy = [...arr];
  if (copy.length > 0) {
    copy.shift();
  }
  if (copy.length > 0) {
    copy.pop();
  }
  return copy;
}

/**
 * Returns the element at a specified index.
 * @param {Array} arr - The array.
 * @param {number} index - The index.
 * @returns {*} The element at the given index.
 */
function findElementAtIndex(arr, index) {
  return arr[index];
}

/**
 * Finds the index of the first occurrence of a given value.
 * Returns -1 if not found.
 * @param {Array} arr - The array.
 * @param {*} value - The value to find.
 * @returns {number} The index or -1 if not found.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
function findElementByValue(arr, value) {
  return arr.indexOf(value);
}

/**
 * Replaces the element at a specific index with a new value.
 * Note: This function modifies the original array.
 * @param {Array} arr - The array.
 * @param {number} index - The index to modify.
 * @param {*} value - The new value.
 * @returns {Array} The modified array.
 */
function changeElementAtIndex(arr, index, value) {
  arr[index] = value;
  return arr;
}

/**
 * Joins all elements of an array into a string without any separator.
 * @param {Array} arr - The array of elements.
 * @returns {string} The joined string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */
function makeStringFromArray(arr) {
  return arr.join('');
}

/**
 * Creates a shallow copy of an array using the spread operator.
 * @param {Array} arr - The array.
 * @returns {Array} A new array with the same elements.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
function createShallowCopy(arr) {
  return [...arr];
}

module.exports = {
  getFirstValue,
  makeArray,
  createFirstFivePrimes,
  createSizedArray,
  modifyArrayByAdding,
  modifyArrayByDeleting,
  findElementAtIndex,
  findElementByValue,
  changeElementAtIndex,
  makeStringFromArray,
  createShallowCopy,
};