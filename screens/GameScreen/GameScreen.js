import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import NumberContainer from '../../components/NumberContainer';
import Card from '../../components/Card';

const generateNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateNumberBetween(min, max, exclude);
    }

    return randomNumber;
}

const GameScreen = ({ excludeNumber }) => {
    const [currentGuess, setCurrentGuess] = useState(generateNumberBetween(1, 100, excludeNumber));
    
    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={() => {}}/>
                <Button title='GREATER' onPress={() => {}}/>
            </Card>
        </View>
    );
};

const styles = new StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
    

});

export default GameScreen;