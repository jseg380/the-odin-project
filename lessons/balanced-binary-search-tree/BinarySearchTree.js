/**
 * @module Balanced Binary Search Tree
 */

import BSTNode from "./BSTNode.js";

/**
 * @class BinarySearchTree
 * @classdesc Binary Search Tree
 */
class BinarySearchTree {
  #root;

  /**
   * Constructor: create a tree from an array of values
   *
   * @param {Array<number>} arrayValues Array with the numbers to create a tree
   */
  constructor(arrayValues = []) {
    this.buildTree(arrayValues);
  }

  /**
   * Create a tree from an array of values
   *
   * @param {Array<number>} arrayValues Array with the numbers to create a tree
   */
  buildTree(arrayValues = []) {
    // Convert to set and to array later to remove duplicates
    const uniqueArrayValues = [...new Set(arrayValues)];

    // Copy list unpacked and sort that new list, identical to the other one
    // The method sort modifies the array upon which is called
    const sortedUniqueArrayValues = [...uniqueArrayValues].sort();

    this.#root = this.#buildTreeFromArray(sortedUniqueArrayValues);
  }

  /**
   * Create a tree from an array of values
   *
   * @param {Array<number> | null} sortedUniqueArrayValues Array with the numbers to create a tree, sorted ascendently
   * @returns {BSTNode | null} The root node of the tree, null if the array was empty
   */
  #buildTreeFromArray(sortedUniqueArrayValues) {
    if (sortedUniqueArrayValues.length === 0)
      return null;

    const middleIndex = Math.trunc((sortedUniqueArrayValues.length - 1) / 2);

    const rootNode = new BSTNode(sortedUniqueArrayValues[middleIndex]);

    const leftArray = sortedUniqueArrayValues.slice(0, middleIndex);
    const rightArray = sortedUniqueArrayValues.slice(middleIndex + 1);

    rootNode.setLeftChild(this.#buildTreeFromArray(leftArray));
    rootNode.setRightChild(this.#buildTreeFromArray(rightArray));

    return rootNode;
  }

  /**
   * Insert a value into the tree
   *
   * @param {number} value Value to insert
   * @returns {boolean} True if the value was inserted, false if it was already present
   */
  insertValue(value) {
    // Cannot have duplicates in a BST
    if (this.findNode(value)) {
      return false;
    }

    const newNode = new BSTNode(value);

    // Handle the case where the tree is empty
    if (this.#root === null) {
      this.#root = newNode;
      return true;
    }

    // Otherwise, insert recursively
    return this.#insertNodeRecursive(newNode, this.#root);
  }

  /**
   * Insert a node into a subtree
   *
   * @param {number} value Value to insert
   * @param {BSTNode | null} rootNode Subtree in which to insert the node
   * @returns {boolean} True if the value was inserted, false if it was already present
   */
  #insertNodeRecursive(newNode, rootNode) {
    const newNodeValue = newNode.getValue();
    const rootNodeValue = rootNode.getValue();

    let childNode;
    if (newNodeValue > rootNodeValue)
      childNode = rootNode.getRightChild();
    else
      childNode = rootNode.getLeftChild();

    if (childNode !== null)
      return this.#insertNodeRecursive(newNode, childNode);
    
    if (newNodeValue > rootNodeValue)
      rootNode.setRightChild(newNode);
    else
      rootNode.setLeftChild(newNode);

    return true;
  }

  /**
   * Delete a node of a BST
   *
   * @param {number} value Value of the node to delete
   * @returns {boolean} True if the node was deleted successfully, false otherwise
   */
  deleteValue(value) {
    // Cannot delete a non-existent node
    if (!this.findNode(value))
      return false;

    return this.#deleteValueRecursive(value, this.#root);
  }

  /**
   * Delete a node of a BST
   *
   * @param {number} value Value of the node to delete
   * @param {BSTNode} rootNode Root node of the subtree in which that node is located
   * @returns {boolean} True if the node was deleted successfully, false otherwise
   */
  #deleteValueRecursive(value, currentNode, parentNode = null) {
    if (!currentNode) {
      return false; // Value not found
    }

