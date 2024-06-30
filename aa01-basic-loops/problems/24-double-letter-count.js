/*
Write a function doubleLetterCount that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

function doubleLetterCount(str) {
    let count = 0; 

    for(let i = 1; i < str.length; i++) {
        let letter = str[i];
        if(letter == str[i -1]) {
        count += 1;
        }
    }
    return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleLetterCount;
