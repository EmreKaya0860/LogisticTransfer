/* eslint-disable prettier/prettier */
import React from "react";
import { View, TouchableOpacity} from "react-native";
import styles from './Header.style';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Logo from '../../assets/Top_Logo.svg';


export default function Header(props){

    function deneme(){
        props.nav.navigate("MenuPage");
    }

    return (
        <View style={styles.top_container}>
        <Logo/>
        <View style= {styles.icon_container}>
            <MaterialIcon name="lightning-bolt-outline" size={27} color="grey"/>
            <IonIcon name="notifications-outline" size={27} color="grey"/>
            <TouchableOpacity onPress={deneme}>
                <MaterialIcon name="dots-vertical" size={27} color="grey"/>
            </TouchableOpacity>
        </View>
    </View>
    );
}