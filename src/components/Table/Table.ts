const numRows = 8;
const numCols = 8;

// Crear una matriz para el tablero
const board: (string | number)[][] = [];

// Llenar la matriz con celdas vacías (0) o minas ('M')
for (let row = 0; row < numRows; row++) {
  const rowArray: (string | number)[] = [];
  for (let col = 0; col < numCols; col++) {
    // Inicialmente, todas las celdas están vacías
    rowArray.push(0);
  }
  board.push(rowArray);
}

// Función para colocar minas en el tablero de manera aleatoria
function placeMines(board: (string | number)[][], numMines: number) {
  let minesPlaced = 0;
  while (minesPlaced < numMines) {
    const randomRow = Math.floor(Math.random() * numRows);
    const randomCol = Math.floor(Math.random() * numCols);
    if (board[randomRow][randomCol] !== 'M') {
      board[randomRow][randomCol] = 'M';
      minesPlaced++;
    }
  }
}


// Llama a la función para colocar minas en el tablero (por ejemplo, 10 minas)
placeMines(board, 10);

// Imprimir el tablero en la consola (para verificar)
for (let row = 0; row < numRows; row++) {
  console.log(board[row].join(' '));
}