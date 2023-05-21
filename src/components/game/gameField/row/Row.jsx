import React from "react";
import { View } from "react-native";
import Column from "../column/Column";
import { fields } from '../../../../style/field'

function Row({ row, rowNumber, onClick }) {
    return (<View style={fields.row}>
        {row.map((value, columnNumber) => (
            <Column
                key={columnNumber}
                value={value}
                onClick={() => onClick(rowNumber, columnNumber)}
            />
        ))}
    </View>)
}

export default Row;