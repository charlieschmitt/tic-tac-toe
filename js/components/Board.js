class Board {

    constructor() {
        this.rows = 3;
        this.columns = 3;
        this.cell;
        this.cells = [];
        this.createGrid(this.cell, this.cells);
    }

    createGrid(cell, cells) {
        for(let i = 1; i <= this.rows; i++) {
            let row = document.createElement('tr');
            row.classList.add('row');
            for(let j = 1; j <= this.columns; j++) {
                cell = new Cell();
                cell.createCell(i, j, row);
                cell.pos = { posX: i, posY: j };
                cells.push(cell);
            }
            let map = document.getElementById('map');
            map.appendChild(row);
        }

        this.grid = [
                    [this.cells[0], this.cells[1], this.cells[2]], 
                    [this.cells[3], this.cells[4], this.cells[5]],
                    [this.cells[6], this.cells[7], this.cells[8]]
                ];

        return this.startGame();
    }

    startGame() {
        const GameTicTacToe = new Game(this.cells, this.grid);
    }
    
}