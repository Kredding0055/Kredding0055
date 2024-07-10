/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function removeLastVowel(str) {
    let vowel = 'aeiou';
    let word = '';
    for(let i = str.length - 1; i > 0; i--) {
        let letter = str[i];
        if(vowel.includes(letter)) {
            let first = str.slice(0,i);
            let second = str.slice(i +1);
            return first + second;
        }
        
    }
    return str;
} 

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
