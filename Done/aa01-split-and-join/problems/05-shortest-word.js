/*
Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.
*/

function shortestWord(sentence) {
    let word = sentence.split(' ');
    console.log('1', word);
    let shortestLetters = word[0].length;
    console.log('2', shortestLetters);
    shortest = '';

    for(let i = 0; i < word.length; i++) {
        let string = word[i];
        console.log('3', string);
        letters = string.length;
        console.log('4', letters)
        if(letters <= shortestLetters) {
            shortestLetters = letters;
            shortest = string;
        }

    }
   return shortest;
}

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestWord;
