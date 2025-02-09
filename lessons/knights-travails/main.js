function knightMoves(start, end) {
  // Define all 8 possible moves for a knight
  const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  // Check if a position is within the chessboard
  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // BFS setup
  const queue = [[start]]; // Queue stores paths
  const visited = new Set(); // Track visited squares
  visited.add(start.toString()); // Mark start as visited

  while (queue.length > 0) {
    const path = queue.shift(); // Get the first path from the queue
    const [currentX, currentY] = path[path.length - 1]; // Get the last square in the path

    // Check if the current square is the target
    if (currentX === end[0] && currentY === end[1]) {
      return path; // Return the path if the target is reached
    }

    // Explore all possible moves
    for (const [dx, dy] of moves) {
      const newX = currentX + dx;
      const newY = currentY + dy;

      if (isValid(newX, newY)) {
        const newSquare = [newX, newY];
        const newSquareKey = newSquare.toString();

        // If the new square hasn't been visited, add it to the queue
        if (!visited.has(newSquareKey)) {
          visited.add(newSquareKey);
          queue.push([...path, newSquare]); // Add the new path to the queue
        }
      }
    }
  }

  // If no path is found (shouldn't happen on a chessboard)
  return null;
}

console.log(knightMoves([0, 0], [1, 2]));
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([3, 3], [4, 3]));
console.log(knightMoves([0, 0], [7, 7]));
