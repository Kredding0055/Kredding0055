/*
Define a function getIndexOf that has two parameters. The first parameter should
be an array, and the second should be a target element. If the target element is
in the array, the function should return the first index of the target element
in the array. If it's not in the array, the function should return -1. Solve
this using a loop.
*/

function getIndexOf(array1, array2) {
    
    if(array1.length === 0 || array2.length === 0) {
        return -1;
    }
    for(let i = 0; i < array1.length; i++) {
        if(array2[0] == array1[i]) {
            return i;
        }
        if(array2 == (array1[i])) {
            return i;
        }
    }
    return -1;
} 


console.log(getIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(getIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(getIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(getIndexOf([43, -7, 11, 13, 43], 43));  // 0
console.log(getIndexOf([43, -7, 11, 13], 1));       // -1
console.log(getIndexOf([], 3));                     // -1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getIndexOf;