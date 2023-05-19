import {isSomeoneWin} from "../utils";
import {copy} from "../table";

function getBotChose(table) {
    const emptyCells = findEmptyCells(table)
    for(const player of ["0", "x"]) {
        const chose = imitateTurn(player, table, emptyCells)
        if(chose) return chose
    }
    return emptyCells[Math.floor(Math.random() * emptyCells.length)]
}
function findEmptyCells(table) {
    let cells = []
    table.forEach((row, rowNumber) => {
        row.forEach((column, columnNumber) => {
            if (column === '') {
                cells.push({row: rowNumber, column: columnNumber})
            }
        })
    });
    return cells
}

function imitateTurn(player, table, emptyCells) {
    for(const position of emptyCells) {
        const copiedTable = copy(table)
        copiedTable[position.row][position.column] = player;
        if(isSomeoneWin(copiedTable)) return position
    }
    return null
}

export {getBotChose}