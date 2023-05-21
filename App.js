import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar} from 'expo-status-bar';
import { fields, switcher } from './src/style/menu';
import Game from "./src/components/game/Game";
import useAppLoad from "./src/components/hooks/useAppLoad";
import BotGame from "./src/components/gameModes/BotGame";

export default function App() {
    const [isAppLoaded] = useAppLoad();
    const [gameMode, setGameMode] = useState('human');

    const switchGameMode = () => {
        setGameMode(prevMode => prevMode === 'human' ? 'bot' : 'human');
    }

    if (!isAppLoaded) return null;

    return (
        <View style={fields.container}>
            {gameMode === 'human' ? <Game /> : <BotGame />}
            <TouchableOpacity onPress={switchGameMode} style={switcher.switchButton}>
                <Text style={switcher.switchButtonText}>
                    {gameMode === 'human' ? "PVE" : "PVP"}
                </Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}