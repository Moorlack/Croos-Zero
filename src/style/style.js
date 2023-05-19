import {StyleSheet} from "react-native";

export const fields = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313133',
        alignItems: 'center',
        justifyContent: 'center',
    },
    field: {
        width: 385,
        height: 770,
        alignItems: 'center',
        justifyContent: 'center',
    },
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

export const switcher = StyleSheet.create({
    switchButton: {
        backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 50, // adjust as needed
        alignSelf: 'center',
        zIndex: 1000,
        padding: 10
    },
    switchButtonText: {
        color: '#313133',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})