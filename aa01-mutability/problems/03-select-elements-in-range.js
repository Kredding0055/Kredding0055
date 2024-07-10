/*
Define a function called selectElementsInRange that takes in three parameters.
The first parameter should be an array. The second parameter should be a
starting number in a range of indices, and the third parameter should be the
ending number in the range. The function should return all elements that have
indices within the range of indices defined by the starting and ending numbers,
inclusive.
*/
/*
We have a function that makes an array that starts are the startNum index and ends at the 
endNum index but includes that num.
Need to iterate through array to find start index.
Once we find the start index then we need to include the indexs through to the end index.
Need to have an index for startNum.
Need to have an index for endNum.

*/




function selectElementsInRange(array, startNum, endNum) {
    let box = array.splice(startNum, endNum + 1);    
    return box;
} 


console.log(selectElementsInRange([1, 2, 3], 0, 1));        // [1, 2]
console.log(selectElementsInRange([2, 6, 9, 3, 1], 0, 3));  // [2, 6, 9, 3]
console.log(selectElementsInRange([7, 9, 10, 4, 5], 2, 4)); // [10, 4, 5]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = selectElementsInRange;