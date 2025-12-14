class Node {
  constructor(value) {
    this.value = value;
    this.nextLink = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node.value;
    }

    this.tail.nextLink = node;
    this.tail = node;
    this.length++;
    return node.value;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.length) {
      // this.append(node); // in this case don't provide node as an argument cause append also create a new node
      return this.append(value);
    }

    node.nextLink = this.head; // think this new node is the first node , just with linked the head this new node
    this.head = node; // the head is a variable so just we update the head variable
    this.length++;
    return node.value;
  }

  insert(index, value) {
    const node = new Node(value);
    if (index === this.length - 1) {
      return this.append(value);
    } else if (index >= this.length) {
      throw Error("Index not found");
    }
    let count = 0;
    let leadingNode = this.head;
    while (index !== count) {
      leadingNode = leadingNode.nextLink;
      count++;
    }
    node.nextLink = leadingNode.nextLink;
    leadingNode.nextLink = node;
    return node.value;
  }
  remove(index) {
    let count = 1;
    let targetNode = this.head
    while(index !== count){
      targetNode = targetNode.nextLink
      count++
    }
    targetNode.nextLink = targetNode.nextLink.nextLink
  }
  print() {
    const items = [];
    let current = this.head;
    while (current !== null) {
      items.push(current.value);
      current = current.nextLink;
    }
    console.log(items.join("-> "));
  }
  get size(){
    return this.length
  }
}

const list = new LinkedList();
// list.append(10);
console.log(list.prepend("a"));
console.log(list.append("b"));
console.log(list.append("c"));
console.log(list.append("d"));
console.log(list.insert(0, "x"));
console.log(list.insert(3, "x"));
list.remove(1)
list.print();
console.log(list.size);
