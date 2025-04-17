const ztmMonsters = [
{id: 1, monster: 'Mr. Mouse', level: 1},
{id: 2, monster: 'Mac', level: 30},
{id: 3, monster: 'Denodude', level: 17},
{id: 4, monster: 'Pye', level: 5},
];

// Old Way
const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
console.log(advancedMonsters)
console.log(advancedMonsters[advancedMonsters.length - 1])


// Using findLast()
const lastMonster = ztmMonsters.findLast(item => item.level > 15);
console.log(lastMonster); // {id: 3, monster: 'Denodude', level: 17}
// Using findLastIndex()
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
console.log(lastMonsterIndex); // 2


const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];

//Using reverse()
const reverseMonsters = ztmMonstersList.reverse();
console.log(ztmMonstersList)   // ['Pye', 'Denodude', 'Mac', 'Mr. Mouse']
console.log(reverseMonsters)   // ['Pye', 'Denodude', 'Mac', 'Mr. Mouse']

//using toReversed()
const reversedMonstersTo = ztmMonstersList.toReversed();
console.log(ztmMonstersList)   // ['Pye', 'Denodude', 'Mac', 'Mr. Mouse']
console.log(reversedMonstersTo)// ['Mr. Mouse', 'Mac', 'Denodude', 'Pye']

//Using toSorted()
const sortedMonstersTo = ztmMonstersList.toSorted();
console.log(ztmMonstersList)   // ['Pye', 'Denodude', 'Mac', 'Mr. Mouse']
console.log(sortedMonstersTo)  // ['Denodude', 'Mac', 'Mr. Mouse', 'Pye']

//Using toSpliced()
const spliceMonstersTo = ztmMonstersList.toSpliced(2, 1);
console.log(ztmMonstersList)   // ['Pye', 'Denodude', 'Mac', 'Mr. Mouse']
console.log(spliceMonstersTo)  // ['Pye', 'Denodude', 'Mr. Mouse']

//Old Way
ztmMonstersList[1] = 'Gost';
console.log(ztmMonstersList)   // ['Pye', 'Gost', 'Mac', 'Mr. Mouse']

// Using with()
ztmMonstersList[1] = 'Denodude';
const withMonsters = ztmMonstersList.with(1, 'Gost');
console.log(ztmMonstersList)   // ['Pye', 'Denodude', 'Mac', 'Mr. Mouse']
console.log(withMonsters)      // ['Pye', 'Gost', 'Mac', 'Mr. Mouse']

