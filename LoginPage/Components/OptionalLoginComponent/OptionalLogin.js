import React from 'react';
import {View, Text} from 'react-native';
import styles from './OptionalLogin.style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function OptionalLogin(props){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={console.log('p')}
  >
    Login with Facebook
  </Icon.Button>
        </View>
    );
}