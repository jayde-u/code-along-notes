// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const usernamesWithbang = [];
array.forEach(user => { 
  usernamesWithbang.push(user.username + "!");
});

//Create an array using map that has all the usernames with a "? to each of the usernames
const usernamesWithQMark = array.map(user => user.username + "?");

//Filter the array to only include users who are on team: red
const usersOnRedTeam = array.filter(user => user.team === "red");

//Find out the total score of all users using reduce
const totalScoreOfUsers = array.reduce((acc, user) => acc + user.score, 0)

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
// (1) 0, 1, 2, .. index of array
// (2)
const newArray = arrayNum.map ((num, i) => num * 2);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const userInfoWithBangItems = array.map(user => {
  return {
    username: user.username,
    team: user.team,
    score: user.score,
    items: user.items.map(item => item + "!")
  };  
});

/* Bonus exercises suggested by Chat GPT */

// 1. Create a new array of usernames, but each one should be reversed (e.g., "john" → "nhoj").
const reversedUsernames = array
  .map(user => user.username.split('').reverse().join(''));

// 2. Return only the users who have more than 2 items.
const userWithOver2Items = array
  .filter(user => user.items.length > 2;

// 3. Calculate the average score of all users.
const sumOfScore = array
  .reduce((acc, user) => acc + user.score, 0);
const avgScore = sumOfScore / array.length;

// 4. Print out a sentence for each user, like: “Username has X items and belongs to the Y team.”
array.forEach(user => 
  console.log(`${user.username} has ${user.items.length} items and belongs to the ${user.team} team.`)
);

// 5. Create a new array where each user’s score is doubled, but keep the original structure.
const usersWithDoubledScore = array.map(
  user => {
    return {
      ...user,
      score: user.score * 2,
    }
  }
);

// 6. Get an array of usernames who do not have "pen" in their items. 
const userWithoutPen = array
  .filter(user => !user.items.includes("pen"))
  .map(user => user.username);

// 7. Make a new array of all items owned by users, and count how many total items exist (without duplicates).
let allItems = [];
array.forEach(user => {
  user.items.forEach(item => {
    if(!allItems.includes(item))
      allItems.push(item);
  })
});

const numOfItems = allItems.length;


// 8. Return only users from the "red" team who have the item "ball".
const userFromRedTeamWithBall = array
  .filter(user => user.team == "red" && user.items.includes("ball"));


// 9. Add a new property to each user: isActive: true, without modifying the original array.
const newArray = array
  .map(user => {
    return {
      ...user,
      isActive: true
    }
  });

