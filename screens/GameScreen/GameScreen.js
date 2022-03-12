import React, {useState, useRef} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import { Alert } from 'react-native';
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
    const currentLow = useRef(1);
    const currentHight = useRef(100);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < excludeNumber) 
        || (direction === 'greater' && currentGuess > excludeNumber)) {
            Alert.alert(
                'Don\'t lie!',
                'You know that this is cheating, right?',
                [{
                    text: 'Sorry!',
                    style: 'cancel'
                }]
            );

            return;
        }

        if (direction === 'lower') {
            currentHight.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateNumberBetween(currentLow.current, currentHight.current, currentGuess);
        
        setCurrentGuess(nextNumber);
    };

    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={() => nextGuessHandler('lower')}/>
                <Button title='GREATER' onPress={() => nextGuessHandler('greater')}/>
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