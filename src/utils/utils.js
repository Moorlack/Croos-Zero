function isTie(table) {
    return table.every(row => row.every(value => value !== ""))
}

function isSomeoneWin(table) {
    const isRowFilled = table.some(row => isAllArrayHaveSameValues(row))
    const isColumnFilled = checkIsColumnFilled(table)
    const isDiagonalFilled = checkIsDiagonalFilled(table)
    return isRowFilled || isColumnFilled || isDiagonalFilled
}

function checkIsColumnFilled(table) {
  for(let columnIndex = 0; columnIndex < table[0].length; columnIndex++) {
      let column = []
      table.forEach(row => column.push(row[columnIndex]))
      if(isAllArrayHaveSameValues(column)) return true
  }
  return false
}

function checkIsDiagonalFilled(table) {
  let leftDiagonal = []
  let rightDiagonal = []
  for(let index = 0; index < table.length; index++) {
      leftDiagonal.push(table[index][index]);
      rightDiagonal.push(table[table.length - index - 1][index])
  }
  return isAllArrayHaveSameValues(leftDiagonal) || isAllArrayHaveSameValues(rightDiagonal)
}

function isAllArrayHaveSameValues(array) {
    return array.every(val => val !== "") && [...new Set(array)].length === 1
}

export { isSomeoneWin, isTie }