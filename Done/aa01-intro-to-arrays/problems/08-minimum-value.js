/*
Define a function called minVal that takes in an array of numbers as a
parameter. The function should return the smallest number of the array. If the
array is empty, the function should return null.
*/

function minVal(array) {
    let num = array[0];

    if(array.length === 0) {
        return null;
    }
    for(let i = 0; i < array.length; i++) {
        let num2 = array[i +1];
        if(num < num2) {
            num = num;
        }
        if(num > num2) {
            num = num2;
        }
    }
    return num;
} 


console.log(minVal([4, 6, 3, 5, 2, 4])); // 2
console.log(minVal([-2, -3, -7, 3 ]));   // -7
console.log(minVal([])); //null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = minVal;