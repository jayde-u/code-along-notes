// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
'🐢======='

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

// use map
let introduce = "";
Object.entries(obj).map(value => {
   introduce += (value[0] + " " + value[1] + " ");
});

// use reduce
introduce = Object.entries(obj).reduce((str, val) => {
   return str + (val[0] + " " + val[1] + " ");
}, "");

introduce = Object.entries(obj).reduce(
  (str, [key, val]) => `${str}${key} ${val} `, ""
);


Object.entries(obj).map(value => value.join(" ")).join(' ')


// 
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaaries = (salaries) => {
  return Object.values(salaries)
    .reduce((sum, val) => sum + val, 0)
}


// 
let user = {
  name: 'John',
  age: 30
};

const count = (user) => {
  return Object.keys(user).length;
}

