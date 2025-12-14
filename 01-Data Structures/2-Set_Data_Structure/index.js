

// const set = new Set()
// set.add("apple")
// set.add("banana")
// set.add("orange")
// console.dir(set);
// console.log(set.size);
// set.delete("orange")
// console.dir(set);
// set.clear()
// console.dir(set);
// console.log(set.size);

// set.add([1,2,3])
// console.dir(set);
// console.log(set.size);


// const set2 = new Set([1,2,3,4,5])

// console.log(set2.has(2));
// console.log(set2.values().map(e => console.log(e)));

const monsurFriends = ["azizul","meizan","gaffar"]
const myFriends = ["sumon","meizan","gaffar","emran"]
const smFriends = new Set([...monsurFriends,...myFriends])
console.log(smFriends);
