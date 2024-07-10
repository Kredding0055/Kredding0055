/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/

function longestWord(sentence) {
    if(sentence.length < 1) {
        return sentence;
    }
    let word = sentence.split(' ');
    //console.log('1', word);
    let longestLetters = 0;
    //console.log('2', longestLetters);
    longest = '';

    for(let i = 0; i < word.length; i++) {
        let string = word[i];
        //console.log('3', string);
        letters = string.length;
        //console.log('4', letters)
        if(letters > longestLetters) {
            longestLetters = letters;
            longest = string;
        }

    }
   return longest;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestWord;
