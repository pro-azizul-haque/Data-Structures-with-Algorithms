The **Stack** is one of the most fundamental **Data Structures (DS)** — and it follows a simple but powerful principle:

> 🧱 **LIFO (Last In, First Out)**

That means:
➡️ The **last** element you push into the stack is the **first** one you pop out.

---

## 🧠 Core Principles of Stack DS

| Principle           | Meaning                                                                             | Example                                                 |
| ------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **1. LIFO Order**   | Last inserted element is removed first.                                             | Like stacking plates — you remove the top plate first.  |
| **2. Push**         | Add (insert) an element on **top** of the stack.                                    | `stack.push(10)`                                        |
| **3. Pop**          | Remove the **top** element from the stack.                                          | `stack.pop()`                                           |
| **4. Peek / Top**   | See the top element **without removing** it.                                        | `stack[stack.length - 1]`                               |
| **5. isEmpty**      | Check if the stack has no elements.                                                 | `stack.length === 0`                                    |
| **6. Fixed access** | You can only access the **top** element directly — no random access like in arrays. | You can’t say `stack[2]` logically in pure Stack rules. |

---

## 🧩 Real-Life Analogy

Think of a **stack of books**:

* You **push** a book on top.
* You **pop** the top book off.
* You **peek** at the top book’s title.
* You **cannot directly take** a book from the middle — you must remove the ones above first.

---

## 💻 Example in JavaScript

```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    return this.items.join(" ");
  }
}

// Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());   // 30
console.log(stack.peek());  // 20
console.log(stack.printStack()); // 10 20
```
