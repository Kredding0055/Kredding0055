/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function reverb(word) {
    let vowels = 'aeiouAEIOU';
    let num = '0123456789';

    for(let i = 0; i < word.length; i++) {
        let word2 = word[i];

        if(num.includes(word2)) {
            return word;
        }
        
    }

    for (let i = word.length -1; i > 0; i--) {
        let letter = word[i];

        if (vowels.includes(letter)) {
            let str = word.slice(i);
            return word + str;
            
        }

    }
    return null
}


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb('197393'));  // 197393
console.log(reverb(197393));    // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
