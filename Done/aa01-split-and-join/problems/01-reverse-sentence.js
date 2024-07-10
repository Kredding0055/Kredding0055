/*
Write a function reverseSentence(sentence) that takes in a sentence as an arg.
The function should return a new sentence where the order of the words is
reversed. Note that you should reverse the order among words, not the order
among characters.
*/
// have an input and output
// take input string and reverse it.
// 
function reverseSentence(sentence) {
    let reversed = [];
    let string = sentence.split(' ');
    //console.log('1', string);
    for(let i = string.length -1; i >= 0; i--) {
        let word = string[i];
        //console.log('2', word);
        reversed.push(word);
        //console.log(reversed);
    }
    return reversed.join(' ');
}


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseSentence;
