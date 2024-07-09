/*
Write a function called get2CKeys(obj) that iterates through the object and
returns an array of the object's keys that have values with at least 2 'c's.
*/
/*
function get2CKeys(obj) {
  let key = [];
  for(let keys in obj) {
    let value = obj[keys];
    if(value.split('c').length > 2) {
      key.push(keys);
    }
  }
  return key;
}
*/

const obj = {
  red: 'circle',
  blue: 'octagon',
  green: 'square'
}
console.log(get2CKeys(obj)); // ['red']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = get2CKeys;
} catch {}
