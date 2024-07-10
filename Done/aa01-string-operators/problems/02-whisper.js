/*
Define a function whisper that takes in a string parameter and returns a
"whispered" version of that string.
*/

function whisper(str) {
    str = str.toLowerCase();
    return '...' + str + '...';
} 

console.log(whisper("Hey Buddy")); // "...hey buddy..."
console.log(whisper("YEA! that was FUN")); // "...yea! that was fun..."

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = whisper;
