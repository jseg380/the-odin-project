/**
 * @module BSTNode represents a node of a binary tree
 */

/**
 * @class BSTNode
 * @classdesc Node of a BST, it contains a value and references to left and right children
 */
class BSTNode {
  #value;
  #count;
  #leftChild;
  #rightChild;

  /**
   * Constructor
   *
   * @param {number} [value=0] Value of the node
   * @param {BSTNode | null} [leftNode=null] Left child node or null if it has no left child
   * @param {BSTNode | null} [rightNode=null] Right child node or null if it has no right child
   */
  constructor(value = 0, leftNode = null, rightNode = null) {
    this.#value = value;
    this.#count = 0;
    this.setLeftChild(leftNode);
    this.setRightChild(rightNode);
  }

  /**
   * Get value of the node
   *
   * @returns {number} Value contained in the node
   */
  getValue() {
    return this.#value;
  }

  /**
   * Set value of the node
   *
   * @param {number} value 
   */
  setValue(value) {
    this.#value = value;
  }

  /**
   * Get the left child node
   *
   * @returns {BSTNode | null} Left child node or null if it has no left child
   */
  getLeftChild() {
    return this.#leftChild;
  }

  /**
   * Set or remove left child node
   *
   * @param {BSTNode | null} newNode Node to insert as left child, null to remove left child node
   */
  setLeftChild(newNode) {
    if (!this.#leftChild && newNode)
      this.#count++;
    else if (this.#leftChild && !newNode)
      this.#count--;

    this.#leftChild = newNode;
  }

  /**
   * Get the right child node
   *
   * @returns {BSTNode | null} Right child node or null if it has no right child
   */
  getRightChild() {
    return this.#rightChild;
  }

  /**
   * Set or remove right child node
   *
   * @param {BSTNode | null} newNode Node to insert as right child, null to remove right child node
   */
  setRightChild(newNode) {
    if (!this.#rightChild && newNode)
      this.#count++;
    else if (this.#rightChild && !newNode)
      this.#count--;

    this.#rightChild = newNode;
  }

  /**
   * Check if it is a leaf node (have no children)
   *
   * @returns {boolean} True if node has no children, false otherwise
   */
  isLeafNode() {
    return (this.#count === 0);
  }

  /**
   * Get number of children nodes a node has
   *
   * @returns {number} Number of children nodes the node has
   */
  getChildrenCount() {
    return this.#count;
  }

  /**
   * Get the only child of a node, if the node has any amount of children other than 1, null
   *
   * @returns {BSTNode | null} The child node, null if the number of children != 1
   */
  getOnlyChild() {
    if (this.#count !== 1)
      return null;

    let childNode;
    if (this.#rightChild)
      childNode = this.#rightChild;
    else
      childNode = this.#leftChild;

    return childNode;
  }

  /**
   * Serialize a BSTNode object
   *
   * @returns {string} String with the node object
   */
  toString() {
    const mainNodeValue = this.#value;
    const rightChildValue = (this.getRightChild()) ? `┌─ ${this.getRightChild().getValue()}` : '';
    const leftChildValue  = (this.getLeftChild())  ? `└─ ${this.getLeftChild().getValue()}`  : '';

    const rightNodeString = `│ ${rightChildValue}\n`;
    const mainNodeString  = `└─${mainNodeValue}\n`;
    const leftNodeString  = `  ${leftChildValue}`;

    const str = rightNodeString + mainNodeString + leftNodeString;

    return str;
  }
}

export default BSTNode;
