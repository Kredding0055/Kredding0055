/*
Write a function called `myMap` that behaves like the `Array.map`
method.
*/

// Your code here 

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

function myMap(friends, callback) {
  let result = [];

  for(let i = 0; i < friends.length; i++) {
    let friendObj = friends[i];
    // console.log(friendObj);
    result.push(callback(friendObj));
  }
  return result;
}

const goodFriendsOrNot = myMap(
  friends,
  friend => friend.yearsOfFriendship > 5
); // [false, false, true, true]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
