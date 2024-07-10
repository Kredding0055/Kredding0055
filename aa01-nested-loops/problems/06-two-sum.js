/*
Write a function twoSum(arr, target) that accepts an array and a target number
as args. The function should a return a boolean indicating if two distinct
numbers of the array add up to the target value. You can assume that input array
contains only unique numbers.
*/

// I have an input and output.
// See if 2 numbers in the array added together equal the num in the parameter.
function twoSum(array, number) {

    for(let i = 0; i < array.length; i++) {
        let num1 = array[i];
        
        for(let x = i + 1; x < array.length; x++) {
            let num2 = array[x];
            total = num1 + num2;
            
            if(total === number) {
                return true;
            }
        }
    }
    return false;
}
// I need to iterate through the array and add numbers together.
// If there are two numbers added together that equal the par then return true.
// If no numbers match the para then return false. 

// Your code here 

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8));    // true
console.log(twoSum([4, 6, 2, 3], 11));   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoSum;
