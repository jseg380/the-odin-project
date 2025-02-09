import BinarySearchTree from "./BinarySearchTree.js";

// Helper function to generate an array of random numbers
function generateRandomNumbers(length, max) {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
}

// Main driver script
function driverScript() {
  const bst = new BinarySearchTree();

  // Step 1: Create a BST from an array of random numbers < 100
  const randomNumbers = generateRandomNumbers(10, 100);
  console.log("Random numbers:", randomNumbers);
  bst.buildTree(randomNumbers);

  // Step 2: Confirm that the tree is balanced
  console.log("Is tree balanced?", bst.isBalanced()); // Should print: true

  // Step 3: Print elements in level, pre, post, and in order
  console.log("Level-order traversal:");
  bst.levelOrder((node) => console.log(node.getValue()));

  console.log("Pre-order traversal:");
  bst.preOrder((node) => console.log(node.getValue()));

  console.log("Post-order traversal:");
  bst.postOrder((node) => console.log(node.getValue()));

  console.log("In-order traversal:");
  bst.inOrder((node) => console.log(node.getValue()));

  // Step 4: Unbalance the tree by adding numbers > 100
  bst.insertValue(150);
  bst.insertValue(120);
  bst.insertValue(130);
  console.log("Added numbers > 100 to unbalance the tree.");

  // Step 5: Confirm that the tree is unbalanced
  console.log("Is tree balanced after adding large numbers?", bst.isBalanced()); // Should print: false

  // Step 6: Balance the tree by calling rebalance
  bst.rebalance();
  console.log("Tree rebalanced.");

  // Step 7: Confirm that the tree is balanced
  console.log("Is tree balanced after rebalance?", bst.isBalanced()); // Should print: true

  // Step 8: Print elements in level, pre, post, and in order
  console.log("Level-order traversal after rebalance:");
  bst.levelOrder((node) => console.log(node.getValue()));

  console.log("Pre-order traversal after rebalance:");
  bst.preOrder((node) => console.log(node.getValue()));

  console.log("Post-order traversal after rebalance:");
  bst.postOrder((node) => console.log(node.getValue()));

  console.log("In-order traversal after rebalance:");
  bst.inOrder((node) => console.log(node.getValue()));
}

// Run the driver script
driverScript();
