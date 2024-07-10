/*
Define a function logBetweenStepper that takes in 3 numbers as parameters. The
function should print out numbers between a minimum number and a maximum number
at defined intervals. The first parameter should represent the minimum number.
The second parameter should represent the maximum number. The third parameter
should represent the interval.

HINT: This function only needs to print using console.log it does not need to
return anything.
*/

function logBetweenStepper(min, max, int) {
    //while(int >= min && int <= max)
    let i = '';
    for(i = min; i <= max ; i += int) {
        if(i >= min && i <= max)
            console.log(i);
        }
    
}

logBetweenStepper(5, 9, 1);
logBetweenStepper(4, 8, 2);
logBetweenStepper(-10, 15, 5)
/* prints out:
5
6
7
8
9
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetweenStepper;
