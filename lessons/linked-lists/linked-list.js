class Node {
  constructor(value=null) {
    this.value = value;
    this.nextNode = null;
  }
};


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = this.tail = newNode;
    }
    else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = this.tail = newNode;
    }
    else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  at(index) {
    if (index < 0 || index >= this.size) return null;
    
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }

    return node;
  }

  pop() {
    if (this.head === null) return;

    let node = this.head;
    while (node.nextNode.nextNode !== null) {
      node = node.nextNode;
    }

    // Node references the second-to-last node, i.e. the new tail node
    node.nextNode = null;
    this.tail = node;

    this.size--;
  }

  contains(value) {
    if (this.head === null) return false;

    let node = this.head;

    while (node.nextNode !== null) {
      if (node.value === value) return true;

      node = node.nextNode;
    }

    return false;
  }

  find(value) {
    if (this.head === null) return -1;

    let node = this.head;
    let index = 0;

    while (node.nextNode !== null) {
      if (node.value === value) return index;

      node = node.nextNode;
      index++;
    }

    return -1;
  }

  insertAt(value, index) {
    let newNode = new Node(value);

    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }
    
    newNode.nextNode = node.nextNode;
    node.nextNode = newNode;
    
    this.size++;
  }

  removeAt(index) {
    let node = this.head;
    for (let i = 0; i < index-1; i++) {
      node = node.nextNode;
    }
    node.nextNode = node.nextNode.nextNode;

    this.size--;
  }

  toString() {
    if (this.head === null) return 'empty list';

    let node = this.head;
    let str = '';
    
    while (node !== null) {
      str += `( ${node.value} ) -> `;
      node = node.nextNode;
    }

    str += 'null';

    return str;
  }
};
