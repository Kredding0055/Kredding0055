/*
Define a function hasElement that has two parameters. The first parameter should
be an array, and the second should be a target element. The function should
return a boolean indicating whether the target element is in the array.
Solve this using a loop.
*/

function hasElement(char1, char2) {

    if(char1.length === 0 || char2.length === 0) {
        return false;
    }

    for(let i = 0; i < char1.length; i ++) {
        if((char2[0]) === (char1[i])) {
            return true;
        }
        if(char2 == char1[i]) {
            return true;
        }
    }
    return false;
}


console.log(hasElement(['a', 'b', 'c', 'e'], 'c')); // true
console.log(hasElement(['a', 'b', 'c', 'e'], 'a')); // true
console.log(hasElement(['a', 'b', 'c', 'e'], 'z')); // false
console.log(hasElement([43, -7, 11, 13], 11));      // true
console.log(hasElement([43, -7, 11, 13], 1));       // false
console.log(hasElement([], 3));                     // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasElement;