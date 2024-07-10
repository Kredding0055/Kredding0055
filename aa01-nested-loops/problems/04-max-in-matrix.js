/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/

function maxInMatrix(matrix) {
  let largestValue = 0;

  for(let i = 0; i < matrix.length; i++) {
    let subArray = matrix[i];
    for(let x = 0; x < subArray.length; x++) {
      let number = subArray[x];

      if(largestValue < number) {
        largestValue = number;
      }
    }
  }
  return largestValue;
}

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
