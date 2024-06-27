/*
Commenting Someone Else's Code

Replace variables using the example input in code comments. Then fix the bug
in the code so that the example input matches the expected output.
*/
// This is where the function is declared and parameters are set.
// This function only has one parameter
// This is taking two strings/characters and combining them to make one string.
function charactersNotQuiteAtTheEdge(str) {
  // char1 is set to the first variable.
  // The first variable is taking the second letter of the string
  // Index starts at 0
  // 
  let char1 = str[1];
  // char2 is the second variable
  // Length starts at 1
  // The second variable is taking the end letter and should be taking second to end.
  // Changed -1 to -2 to fix the code inside the function
  let char2 = str[str.length - 2];
  // return is combining the first and second variables together.
  // 
  return char1 + char2;
}

console.log(charactersNotQuiteAtTheEdge('fringe')); // expected output: 'rg'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = charactersNotQuiteAtTheEdge;
