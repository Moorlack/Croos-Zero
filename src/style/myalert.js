import {StyleSheet} from "react-native";
export const textes = StyleSheet.create({
    turn: {
        fontSize: 24,
        color: 'yellow',
        fontFamily: 'Segoe UI Black',
        position: 'absolute',
        top: 100
    },
})

export const alert = StyleSheet.create({
    all: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    window: {
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        borderRadius: 10,
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        fontFamily: 'Segoe UI Black',
        fontSize: 20,
        marginBottom: 15
    },
    button: {
        backgroundColor: '#313133',
        borderRadius: 5,
        padding: 10,
        elevation: 2
    },
    textbutton: {
        color: 'yellow',
        fontFamily: 'Segoe UI Black',
        fontSize: 20
    },
})