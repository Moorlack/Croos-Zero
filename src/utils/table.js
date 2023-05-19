function copy(matrix) {
    return matrix.map(row => [...row])
}

function createEmptyTable() {
    return [
        ['','',''],
        ['','',''],
        ['','','']
    ]
}

export {copy, createEmptyTable}