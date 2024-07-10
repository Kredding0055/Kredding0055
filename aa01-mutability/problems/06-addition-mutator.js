/*
Write a function additionMutator that accepts an array and a number as
arguments. The function should mutate the input array such that every element
has the given number added to it.
*/

function additionMutator(nums1, add) {
    let x = 0;
    let a = 0;

    for(let i = 0; i < nums1.length; i++) {
        result = nums1[a] + add;
        nums1.splice(x, 1, result);
        x++;
        a++;
    }
    return nums1;
}


let nums1 = [3, 7, 1, 2];
let nums2 = additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]
console.log(nums1 === nums2) // true;

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = additionMutator;