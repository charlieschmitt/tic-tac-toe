class Cell {

    constructor() {
        this.pos = {
            posX: '',
            posY: '',
        }
        this.isActive = false;
        this.propertiesCSS = null;
        this.nameClass = '';
        this.state = '';
    }

    createCell(x, y, row) {
        let cell = document.createElement('td');
        cell.classList.add('cell');
        cell.id = x + '-' + y;
        this.propertiesCSS = cell;
        row.appendChild(cell);
    }

}