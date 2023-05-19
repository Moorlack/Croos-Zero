import { textes } from '../../../style/style';
import { Text } from "react-native";

function GameStatus({ currentTurn }) {
    return (<Text style={textes.turn}>{currentTurn.toUpperCase()} TURN</Text>)
}

export default GameStatus 