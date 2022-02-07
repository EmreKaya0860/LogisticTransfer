/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './Title.style';

import Artboard from '../../assets/Artboard.svg';
import Ba from '../../assets/ba.svg';

export default function Title(props){

    return(
        <View style={styles.container}>
            <View style={styles.left_container}>
                <Ba />
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <Artboard />
        </View>
    );
}