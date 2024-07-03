class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
};


export class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  constructor() {}

  get size() {
    return this.#size;
  }

  get length() {
    return this.size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  append(value) {
    let newNode = new Node(value);

    if (this.#head === null)
      this.#head = this.#tail = newNode;
    else
      this.#tail = this.#tail.nextNode = newNode;

    return ++this.#size;
  }

  prepend(value) {
    let newNode = new Node(value);

    if (this.#head === null)
      this.#head = this.#tail = newNode;
    else {
      newNode.nextNode = this.#head;
      this.#head = newNode;
    }

    return ++this.#size;
  }

  at(index) {
    if (index >= this.size)
      return null;

    let currentNode = this.#head;

    for (let i = 0; i < index; i++)
      currentNode = currentNode.nextNode;

    return currentNode;
  }

  pop() {
    if (this.#head === null)
      return null;

    let currentNode = this.#head;

    for (let i = 0; i < (this.size - 1); i++)
      currentNode = currentNode.nextNode;

    const oldHead = this.head;
    this.#tail = currentNode;
    this.#tail.nextNode = null;
    this.#size--;

    return this.#tail;
  }

  popHead() {
    if (this.#head === null)
      return null;

    const oldHead = this.head;
    
    this.#head = this.head.nextNode;

    this.#size--;

    return oldHead;
  }

  contains(value) {
    let currentNode = this.#head;

    for (let i = 0; i < this.size; i++) {
      currentNode = currentNode.nextNode;
      if (currentNode.value === value)
        return true;
    }

    return false;
  }

  find(value, equalfn = (iter, value) => {return iter === value;}) {
    let currentNode = this.#head;

    for (let i = 0; i < this.size; i++) {
      if (equalfn(currentNode.value, value))
        return i;
      currentNode = currentNode.nextNode;
    }

    return null;
  }

  replaceAt(index, newValue) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++)
      currentNode = currentNode.nextNode;

    currentNode.value = newValue;
  }

  insertAt(index, value) {
    let currentNode = this.head;
    let newNode = new Node(value);

    for (let i = 0; i < index - 1; i++)
      currentNode = currentNode.nextNode;

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;

    return ++this.#size;
  }

  removeAt(index) {
    if (index === this.size - 1)
      return this.pop();

    if (index === 0)
      return this.popHead();

    if (index >= this.size || this.#head === null)
      return null;

    let currentNode = this.#head;

    for (let i = 0; i < index - 1; i++)
      currentNode = currentNode.nextNode;
    
    let deletedNode = currentNode.nextNode;
    currentNode.nextNode = deletedNode.nextNode;

    this.#size--;

    return currentNode;
  }

  toString() {
    let str = '';
    let currentNode = this.#head;

    for (let i = 0; i < this.size; i++) {
      str += '(' + currentNode.value + ') -> ';
      currentNode = currentNode.nextNode;
    }

    str += 'null';

    return str;
  }
}
