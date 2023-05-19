import React from "react";
import { View } from "react-native";
import { cross } from '../../style/style'

function Cross() {
    return (<View style={cross.cross}>
        <View style={cross.line1}/>
        <View style={[cross.line1, cross.line2]}/>
    </View>)
}

export default Cross;