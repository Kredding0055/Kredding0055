/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]
    
*/
    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};


function commonValues(obj1, obj2) {
  let value1 = Object.values(obj1);
  let value2 = Object.values(obj2);
  //console.log('1111', value1);
  let array = [];

  for(let i = 0; i < value1.length; i++) {
    let firstValue = value1[i];
    //console.log('22222', firstValue);
    for(let x = 0; x < value2.length; x++) {
        let secondValue = value2[x];
        if(firstValue === secondValue) {
            array.push(secondValue);
        }
        
    }
  }
  
  return array;
}

// console.log(commonValues(cat, bunny)); // prints ['white']
// console.log(commonValues(cat, human)); // prints [4, 'sushi']
console.log(commonValues(human, vehicle)); // prints [4]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
