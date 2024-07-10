/*
Write a function initials(name) that accepts a full name as an arg. The function
should return the initials for that name.
*/


function initials(fullName) {
    let string = [];
    let word = fullName.split(' ');
    console.log('1', word);

    for(let i = 0; i < word.length; i++) {
        let firstLetter = word[i][0];
        //console.log('2', firstLetter);
        restOfWord = word[i].slice(1);
        //console.log('3', restOfWord);
        string += firstLetter.toUpperCase();
    }
    return string;
}


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = initials;
