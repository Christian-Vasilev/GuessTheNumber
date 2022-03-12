import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import Card from '../../components/Card';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={styles.inputContainer} >
                <Text>Select a Number</Text>
                <TextInput placeholder='What is your number' />
                <View style={styles.buttonContainer}>
                    <Button title='Reset' color='red' onPress={() => {}}/>
                    <Button title='Confirm' color='green' onPress={() => {}} />
                </View>
            </Card>
        </View>
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
    }
});

export default StartGameScreen;