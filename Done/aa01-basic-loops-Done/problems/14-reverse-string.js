/*
Write a function reverseString(str) that takes in a string. The function should
return a new string where the order of the characters is reversed.
*/

function reverseString(word) {
    let newWord = '';
    for (let i = word.length -1; i >= 0; i--) {
        newWord += word[i];
    }
    return newWord;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
console.log(reverseString('racecar'))
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseString;
