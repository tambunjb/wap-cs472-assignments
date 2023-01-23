/* eslint-disable no-unused-vars */

/* sums (respectively) all the numbers in an array of numbers */
function sum(a) {
    return a.reduce((i, j) => i+j);
}

/* multiplies (respectively) all the numbers in an array of numbers */
function multiply(a) {
    return a.reduce((i, j) => i*j);
}

/* computes the reversal of a string */
function reverse(a) {
    return a.split('').reverse().join('');
}

/* takes an array of words and an integer i and returns the array of words that are longer than i */
function filterLongWords(a, i) {
    return a.filter(word => word.length>i);
}