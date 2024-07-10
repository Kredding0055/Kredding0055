/*
Define a function yeller that takes in an array of words. The function should
return a NEW array where each element of the original array is yelled.
*/

function yeller(words1) {
    let i = 0;
    str = '';
    array = [];
    while(i < words1.length) {
        console.log('1', i, words1);
        array.push(words1[i].toUpperCase() + '!');
        i++;   
    }   
    
    console.log(array);
    return array; 
}


let words1 = ['hello', 'world'];
let yelled1 = yeller(['hello', 'world']);
console.log(yelled1);              //=> [ 'HELLO!', 'WORLD!' ]
console.log(words1 === yelled1);   //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = yeller;