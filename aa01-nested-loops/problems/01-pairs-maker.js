/*
Write a function pairsMaker(arr) that takes in a an array as an argument. The
function should return a 2D array where the subarrays represent unique pairs of
element from the input array.
*/

// Make a function that takes an array of letters
// takes an input and has an output
function pairsMaker(array) {
    let pairs = [];
    for(let i = 0; i < array.length; i++) {
        
        let letter1 = array[i];
        //console.log('1', letter1);
        for(let x = i + 1; x < array.length; x++) {
            let pairArray = [];
            let letter2 = array[x];
            //console.log('2', letter2);
            pairs.push([letter1, letter2]);
            //console.log('3', pairArray);
        }
    }
    return pairs;
}
// Takes each letter and makes a pair with another letter
// When that letter has a pair it needs to get put in it's own array.
// No duplicates of letter pairs. 
// Make new arrays within the array of the pairs, no need to keep the original letters in it's own array.
// 

console.log(pairsMaker(["a", "b", "c", "d"]));
//=> [ [ 'a', 'b' ],
//     [ 'a', 'c' ],
//     [ 'a', 'd' ],
//     [ 'b', 'c' ],
//     [ 'b', 'd' ],
//     [ 'c', 'd' ] ]

// console.log(pairsMaker(["Rosemary", "Alex", "Connor"]));
// //=> [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairsMaker;
