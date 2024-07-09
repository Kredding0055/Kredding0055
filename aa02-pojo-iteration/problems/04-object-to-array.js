/*
Write a function called objectToArray(obj) that iterates through all key-value
pairs of the object and returns an array of nested array where each nested array
is formatted such that the first element is the key and the second element is
the value.
*/

function objectToArray(obj) {
  let pairsArray = [];
  let keys = Object.keys(obj);
  //console.log(keys);
  let values = Object.values(obj);
  //console.log(values);
  
  for(let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key);
    let val = values[i];
    pairsArray.push([key, val]);
  }
  return pairsArray;
}


let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};
console.log(objectToArray(bootcamp));
//=> [['name', 'App Academy'], ['color', 'Red'], ['population', 120]]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = objectToArray;
} catch {}
