/*
Write a function snakeToPascal that takes in a snake_cased string and returns a
PascalCased version of the string. snakecase is where each word is separated
with underscores (``). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.
*/

function snakeToPascal(sentence) {
    let string = [];
    let word = sentence.toLowerCase().split('_');
    //console.log('1', word);

    for(let i = 0; i < word.length; i++) {
        let firstLetter = word[i][0];
        //console.log('2', firstLetter);
        restOfWord = word[i].slice(1);
        //console.log('3', restOfWord);
        string += firstLetter.toUpperCase() + restOfWord;
    }
    return string;
}
console.log(snakeToPascal('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToPascal('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToPascal('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToPascal('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = snakeToPascal;
