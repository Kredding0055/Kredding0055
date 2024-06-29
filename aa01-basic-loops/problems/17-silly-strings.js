/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/
// 0. iterate through a string
// 1. input is a string, output is a sting
// 2. take string and add b plus the vowel the b follows to after the b.
// 3. put string back together.

function sillyString(word) {
    let vowel = 'aeiou';

    for(let i = 0; i <= word.length; i++) {
       let letter = word[i];
        
        if(vowel.includes(letter)) {
            str = word[i] + 'b' + letter;
            //str1 = word[i] + str;
            return str;
        }


    }
    
}

console.log(sillyString('stop'));       // stobop
// console.log(sillyString('that'));       // thabat
// console.log(sillyString('can'));        // caban
// console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
// console.log(sillyString('scooter'));    // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
