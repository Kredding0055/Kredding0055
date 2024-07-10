/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function vowelCipher(str) {
    let vowel = 'aeiou';
    let str1 = '';
    for(let i = 0; i < str.length; i++) {
        let letter = str[i];
        let vowelIndex = vowel.indexOf(letter);
        if(vowelIndex >= 0) {
          modVowel = (vowelIndex+1) % vowel.length;
          str1 = str1 + vowel[modVowel];
        }
        else {
            str1 = str1 + letter;
        }
    }
return str1;
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
