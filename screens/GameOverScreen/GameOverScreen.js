import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const GameOverScreen =  ({ totalRounds, chosenNumber, restartGame }) => {
    return (
        <View style={styles.screen}>
            <Text>The game is over!</Text>
            <Text>Number of rounds: {totalRounds}</Text>
            <Text>Numbre was: {chosenNumber}</Text>
            <Button title='Restart game' onPress={restartGame}/>
        </View>
    );
};

const styles = new StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;