/* eslint-disable prettier/prettier */
import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './SettingsButtons.style';

export default function SettingsButtons(props) {

    return (
        <View>
            <TouchableOpacity>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}