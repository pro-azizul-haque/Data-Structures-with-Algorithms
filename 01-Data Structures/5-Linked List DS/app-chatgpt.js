class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add node at end
  append(data) {
    const newNode = new Node(data);
    console.log(newNode);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Display list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();

Array.from({ length: 100 }, (_, index) => index + 1).forEach((e) => {
  list.append(e);
});

const fs = require("fs");

fs.writeFile("linked_ds_.js", "list=" + JSON.stringify(list), (err) => {
  console.log(err);
});
 