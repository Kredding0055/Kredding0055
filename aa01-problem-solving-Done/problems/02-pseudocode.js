/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Given a number, write a function called within5Of100 to return true if the given
number is within 5 of 100.
*/


//The number needs to be within 5 of 100
//Define a function to see if my number is within 5 of 100
//My input will be 1 parameter for my function
function within5Of100(num) {
    return (num >= 95 && num <= 105)
    
}

//Write code that sees if my number is within 5 of 100
//return true or false


 console.log(within5Of100(94));  //=> false
 console.log(within5Of100(95));  //=> true
 console.log(within5Of100(100)); //=> true
 console.log(within5Of100(105)); //=> true
 console.log(within5Of100(106)); //=> false

// CHALLENGE: Can you design a function that would return true if a given number
// is within X of another given number Y?


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = within5Of100;
