var database = [
	{
		username: "Jayde",
		password: "supersecret"
	},
	{
		username: "Bucky",
		password: "123"
	},
	{
		username: "Sirius",
		password: "777"
	}
];

var newsfeed = [
	{
		username: "Jayde",
		timeline: "So,,"
	},
	{
		username: "Bucky",
		timeline: "Who the hell is bucky?"
	},
	{
		username: "Sirius",
		timeline: "I did my waiting! Twelve years of it! In Azkaban!"
	}
];

function isUserValud(username, password)
{
	for (var i = 0; i < database.length; i++)
	{
		if (database[i].username === username &&
			database[i].password === password) 
			return true; 
	}
	return false;
}

function signIn(username, password) 
{
	if (isUserValud(username, password))
		console.log(newsfeed);
	else
		alert("Sorry, wrong username and password")
}

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


signIn(usernamePrompt, passwordPrompt);
