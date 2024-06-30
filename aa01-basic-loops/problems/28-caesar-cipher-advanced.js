/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

function caesarCipher(string, num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let output = '';
    for(i = 0; i < string.length; i++) {
        let letter = string[i];
        let alphabetIndex = alphabet.indexOf(letter);
        modLet = (alphabetIndex + num) % alphabet.length;
        output = output + alphabet[modLet];
    }
return output;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
