/*
Define a function lessThan5 that takes an array of numbers and returns a NEW
array containing all the numbers in the input array that are less than 5.
*/

// we have an input and return and output
function lessThan5(array) {
    // need an output var.
    let output = [];

// need to iterate through the array
    for(let i = 0; i < array.length; i++) {
// compare number to 5 and see if more or less
        number = array[i];
// if more than 5 then cont.
        if(number < 5) {
            output.push(number);
        }
// if less than 5 push to output.
    }
    return output;
}
let nums1 = [1, -5, 10, 6, 2];
let filteredNums1 = lessThan5(nums1);
console.log(filteredNums1);           //=> [1, -5, 2]
console.log(nums1 === filteredNums1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = lessThan5;