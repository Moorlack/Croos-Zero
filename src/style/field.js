import {StyleSheet} from "react-native";

export const fields = StyleSheet.create({
    table: {
        width: '80%',
        aspectRatio: 1,
        marginTop: 40
    },
    column: {
        width: 100,
        height: 100,
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    }
});