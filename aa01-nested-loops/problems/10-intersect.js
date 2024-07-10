/*
Define a function called intersect that takes in two array parameters and
returns a new array containing the elements common to both arrays.
*/

function intersect(array1, array2) {
    let newArray = [];

    for(let i = 0; i < array1.length; i++) {
        let letter1 = array1[i];
        for(let x = 0; x < array2.length; x++) {
            let letter2 = array2[x];
            if(letter1 === letter2) {
                newArray.push(letter1);
            }
        }
    }
    return newArray;
}

console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); //=> [ 'b', 'd' ]
console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); //=> []

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = intersect;