    if (value < currentNode.getValue()) {
      return this.#deleteValueRecursive(value, currentNode.getLeftChild(), currentNode);
    } else if (value > currentNode.getValue()) {
      return this.#deleteValueRecursive(value, currentNode.getRightChild(), currentNode);
    } else {
      // Node to delete found
      switch (currentNode.getChildrenCount()) {
        case 0:
          // Leaf node: update parent's reference
          if (parentNode) {
            if (parentNode.getLeftChild() === currentNode) {
              parentNode.setLeftChild(null);
            } else {
              parentNode.setRightChild(null);
            }
          } else {
            // Deleting root node with no children
            this.root = null;
          }
          break;

        case 1: {
          // Single child: bypass current node
          const child = currentNode.getLeftChild() || currentNode.getRightChild();
          if (parentNode) {
            if (parentNode.getLeftChild() === currentNode) {
              parentNode.setLeftChild(child);
            } else {
              parentNode.setRightChild(child);
            }
          } else {
            // Deleting root node with one child
            this.root = child;
          }
          break;
        }

        case 2: {
          // Two children: replace with in-order successor
          const successor = this.findInorderSuccessor(currentNode);
          const successorValue = successor.getValue();
          // Replace current node's value with successor's value
          currentNode.setValue(successorValue);
          // Delete the successor node from the right subtree
          this.#deleteValueRecursive(successorValue, currentNode.getRightChild(), currentNode);
          break;
        }
      }
      return true;
    }
  }

  /**
   * Find a node that contains a value
   *
   * @param {number} value Value of the node
   * @returns {BSTNode | null} Node containing the specified value, null if the tree doesn't contain that value
   */
  findNode(value) {
    return this.#findNodeRecursive(value, this.#root);
  }

  /**
   * Find a node that contains a value in a subtree
   *
   * @param {number} value Value of the node
   * @param {BSTNode | null} rootNode Subtree in which to search
   * @returns {BSTNode | null} Node containing the specified value, null if the tree doesn't contain that value
   */
  #findNodeRecursive(value, rootNode) {
    if (rootNode === null)
      return null;

    const rootNodeValue = rootNode.getValue();
    if (value === rootNodeValue)
      return rootNode;

    let childNode;
    if (value > rootNodeValue)
      childNode = rootNode.getRightChild();
    else
      childNode = rootNode.getLeftChild();

    return this.#findNodeRecursive(value, childNode);
  }

  /**
   * Finds the inorder successor of a given node in a BST
   *
   * @param {BSTNode} targetNode Node from which take the next one in inorder
   * @param {BSTNode} rootNode Root node of the subtree to traverse
   * @returns {BSTNode | null} Next node when traversing the subtree in inorder parting from targetNode, null if
   *    targetNode was the last node of the tree
   */
  findInorderSuccessor(targetNode, rootNode = this.#root) {
    let successorNode = null;

    // Starting at the right child, go left as far as possible.
    while (rootNode) {
      if (targetNode.getValue() < rootNode.getValue()) {
        successorNode = rootNode;
        rootNode = rootNode.getLeftChild();
      }
      else {
        rootNode = rootNode.getRightChild();
      }
    }

    return successorNode;
  }

  /**
   * Inorder traversal of the tree
   *
   * @param {BSTNode} rootNode Root node of the subtree to traverse
   * @returns {Array<number>} Array with the values of the nodes traversed in inorder
   */
  inorderTraversal(rootNode) {
    let realRootNode;

    if (!rootNode)
      realRootNode = this.#root;
    else
      realRootNode = rootNode;

    return this.#inorderTraversalRecursive(realRootNode);
  }

  /**
   * Inorder traversal of the tree, recursive method
   *
   * @param {BSTNode} rootNode Root node of the subtree to traverse
   * @returns {Array<number>} Array with the values of the nodes traversed in inorder
   */
  #inorderTraversalRecursive(rootNode) {
    if (!rootNode)
      return [];

    let orderedValues = [];

    // Left subtree
    orderedValues.push(...this.#inorderTraversalRecursive(rootNode.getLeftChild()));

    // Root node
    orderedValues.push(rootNode.getValue());

    // Right subtree
    orderedValues.push(...this.#inorderTraversalRecursive(rootNode.getRightChild()));

    return orderedValues;
  }

  /**
   * Traverses the tree in level-order and calls the callback on each node.
   *
   * @param {Function} callback - Function to call on each node.
   * @throws {Error} If no callback is provided.
   */
  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required for levelOrder.");
    }

    if (this.#root === null) {
      return; // Tree is empty
    }

    const queue = [this.#root]; // Initialize queue with the root node
    this.#levelOrderRecursive(queue, callback);
  }

  /**
   * Helper function for level-order traversal.
   *
   * @param {BSTNode | null} node - Current node in the traversal.
   * @param {Function} callback - Function to call on each node.
   */
  #levelOrderRecursive(queue, callback) {
    if (queue.length === 0) {
      return; // Base case: queue is empty
    }

    const currentNode = queue.shift(); // Dequeue the first node

    // Call the callback on the current node
    callback(currentNode);

    // Enqueue the left child if it exists
    if (currentNode.getLeftChild() !== null) {
      queue.push(currentNode.getLeftChild());
    }

    // Enqueue the right child if it exists
    if (currentNode.getRightChild() !== null) {
      queue.push(currentNode.getRightChild());
    }

    // Recursively process the next node in the queue
    this.#levelOrderRecursive(queue, callback);
  }

  /**
   * Traverses the tree in in-order (left, root, right) and calls the callback on each node.
   *
   * @param {Function} callback - Function to call on each node.
   * @throws {Error} If no callback is provided.
   */
  inOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required for inOrder.");
    }

    this.#inOrderRecursive(this.#root, callback);
  }

  /**
   * Helper function for in-order traversal.
   *
   * @param {BSTNode | null} node - Current node in the traversal.
   * @param {Function} callback - Function to call on each node.
   */
  #inOrderRecursive(node, callback) {
    if (node === null) {
      return;
    }

    // Traverse left subtree
    this.#inOrderRecursive(node.getLeftChild(), callback);

    // Call callback on current node
    callback(node);

    // Traverse right subtree
    this.#inOrderRecursive(node.getRightChild(), callback);
  }

  /**
   * Traverses the tree in pre-order (root, left, right) and calls the callback on each node.
   *
   * @param {Function} callback - Function to call on each node.
   * @throws {Error} If no callback is provided.
   */
  preOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required for preOrder.");
    }

    this.#preOrderRecursive(this.#root, callback);
  }

  /**
   * Helper function for pre-order traversal.
   *
   * @param {BSTNode | null} node - Current node in the traversal.
   * @param {Function} callback - Function to call on each node.
   */
  #preOrderRecursive(node, callback) {
    if (node === null) {
      return;
    }

    // Call callback on current node
    callback(node);

    // Traverse left subtree
    this.#preOrderRecursive(node.getLeftChild(), callback);

    // Traverse right subtree
    this.#preOrderRecursive(node.getRightChild(), callback);
  }

  /**
   * Traverses the tree in post-order (left, right, root) and calls the callback on each node.
   *
   * @param {Function} callback - Function to call on each node.
   * @throws {Error} If no callback is provided.
   */
  postOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required for postOrder.");
    }

    this.#postOrderRecursive(this.#root, callback);
  }

  /**
   * Helper function for post-order traversal.
   *
   * @param {BSTNode | null} node - Current node in the traversal.
   * @param {Function} callback - Function to call on each node.
   */
  #postOrderRecursive(node, callback) {
    if (node === null) {
      return;
    }

    // Traverse left subtree
    this.#postOrderRecursive(node.getLeftChild(), callback);

    // Traverse right subtree
    this.#postOrderRecursive(node.getRightChild(), callback);

    // Call callback on current node
    callback(node);
  }

  /**
   * Returns the height of a given node.
   * Height is defined as the number of edges in the longest path from the node to a leaf.
   *
   * @param {BSTNode | null} node - Node to calculate height for.
   * @returns {number} Height of the node.
   */
  height(node) {
    if (node === null) {
      return -1; // Height of a null node is -1
    }

    const leftHeight = this.height(node.getLeftChild());
    const rightHeight = this.height(node.getRightChild());

    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * Returns the depth of a given node.
   * Depth is defined as the number of edges from the node to the root.
   *
   * @param {BSTNode} node - Node to calculate depth for.
   * @returns {number} Depth of the node.
   */
  depth(node) {
    let current = this.#root;
    let depth = 0;

    while (current !== null && current.getValue() !== node.getValue()) {
      if (node.getValue() < current.getValue()) {
        current = current.getLeftChild();
      } else {
        current = current.getRightChild();
      }
      depth++;
    }

    return current === null ? -1 : depth; // Return -1 if node is not found
  }

  /**
   * Checks if the tree is balanced.
   * A tree is balanced if the difference between the heights of the left and right subtrees of every node is not more than 1.
   *
   * @returns {boolean} True if the tree is balanced, false otherwise.
   */
  isBalanced() {
    return this.#isBalancedRecursive(this.#root);
  }

  /**
   * Helper function to check if a subtree is balanced.
   *
   * @param {BSTNode | null} node - Root of the subtree.
   * @returns {boolean} True if the subtree is balanced, false otherwise.
   */
  #isBalancedRecursive(node) {
    if (node === null) {
      return true; // An empty tree is balanced
    }

    const leftHeight = this.height(node.getLeftChild());
    const rightHeight = this.height(node.getRightChild());

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    return (
      this.#isBalancedRecursive(node.getLeftChild()) &&
      this.#isBalancedRecursive(node.getRightChild())
    );
  }

  /**
   * Rebalances an unbalanced tree.
   * Uses an in-order traversal to collect node values and rebuilds the tree.
   */
  rebalance() {
    const nodes = [];
    this.inOrder((node) => nodes.push(node.getValue())); // Collect node values in-order
    this.#root = this.#buildTreeFromArray(nodes); // Rebuild the tree
  }

  /**
   * Serialize a binary tree into a string
   *
   * @param {BSTNode} rootNode Root node of the subtree to print
   * @param {string} prefix Prefix
   * @param {boolean} isLeft True if it's the left part of a bigger tree
   */
  toString(rootNode = this.#root, prefix = "", isLeft = true) {
    if (rootNode === null)
      return "";

    let result = "";

    // Recursively process the right child first
    if (rootNode.getRightChild() !== null)
      result += this.toString(rootNode.getRightChild(), `${prefix}${isLeft ? "│   " : "    "}`, false);

    // Add the current node's value to the result
    result += `${prefix}${isLeft ? "└── " : "┌── "}${rootNode.getValue()}\n`;

    // Recursively process the left child
    if (rootNode.getLeftChild() !== null)
      result += this.toString(rootNode.getLeftChild(), `${prefix}${isLeft ? "    " : "│   "}`, true);

    return result;
  }

  // DEBUG / DEVELOP METHOD
  // TODO: DELETE IT
  print() {console.log(this.toString());}
}

export default BinarySearchTree;
