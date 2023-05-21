import { Text } from "react-native";
import { textes } from '../../../style/myalert';

function GameStatus({ currentTurn }) {
    return (<Text style={textes.turn}>{currentTurn.toUpperCase()} TURN</Text>)
}

export default GameStatus 