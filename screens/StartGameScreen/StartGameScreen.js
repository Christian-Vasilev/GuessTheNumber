import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import Card from '../../components/Card';
import Colors from '../../constants/colors';
import Input from '../../components/Input';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Reset' 
                            color={Colors.accent}
                            onPress={() => {}}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title='Confirm' 
                            color={Colors.primary} 
                            onPress={() => {}} 
                        />
                    </View>
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
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    button: {
        width: 100,
        marginTop: 20
    }
});

export default StartGameScreen;