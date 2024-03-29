/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './OptionalLogin.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Google from '../../assets/Google.svg';
import Facebook from '../../assets/Facebook.svg';
import Apple from '../../assets/Apple';

export default function OptionalLogin(props){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.icons}>
              <TouchableOpacity>
                <Google style={{elevation: 1}}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Apple />
              </TouchableOpacity>
              <TouchableOpacity>
                <Facebook />
              </TouchableOpacity>
            </View>
        </View>
    );
}
