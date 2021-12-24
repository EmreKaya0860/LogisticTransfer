import React from 'react';
import {View, Text} from 'react-native';
import styles from './OptionalLogin.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function OptionalLogin(props){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.icons}>
              <Icon.Button name='google' size={30}/>
              <Icon.Button name='apple' size={30}/>
              <Icon.Button name='facebook' size={30}/>
            </View>
        </View>
    );
}