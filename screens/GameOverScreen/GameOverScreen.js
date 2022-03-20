import React from 'react';
import {
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import BodyText from '../../components/BodyText';
import TitleText from '../../components/TitleText';

const GameOverScreen =  ({ totalRounds, chosenNumber, restartGame }) => {
    return (
        <View style={styles.screen}>

            <TitleText>The game is over!</TitleText>
            <Image 
                style={styles.image} 
                source={require('../../assets/success.png')}
                resizeMode="contain"
            />
            <BodyText>Number of rounds: {totalRounds}</BodyText>
            <BodyText>Numbre was: {chosenNumber}</BodyText>
            <Button title='Restart game' onPress={restartGame}/>
        </View>
    );
};

const styles = new StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: 300
    }
});

export default GameOverScreen;