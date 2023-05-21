import {StyleSheet} from "react-native";

export const cross = StyleSheet.create({
    cross: {
        flex: 1
    },
    line1: {
        position: 'absolute',
        left: 45,
        width: 10,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'yellow',
        transform: [
            {
                rotate: '45deg',
            },
        ],
    },
    line2: {
        transform: [
            {
                rotate: '-45deg'
            },
        ],
    },
})

export const zero = StyleSheet.create({
    zero: {
        flex: 1,
        borderWidth: 10,
        borderColor: 'yellow',
        borderRadius: 50,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})