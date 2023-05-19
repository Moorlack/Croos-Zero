import React from "react";
import { Pressable } from "react-native";
import { fields } from '../../../../style/style'
import Cross from "../../../utils/Cross";
import Zero from "../../../utils/Zero";

function Column({ value, onClick }) {
    return (<Pressable onPress={onClick} style={fields.column}>
        {value === '0' && <Zero/>}
        {value === 'x' && <Cross/>}
    </Pressable>)
}

export default Column;