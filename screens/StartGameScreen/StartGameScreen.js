import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    Alert,
    StyleSheet
} from 'react-native';
import Card from '../../components/Card';
import Colors from '../../constants/colors';
import Input from '../../components/Input';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import BodyText from '../../components/BodyText';
import TitleText from '../../components/TitleText';

const StartGameScreen = ({ onStartGame }) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };
    
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInputHandler
            }]);

            return;
        }

        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaeryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='START GAME' onPress={() => onStartGame(selectedNumber)}/>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button 
                                title='Reset' 
                                color={Colors.accent}
                                onPress={resetInputHandler} 
                            />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title='Confirm' 
                                color={Colors.primary} 
                                onPress={confirmInputHandler} 
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = new StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold '
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    button: {
        width: 100,
        marginTop: 20
    },
    summaeryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
});

export default StartGameScreen;