/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

function maxColumn(matrix) {
  let result = [];

  for(let i = 0; i < matrix.length; i++) {
    let subArray = matrix[i];
    let bigger = 0;
    for(let x = 0; x < subArray.length; x++) {
      let number = matrix[x][i];
      if(bigger < number) {
        bigger = number;
        
      }
    }
    result.push(bigger);
  }
  return result;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
