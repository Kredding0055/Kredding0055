/*
Define a function wordsLongerThan5 that takes in an array of words. The
function should return a NEW array containing only the words that are longer
than 5 characters.
*/

function wordsLongerThan5(array) {
    // need an output var.
    let output = [];

// need to iterate through the array
    for(let i = 0; i < array.length; i++) {
// compare number to 5 and see if more or less
        wordLength = array[i].length;
// if less than 5 then cont.
        if(wordLength > 5) {
            output.push(array[i]);
        }
// if more than 5 push to output.
    }
    return output;
}


let words1 = ['bike', 'skateboard','scooter', 'moped'];
let longerWords1 = wordsLongerThan5(words1);
console.log(longerWords1);            //=> [ 'skateboard', 'scooter' ]
console.log(words1 === longerWords1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = wordsLongerThan5;