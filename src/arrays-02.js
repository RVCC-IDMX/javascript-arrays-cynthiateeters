/* eslint-disable no-unused-vars */
/*
 * arrays-02.js
 * Language: javascript
 * Test: tests/arrays-02.test.js
 * Path: src/arrays-02.js
 *
 * Description: String methods and immutability.
 *
 * Concepts:
 *  - Strings are immutable; methods return new strings.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

/**
 * Returns the character at the specified index.
 * @param {string} str - The string.
 * @param {number} indx - The index.
 * @returns {string} The character at that index.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
 */
function findTheCharacterAtIndex(str, indx) {
  return str.charAt(indx);
}

/**
 * Returns a slice of the string from start index up to, but not including, the end index.
 * @param {string} str - The string.
 * @param {number} start - The start index.
 * @param {number} end - The end index.
 * @returns {string} The sliced string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 */
function sliceTheString(str, start, end) {
  return str.slice(start, end);
}

/**
 * Splits a string into an array of substrings based on the given separator.
 * @param {string} str - The string.
 * @param {string} separator - The separator.
 * @returns {Array} An array of substrings.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */
function splitTheString(str, separator) {
  return str.split(separator);
}

/**
 * Converts the entire string to uppercase.
 * @param {string} str - The string.
 * @returns {string} The uppercase string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */
function makeAllUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Converts the entire string to lowercase.
 * @param {string} str - The string.
 * @returns {string} The lowercase string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 */
function makeAllLowerCase(str) {
  return str.toLowerCase();
}

/**
 * Converts a single word to title case.
 * @param {string} word - A single word.
 * @returns {string} The word in title case.
 */
function makeWordTitleCase(word) {
  if (word.length === 0) return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Replaces all occurrences of oldStr with newStr in a string.
 * @param {string} str - The original string.
 * @param {string} oldStr - The substring to be replaced.
 * @param {string} newStr - The replacement string.
 * @returns {string} The modified string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */
function replaceTheString(str, oldStr, newStr) {
  return str.split(oldStr).join(newStr);
}

/**
 * Converts a sentence so that each word's first letter is capitalized.
 * @param {string} sentence - The sentence.
 * @returns {string} The title-cased sentence.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */
function makeSentenceTitleCase(sentence) {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = makeWordTitleCase(words[i]);
  }
  return words.join(' ');
}

module.exports = {
  findTheCharacterAtIndex,
  sliceTheString,
  splitTheString,
  makeAllUpperCase,
  makeAllLowerCase,
  makeWordTitleCase,
  replaceTheString,
  makeSentenceTitleCase,
};