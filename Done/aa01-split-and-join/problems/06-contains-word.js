/*
Write a function containsWord(sentence, targetWord) that accepts two strings as
args. The function should return a boolean indicating whether the targetWord is
found inside of the sentence. Solve this without using String's indexOf() or
includes() methods.
*/

function containsWord(sentence, targetWord) {
    let word = sentence.toLowerCase().split(' ');
    //console.log('1', word);

    for(let i = 0; i < word.length; i++) {
        let string = word[i];
        //console.log('3', string);
        if(string === targetWord) {
            return true;
        }

    }
   return false;
}
console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = containsWord;
