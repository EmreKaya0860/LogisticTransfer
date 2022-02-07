/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';
import styles from './CheckSettings.style';

export default function CheckSettings(props){

    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.container}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                setChecked(!checked);
                }}
            />
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}