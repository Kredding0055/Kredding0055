/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {

  let halfway;
  if (str.length % 2 === 0) {
    halfway = str.length / 2;
  } else {
    halfway = (str.length + 1) / 2;
  }
  let result = str.slice(0, halfway);
  return result;
  // Your code here 
}

console.log(firstHalf('academy')); // 'acad'
console.log(firstHalf('planet'));  // 'pla'
console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
