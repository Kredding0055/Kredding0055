/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.
*/

function twoDimensionalProduct(array) {
    let total = 1;
    //console.log('1', total);

    for(let i = 0; i < array.length; i++) {
        let subArray = array[i];
        for(let x = 0; x < subArray.length; x++) {
            let number = subArray[x];
            //console.log('2', number);
            total *= number;
        }
    }
    return total;
}

let arr1 = [[6, 4], [5], [3, 1]];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [[11, 4], [2]];
console.log(twoDimensionalProduct(arr2)); // 88

let arr3 = [
  [-9, 8, 4],
  [8, 2],
];
console.log(twoDimensionalProduct(arr3)); // -4608

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalProduct;
