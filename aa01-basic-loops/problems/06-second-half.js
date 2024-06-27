/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/

function secondHalf(str) {
  
  let secHalf;
  if (str.length % 2 === 0) {
    secHalf = str.length / 2;
  }else {
    secHalf = (str.length + 1) / 2;
  }
  let result = str.slice(secHalf);
  return result;
}

console.log(secondHalf('academy')); // 'emy'
console.log(secondHalf('planet'));  // 'net'
console.log(secondHalf('sport'));   // 'rt'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;
