import {useState} from "react";
import {isSomeoneWin, isTie} from "../../utils/utils";
import {createEmptyTable} from "../../utils/table";

function useTable(onWin, onTie) {
    const [table, setTable] = useState(createEmptyTable)
    const onBlockClicked = (currentTurn, rowIndex, columnIndex) => {
        const updatedTable = [...table]
        updatedTable[rowIndex][columnIndex] = currentTurn
        setTable(updatedTable)
        if (isSomeoneWin(updatedTable)) return onWin()
        if (isTie(updatedTable)) return onTie()
    }

    return [table, onBlockClicked, () => setTable(createEmptyTable)]
}

export default useTable