import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

const Input = (props) => {
    return <TextInput {...props} style={{...styles.input, ...props.style}} />
}

const styles = new StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
});

export default Input;