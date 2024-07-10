/*
Define a function firstAndLast that takes in an array of numbers and returns the
sum of the first and last element if there is an even number of elements in the
array. If there is an odd number of elements in the array, then the function
should return the difference between the first and last elements of the array.
*/

function firstAndLast(array) {

    if(array.length <= 1) {
        return 0;
    }
    if(array.length % 2 === 0) {
        last = array[array.length -1];
        str = array[0] + last;
        return str;
    }
    if(array.length % 2 === 1) {
        last = array[array.length -1];
        str = array[0] - last;
        return str;
    }

}


console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstAndLast;