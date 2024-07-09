/*
Write a function called commonKeys(obj1, obj2) that returns an array of all the
common keys between the two input objects, obj1 and obj2.
*/

function commonKeys(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  let commonArray = [];
  for(let i = 0; i < key1.length; i++) {
    let obj1Word = key1[i];

    for(let x = 0; x < key2.length; x++) {
      let obj2Word = key2[x];
      
      if(obj1Word === obj2Word) {
        commonArray.push(obj1Word)
      }
    }
  }
  return commonArray;
}

 console.log(commonKeys(
   { species: 'Dog', color: 'Brown',  numLegs: 4 },
  { numLegs: 8, species: 'Octopus', lifeSpan: '2 years' }
 )); // => [ 'species', 'numLegs' ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = commonKeys;
} catch {}
