/*
Given the `friends` array, use the `Array.reduce()` method to get the
sum of all the years of friendship with all the friends in the array. Assign the
output of `Array.reduce()` to the `totalYears` variable.
*/

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];
let initialValue = 0;
const totalYears = friends.reduce(  (acc, friend) => {
  console.log('1', acc, friend);
  acc += friend.yearsOfFriendship;
  return acc;
},0)

console.log(totalYears); // 19


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = totalYears;
} catch {}
