/*
Write a function alternatingWords that accepts an array of words as an argument.
The function should mutate the input array such that the words alternate between
fully uppercase or lowercase. The first word should be uppercase.
*/



function alternatingWords(array) {
//1. input and output.
// make a for loop to iterate through the array.
    for(let i = 0; i < array.length; i++) {
        // see if index is even or odd.
        // if even word needs to be capalized.
        if(i % 2 === 0) {
            evenWord = array[i];
            console.log(i, evenWord);
            array[i] = evenWord.toUpperCase();
        }// if odd word needs to be lower cased.
        if(i % 2 === 1) {
            oddWord = array[i];
            array[i] = oddWord.toLowerCase();
        }
        
// push words back to array.
    } 
    return array;
} 

let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

// let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = alternatingWords;