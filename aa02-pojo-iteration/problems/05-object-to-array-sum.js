/*
Write a function called objectToArraySum(obj) that iterates through all
key-value pairs of the object and returns an array of nested array where each
nested array is formatted such that the first element is the key and the second
element is the sum of all the numbers in the array value.
*/

function objectToArraySum(obj) {
  let pairsArray = [];
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  console.log('11111', keys);
  
  for(let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let val = values[i];
    let sum = 0;
    for(let x = 0; x < val.length; x++) {
      sum += val[x];      
    }
    pairsArray.push([key, sum]);
  }
  return pairsArray;
}

let populations = {
  neighborhood1: [10, 1, 3, 6],
  neighborhood5: [],
  neighborhood8: [5, 0, 3, 2]
}
console.log(objectToArraySum(populations));
//=> [['neighborhood1', 20], ['neighborhood5', 0], ['neighborhood8', 10]]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = objectToArraySum;
} catch {}
