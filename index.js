const board = document.querySelector('.board');
        const size = 10;
        const mines = 10;
        const mineLocations = generateMines(size, mines);

        // Create the grid
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                board.appendChild(cell);

                cell.addEventListener('click', function () {
                    revealCell(cell);
                });
            }
        }

        function generateMines(size, mines) {
            const mineLocations = [];

            while (mineLocations.length < mines) {
                const row = Math.floor(Math.random() * size);
                const col = Math.floor(Math.random() * size);
                const location = `${row},${col}`;

                if (!mineLocations.includes(location)) {
                    mineLocations.push(location);
                }
            }

            return mineLocations;
        }

        function revealCell(cell) {
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            const location = `${row},${col}`;

            if (mineLocations.includes(location)) {
                cell.textContent = '💣';
                cell.style.backgroundColor = 'red';
                // Handle game over logic here
            } else {
                // Implement logic to reveal adjacent cells
                // and display the number of adjacent mines
            }
        }