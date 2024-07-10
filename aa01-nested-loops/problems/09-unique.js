/*
Write a function unique that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.
*/
/*
function unique(arr) {
    let uniqueArray = [];
    console.log('1', uniqueArray)
    for (let ii = 0; ii < arr.length; ii++) {
        let isUnique = true;
        console.log('2 ', arr[ii]);
        for (let jj = 0; jj < uniqueArray.length; jj++) {
            console.log('3  ', uniqueArray[jj]);
            if(arr[ii] === uniqueArray[jj]) {
                console.log('4   ', uniqueArray[jj]);
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            uniqueArray.push(arr[ii]);
            console.log('5    ', arr[ii]);
        }
    }

    return uniqueArray;
} 
*/
function unique(array) {
    let numbers = [];
    console.log('1', numbers);
    for(let i = 0; i < array.length; i++) { 
        let notInNumbers = true;
        
        for(let x = 0; x < numbers.length; x++) {
        
            if(array[i] === numbers[x]) {
            notInNumbers = false;
            break;
            }
        } 
        
        if (notInNumbers) { 
            numbers.push(array[i]);
            }
        }   
        return numbers;
}
    


console.log(unique([1, 1, 2, 3, 3]));         // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(["a", "b", "c", "b"]));    // ['a', 'b', 'c']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = unique;
