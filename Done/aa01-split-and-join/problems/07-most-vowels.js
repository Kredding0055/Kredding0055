/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function mostVowels(sentence) {
    let VOWELS = 'aeiou'
    let word = sentence.split(' ');
    console.log('1', word);
    let count = 0;
    // console.log('2', count);
    highestCount = 0;
    wordWithMostVowels = '';

    for(let i = 0; i < word.length; i++) {
        let string = word[i];
        console.log('3', string);
        for(let x = 0; x < string.length; x++) {
            let letter = string[x];
            console.log('4', letter);
            if(VOWELS.includes(letter)) {
                count

            }
            if(count > highestCount) {
                highestCount = count;
                wordWithMostVowels = string;               
            }
        }

    }
    console.log('5', count);
   //return wordWithMostVowels;
} 

console.log(mostVowels("what a wonderful life")); // "wonderful"
console.log(mostVowels("the quick brown fox jumps")); // "quick"
console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
