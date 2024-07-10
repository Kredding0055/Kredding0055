/*
Write a function moreDotLessDash that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
more dots (.) than dashes (-).
*/

function moreDotLessDash(str) {
    dash = 0;
    dot = 0; 
    for(i = 0; i < str.length; i++) {
        letter = str[i];
        if(letter == '-') {
            dash +=1;
        }
        if(letter == '.') {
            dot +=1;
        }
        
    }
    if(dot > dash) {
        return true;
    }
    return false;
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = moreDotLessDash;
