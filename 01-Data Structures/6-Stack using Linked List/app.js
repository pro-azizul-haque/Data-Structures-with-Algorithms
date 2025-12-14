import { LinkedList } from "./linkedList.js";

class Stack {
  constructor() {
    this.items = new LinkedList();
  }
  push(value) {
    return this.items.append(value);
  }

  pop() {
    this.items.remove(this.items.length)
  }
  peek(){
    return this.items.tail
  }
  print(value) {}
}

const stack = new Stack()
stack.push(1)
stack.push(2)
// stack.pop()
console.log(stack.peek());
console.log(stack);