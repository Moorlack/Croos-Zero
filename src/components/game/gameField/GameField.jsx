import { fields } from '../../../style/style';
import { View } from "react-native";
import Row from "./row/Row";
function GameField({ table, onClick }) {
    return (<View style={ fields.table }>
         {table.map((row, rowNumber) => (
            <Row  
                key={rowNumber}
                row={row}
                rowNumber={rowNumber}
                onClick={onClick}
            />
        ))}
    </View>)
}
export default GameField