const Gameboard = () => {
  const rows = 3;
  const columns = 3;
  let board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const placeMarker = (position, player) => {
    // Markers can only be placed in unoccupied cells
    if (!board[position.row][position.col].isEmpty()) return;

    board[position.row][position.col].placeMarker(player);
  };

  return { getBoard, placeMarker };
};

const Cell = () => {
  const EMPTY = '';
  let value = EMPTY;

  const isEmpty = () => value === EMPTY;

  const getValue = () => value;

  const placeMarker = (player) => value = player.getMarker();

  const getElement = () => {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('space');
    cellDiv.textContent = value;
    if (value !== EMPTY) {
      cellDiv.classList.add('occupied');
    }

    return cellDiv;
  };

  return { isEmpty, getValue, placeMarker, getElement };
};

const PlayerFactory = (name, marker) => {
  let score = 0;
  
  const getName = () => name;

  const getMarker = () => marker;

  const getScore = function() {
    return score;
  };

  const increaseScore = function() {
    score++;
  };

  return { getName, getMarker, getScore, increaseScore };
};

const DisplayController = () => {
  let players = [];
  let turn = 0;
  let board = Gameboard();

  const getPlayers = function(players) {
    const playerDialog = document.querySelector('#username');
    const playerPlaceholder = document.querySelectorAll('#username span');
    const nameInput = document.querySelector('#username input[name="username"]');
    const markerContainer = document.querySelectorAll('#username .marker-input');
    const markerInput = document.querySelectorAll('#username input[name="marker"]');
    const playerButton = document.querySelector('#username button');

    playerDialog.classList.remove('disabled');

    // Player 1 (0 in array)
    playerPlaceholder.forEach(el => el.textContent = '1');

    let name = '';
    let marker = '';

    playerButton.addEventListener('click', function(e) {
      e.preventDefault();
      if (players.length === 0) {
        if (!nameInput.checkValidity() || !markerInput[0].checkValidity()) 
          return;
    
        name = nameInput.value;
        marker = Array.from(markerInput).filter(el => el.checked)[0].value;

        players.push(PlayerFactory(name, marker));

        nameInput.value = '';
        markerContainer.forEach(el => el.classList.add('disabled'));
        
        // Update to Player 2
        playerPlaceholder.forEach(el => el.textContent = '2');
        marker = Array.from(markerInput).filter(el => !el.checked)[0].value;
      }
      else {
        if (!nameInput.checkValidity()) return;

        name = nameInput.value;

        players.push(PlayerFactory(name, marker));

        // Reset dialog to original state
        playerDialog.classList.add('disabled');
        markerContainer.forEach(el => el.classList.remove('disabled'));
        nameInput.value = '';
        markerInput.forEach(el => el.checked = false);

        updateDisplay();
      }
    });
  };

  const updateDisplay = function() {
    // Render players information
    const playerName = document.querySelector('#player');
    const playerMarker = document.querySelector('#player-marker');
    const opponentName = document.querySelector('#opponent');
    const opponentMarker = document.querySelector('#opponent-marker');

    playerName.textContent = `${players[0].getName()}: ${players[0].getScore()}`;
    playerMarker.textContent = players[0].getMarker();

    opponentName.textContent = `${players[1].getName()}: ${players[1].getScore()}`;
    opponentMarker.textContent = players[1].getMarker();

    // Render gameboard
    const boardDiv = document.querySelector('#game');
  
    boardDiv.textContent = '';

    const currentBoard = board.getBoard();
    for (let i = 0; i < currentBoard.length; i++) {
      for (let j = 0; j < currentBoard[i].length; j++) {
        const cellDiv = currentBoard[i][j].getElement();
        cellDiv.dataset.row = i;
        cellDiv.dataset.col = j;
        boardDiv.appendChild(cellDiv);
      }
    }
    
    playRound();
  };

  const playRound = function() {
    const boardDiv = document.querySelector('#game');

    const turnDiv = document.querySelector('#turn');
    turnDiv.textContent = `Turn: ${players[turn].getMarker()}`;

    Array.from(boardDiv.children).forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.classList.contains('occupied')) return;

        board.placeMarker(
          {'row': e.target.dataset.row, 'col': e.target.dataset.col},
          players[turn]
        );

        // Check if current player has won with the move selected
        if (checkForWin(players[turn]) === true) {
          endMatch(players[turn]);
          players[turn].increaseScore();
        }
        else if (checkForDraw()) {
          endMatch(null);
        }
        else {
          // It's the turn of the other player
          turn = (turn + 1) % players.length;
        }

        updateDisplay();
      });
    }, { once : true });
  };

  const compareArrays = (a1, a2) => {
    let equal = true;

    if (a1.length !== a2.length) {
      equal = false;
    }
    else {
      for (let i = 0; i < a1.length && equal; i++) {
        if (a1[i] !== a2[i]) {
          equal = false;
        }
      }
    }
    
    return equal;
  };

  const checkForWin = function(player) {
    const currentBoard = board.getBoard();
    const currentMarker = player.getMarker();
    const winArray = Array(3).fill(currentMarker);
    let win = false;

    // Check for wins in the rows
    for (let i = 0; i < currentBoard.length && !win; i++) {
      let row = [];
      for (let j = 0; j < currentBoard.length; j++) {
        row.push(currentBoard[i][j].getValue());
      }

      if (compareArrays(row, winArray)) {
        win = true;
      }
    }

    // Check for wins in the columns
    for (let i = 0; i < currentBoard.length && !win; i++) {
      let column = [];
      for (let j = 0; j < currentBoard.length; j++) {
        column.push(currentBoard[j][i].getValue());
      }

      if (compareArrays(column, winArray)) {
        win = true;
      }
    }

    // Check for wins in the diagonals
    let diagonal = [];
    for (let i = 0; i < currentBoard.length && !win; i++) {
      diagonal.push(currentBoard[i][i].getValue());
    }

    if (!win && compareArrays(diagonal, winArray)) {
      win = true;
    }

    diagonal.length = 0;
    for (let i = 0; i < currentBoard.length && !win; i++) {
      diagonal.push(currentBoard[i][currentBoard.length - i - 1].getValue());
    }

    if (!win && compareArrays(diagonal, winArray)) {
      win = true;
    }

    return win;
  };

  const checkForDraw = function() {
    const currentBoard = board.getBoard();
    let draw = true;

    for (let i = 0; i < currentBoard.length && draw; i++) {
      for (let j = 0; j < currentBoard[i].length && draw; j++) {
        if (currentBoard[i][j].isEmpty()) {
          draw = false;
        }
      }
    }

    return draw;
  };

  const endMatch = function(player) {
    // Not working for some reason
    /*
    const turnDiv = document.querySelector('#turn');
    // It is a draw
    if (player === null) {
      turnDiv.textContent = 'DRAW';
    }
    // Someone won
    else {
      turnDiv.textContent = `${player.getName()} won`;
    }
    */

    const boardDiv = document.querySelector('#game');

    setTimeout(() => {
      Array.from(boardDiv.children).forEach(el => {
        el.classList.add('new-round');
      });
      boardDiv.classList.add('new-round');
      boardDiv.addEventListener('click', () => {
        boardDiv.classList.remove('new-round');
        board = Gameboard();
        updateDisplay();
      }, { once : true });
    }, 5);
  };

  const reset = function() {
    board = Gameboard();
    
    players.length = 0;
    getPlayers(players);
  };

  const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', reset);

  getPlayers(players);
};


DisplayController();
