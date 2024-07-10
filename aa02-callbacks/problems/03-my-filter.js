/*
Write a function called `myFilter` that behaves like the `Array.filter`
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

function myFilter(friendsArray, callback) {
  let result = [];

  for(let friendObj of friendsArray) {
    // console.log(friendObj);
    if(callback(friendObj) === true) {
      result.push(friendObj);
    }
  }
  return result;
}

const filteredFriends = myFilter(friends, friend => {
  return friend.name[0] === "A" && friend.yearsOfFriendship > 5;
}); // [ { name: 'Agatha', yearsOfFriendship: 6 } ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = filteredFriends;
} catch {}
