// stateless
// function counter(newcount) {
//   let counter = 0;
//   counter += newcount
//   return counter
// }

// console.log(counter(10));
// console.log(counter(10));

// stateful -> but problem is its not reusable
// const counter = {
//   count: 0,
//   add(newCount) {
//     this.count += newCount;
//   },

// };

// statefull and reuseable
class Counter {
  constructor() {
    this.count = 0;
  }
  add(newCount) {
    this.count += newCount;
  }
}

const counter = new Counter()
counter.add(10)
console.log(counter.count);

const counter2 = new Counter()
counter2.add(10)
counter2.add(10)
console.log(counter2.count);