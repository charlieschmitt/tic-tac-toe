class Game {
    
    constructor(cells, grid) {
        this.cells = cells;
        this.grid = grid;
        this.players = [new Player('X', true), new Player('O', false)];
        this.currentPlayer = this.players[0].active;
        this.score = {
            x: 1, 
            o: 1
        };
        this.clickBoard();
    }

    clickBoard() {
        this.cells.forEach((cell) => {
            cell.propertiesCSS.addEventListener('click', this.displaySymbolOnClick.bind(this, cell));
        });

    }

    displaySymbolOnClick(cell) {
        if(this.currentPlayer === this.players[0].active && cell.isActive !== true) {
            cell.nameClass = 'cross';
            cell.state = 'x';
            document.getElementById(cell.propertiesCSS.id).classList.add(cell.nameClass);
            this.cellActivation(cell);
        }
        else if(this.currentPlayer === this.players[1].active && cell.isActive !== true) {
            cell.nameClass = 'round';
            cell.state = 'o';
            document.getElementById(cell.propertiesCSS.id).classList.add(cell.nameClass);
            this.cellActivation(cell);
        }
        else {
            alert('Position déjà clickée !');
        }
        document.getElementById(cell.propertiesCSS.id).classList.add('active');
        this.checkAlignment();
        return this.nextPlayer();
    }

    cellActivation(cell) {
        cell.isActive = true;
    }

    checkAlignment() {
        this.checkHorizontalAlignment(), this.checkVerticalAlignment(), this.checkDiagonalAlignment();
    }

    checkHorizontalAlignment() {
        for(let i = 0; i < this.grid.length; i++) {
            if(this.grid[i][0].state !== '' && this.grid[i][0].state === this.grid[i][1].state && this.grid[i][0].state === this.grid[i][2].state) {
                this.checkWinner(this.grid[i][0].state);
            }
        }
    }

    checkVerticalAlignment() {
        for(let i = 0; i < this.grid.length; i++) {
            if(this.grid[0][i].state !== '' && this.grid[0][i].state === this.grid[1][i].state && this.grid[0][i].state === this.grid[2][i].state) {
                this.checkWinner(this.grid[0][i].state);
            }
        }
    }

    checkDiagonalAlignment() {
        if(this.grid[0][0].state !== '' && this.grid[0][0].state === this.grid[1][1].state && this.grid[0][0].state === this.grid[2][2].state
            || this.grid[0][2].state !== '' && this.grid[0][2].state === this.grid[1][1].state && this.grid[0][2].state === this.grid[2][0].state) {
            this.checkWinner(this.grid[1][1].state);
        }
    }

    checkWinner(winner) {
        if(winner === 'x') {
            let scoreX = document.querySelector('.score-x');
            scoreX.innerHTML = this.score.x;
            this.score.x++;
        }
        else if(winner === 'o') {
            let scoreO = document.querySelector('.score-o');
            scoreO.innerHTML = this.score.o;
            this.score.o++;
        }
        return this.restart();
    }

    nextPlayer() {
        if(this.currentPlayer === this.players[0].active) {
            this.players[0].active = false;
            this.players[1].active = true;
        }
        else {
            this.players[0].active = true;
            this.players[1].active = false;
        }
    }

    restart() {
        const restart = prompt('Voulez-vous rejouer ? * Oui ou Non')
        if(restart === 'Oui') {
            for(let i = 0; i < this.cells.length; i++) {
                this.cells[i].isActive = false;
                this.cells[i].nameClass = '';
                this.cells[i].state = '';
                document.getElementById(this.cells[i].propertiesCSS.id).classList.remove('cross', 'round', 'active');
            }
        }
        else if(restart === 'Non') {
            alert('SALUT')
        }
    }

}