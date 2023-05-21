import {StyleSheet} from "react-native";
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

export const fields = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313133',
        alignItems: 'center',
        justifyContent: 'center',
    }
});