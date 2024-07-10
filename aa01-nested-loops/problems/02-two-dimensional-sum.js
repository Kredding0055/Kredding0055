/*
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and
returns the total sum of all numbers.
*/

// input and an output
// takes a 2D array and adds all the numbers up then returns the sum.
// Needs to iterate through the 2D array to get every character within.
// Need to have a nested for loop to grab the char within the arrays

function twoDimensionalSum(array) {
    let total = 0;

    for(let i = 0; i < array.length; i++) {
        let subArray = array[i];
        for(let x = 0; x < subArray.length; x++) {
            let number = subArray[x];
            total += number;
        }
    }
    return total;
}

let arr1 = [[1, 3], [-4, 7, 10], [2]];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [[], [3, 1, 2]];
console.log(twoDimensionalSum(arr2)); // 6

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalSum;
