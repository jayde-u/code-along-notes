// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const namesIncludesJohn = dragons.filter(name => name.includes('John'));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powerOf100 = num => (num ** 100);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(powerOf100(10000));  // Infinity

