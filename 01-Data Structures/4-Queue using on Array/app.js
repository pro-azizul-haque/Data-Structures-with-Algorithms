class Queue {
  constructor() {
    this.items = [];
  }
  //? O(1)
  enqueue(value) {
    this.items.push(value);
  }
  //? O(n) reason is every element of array shift left place 
  dequeue() {
    return this.items.shift();
  }
  //? O(1)
  peek() {
    return this.items[0];
  }
  //? O(1)
  isEmpty() {
    return this.items.length === 0;
  }
  //? O(1)
  get print() {
    console.log(this.items);
  }
}

const visitorLine = new Queue();
visitorLine.enqueue(1);
visitorLine.enqueue(2);
visitorLine.enqueue(3);
console.log(visitorLine.peek());
console.log(visitorLine.dequeue());
visitorLine.print;
