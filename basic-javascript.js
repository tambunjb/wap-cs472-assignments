/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

/* takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise */
function isVowel(a) {
  return ['a', 'i', 'u', 'e', 'o'].includes(a.toLowerCase());
}
console.log("Expected output of isVowel(a) is true " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel(b) is false " + myFunctionTest(false, isVowel('b')));
console.log("Expected output of isVowel(E) is true " + myFunctionTest(true, isVowel('E')));

/* sums (respectively) all the numbers in an array of numbers */
function sum(a) {
  return a.reduce((i, j) => i+j);
}
console.log("Expected output of sum([9, 8, 7, 6]) is 30 " + myFunctionTest(30, sum([9, 8, 7, 6])));

/* multiplies (respectively) all the numbers in an array of numbers */
function multiply(a) {
  return a.reduce((i, j) => i * j);
}
console.log("Expected output of multiply([3, 2, 3]) is 18 " + myFunctionTest(18, multiply([3, 2, 3])));

/* computes the reversal of a string */
function reverse(a) {
  return a.split('').reverse().join('');
}
console.log("Expected output of reverse(ratset gaj) is jag testar " + myFunctionTest("jag testar", reverse("ratset gaj")));
console.log("Expected output of reverse(programming) is gnimmargorp " + myFunctionTest("gnimmargorp", reverse("programming")));

/* takes an array of words and returns the length of the longest one */
function findLongestWord(a) {
  return a.reduce((i, j) => j.length>i?j.length:i, 0);
}
console.log("Expected output of findLongestWord([Web, Application, Programmings]) is 12 " + myFunctionTest(12, findLongestWord(["Web", "Application", "Programmings"])));

/* takes an array of words and an integer i and returns the array of words that are longer than i */
function filterLongWords(a, i) {
  return a.filter(word => word.length>i);
}
console.log("Expected output of filterLongWords([Web, Application, Programmings], 4) is [Application, Programmings] " + myFunctionTest(["Application", "Programmings"].toString(), filterLongWords(["Web", "Application", "Programmings"], 4).toString()));

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem === 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);