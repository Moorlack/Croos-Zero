import { useState } from "react";
import useTable from "./useTable";

const FIRST_PLAYER = "x"
function useGame(onGameWin, onGameTie) {
    const [isEnded, setIsEnded] = useState(false)
    const [currentTurn, setTurn] = useState(FIRST_PLAYER);
    const restart = () => {
        resetTable()
        setTurn(FIRST_PLAYER)
        setIsEnded(false)
    }
    const onSomeoneWin = () => {
        setIsEnded(true)
        onGameWin(restart, currentTurn)
    }
    const onTie = () => {
        setIsEnded(true)
        onGameTie(restart)
    }

    const [table, setBlockValue, resetTable] = useTable(onSomeoneWin, onTie)
    const onBlockClicked = (rowIndex, columnIndex) => {
        if(table[rowIndex][columnIndex] !== "") return
        setBlockValue(currentTurn, rowIndex, columnIndex)
        setTurn(oldTurn => oldTurn === "x" ? "0" : "x")
    }

    return [table, currentTurn, isEnded, onBlockClicked, restart]
}

export default useGame