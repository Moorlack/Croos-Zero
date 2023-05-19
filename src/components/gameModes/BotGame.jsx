import Game from "../game/Game";
import { useCallback } from "react";
import { getBotChose } from "../../utils/bot/bot";

const BOT_PLAYER = "0"

function BotGame() {
    const onStateChanged = useCallback(({table, endTurn, currentTurn, isEnded}) => {
        if (currentTurn === BOT_PLAYER && !isEnded) {
            const {row, column} = getBotChose(table)
            endTurn(row, column)
        }
    }, [])

    return (<Game onStateChanged={onStateChanged}/>)
}

export default BotGame