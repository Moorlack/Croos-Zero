import { useEffect } from "react";
import Background from "./background/Background"
import GameStatus from "./gameStatus/GameStatus"
import GameField from "./gameField/GameField";
import useGame from "../hooks/useGame";
import useModal from "../hooks/useModal";

function Game({ onStateChanged }) {
    const [modal, create] = useModal()
    const onWin = (restart, winner) => create(`GAME ENDED: ${winner.toUpperCase()}`, restart)
    const onTie = restart => create("GAME ENDED: TIE", restart)

    const [table, currentTurn, isEnded, endTurn] = useGame(onWin, onTie)

    useEffect(() => {
        onStateChanged && onStateChanged({ table, endTurn, currentTurn, isEnded })
    }, [table, endTurn, currentTurn, onStateChanged, isEnded])

    return (<>
        {modal}
        <Background>
            <GameStatus currentTurn={currentTurn} />
            <GameField table={table} onClick={endTurn} />
        </Background>
    </>)
}

export default Game